# GitHub Actions Secrets Setup Guide

This guide will help you set up all required secrets for the CI/CD workflows to function properly.

## Step 1: Access Repository Settings

1. Go to your repository: https://github.com/najmulhasan/construction-repair-services
2. Click on **Settings** (top right)
3. In the left sidebar, click on **Secrets and variables** > **Actions**

## Step 2: Add Required Secrets

### For Feature Branch Workflow (feat-lint-sonar.yml)

#### `SONAR_HOST_URL`
- Your SonarQube server URL (e.g., `https://sonarqube.example.com`)
- If using SonarCloud: `https://sonarcloud.io`

#### `SONAR_TOKEN`
- Generate at: `https://sonarqube.example.com/account/security/` (for SonarQube)
- Or at: `https://sonarcloud.io/account/security/` (for SonarCloud)
- **Steps**:
  1. Login to your SonarQube/SonarCloud account
  2. Go to Account > Security
  3. Generate new token
  4. Copy and paste the token as the secret value

### For Dev Deployment Workflow (dev-docker-push.yml)

#### `DOCKER_USERNAME`
- Your Docker Hub username
- Go to https://hub.docker.com and login
- Your username is displayed in the top right

#### `DOCKER_PASSWORD`
- Docker Hub access token (NOT your password)
- **Steps**:
  1. Go to https://hub.docker.com/settings/security
  2. Click "New Access Token"
  3. Give it a name: `construction-services-ci`
  4. Set permissions: Read, Write, Delete
  5. Copy the token and paste as the secret value

## Step 3: Adding Secrets

1. Click **New repository secret** button
2. Enter the secret name (e.g., `DOCKER_USERNAME`)
3. Paste the secret value
4. Click **Add secret**

Repeat for all four secrets.

## Step 4: Verify Secrets Setup

Once all secrets are added, they should appear in the list:
- ✅ DOCKER_PASSWORD
- ✅ DOCKER_USERNAME
- ✅ SONAR_HOST_URL
- ✅ SONAR_TOKEN

## Step 5: Enable Workflows

1. Go to **Actions** tab in your repository
2. Verify that workflows are enabled
3. Workflows should appear:
   - "Lint and Code Quality (Feature Branches)"
   - "Build, Scan and Push Docker Image (Dev Release)"

## Testing the Workflows

### Test Lint & SonarQube Workflow

```bash
# Create a feature branch
git checkout -b feat/test-workflow

# Make a small change
echo "# Test" >> README.md

# Commit and push
git add .
git commit -m "feat: test workflow"
git push origin feat/test-workflow

# Check GitHub Actions tab for workflow execution
```

### Test Docker Build & Push Workflow

1. Create a PR from `feat/test-workflow` to `integration`
2. Once merged to `integration`, create a PR from `integration` to `dev`
3. Merge the PR to `dev`
4. Check GitHub Actions tab for Docker build and push workflow

## Troubleshooting

### Workflow Fails with "Error: Resource not found"
- Verify all secrets are correctly named
- Check that Docker credentials are correct

### SonarQube Analysis Fails
- Verify `SONAR_HOST_URL` is accessible
- Verify `SONAR_TOKEN` has not expired
- Check SonarQube logs for errors

### Docker Push Fails
- Verify `DOCKER_USERNAME` and `DOCKER_PASSWORD` are correct
- Ensure Docker Hub account has storage available
- Check that username/password don't contain special characters that need escaping

### PR Creation Fails
- Verify `GITHUB_TOKEN` is available (should be automatic)
- Check that `integration` branch exists in the repository
- Ensure permissions allow PR creation

## Additional Configuration

### Create Integration and Dev Branches

If these branches don't exist yet:

```bash
# Create integration branch
git checkout -b integration
git push origin integration

# Create dev branch
git checkout -b dev
git push origin dev
```

### Set Branch Protection Rules (Optional but Recommended)

1. Go to Settings > Branches
2. Add branch protection rule for `dev`:
   - Require pull request reviews before merging
   - Require status checks to pass
   - Require branches to be up to date

## Support

For issues with secrets or workflows:
1. Check GitHub Actions logs for detailed error messages
2. Verify all credentials are correct and haven't expired
3. Ensure repository is public for certain integrations
4. Check SonarQube/Docker Hub documentation for permission requirements
