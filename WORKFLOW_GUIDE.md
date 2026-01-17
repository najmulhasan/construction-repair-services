# 🚀 Complete Workflow Guide

## Current Status ✅

Your Docker containers are **running successfully**:

```
✅ construction-backend    | Running | Port 5005 | HEALTHY
✅ construction-frontend   | Running | Port 3000 | HEALTHY
```

### Access Points:
- **Frontend Application**: http://localhost:3000
- **Backend API**: http://localhost:5005
- **API Test Endpoint**: http://localhost:5005/api/test

---

## 📋 Git Workflow Guide

### Complete Development Workflow

#### 1️⃣ **Setup Branches** (One-time)

```bash
# Create integration branch
git checkout -b integration
git push origin integration

# Create dev branch  
git checkout -b dev
git push origin dev

# Return to master
git checkout master
```

#### 2️⃣ **Create Feature Branch & Make Changes**

```bash
# Create new feature branch
git checkout -b feat/new-feature

# Make your changes
echo "Your code changes here" > file.js

# Stage changes
git add .

# Commit with descriptive message
git commit -m "feat: add new feature description"

# Push to GitHub
git push origin feat/new-feature
```

#### 3️⃣ **GitHub Actions Workflow #1 Triggers Automatically**

When you push to `feat/*` branch:

```
┌─────────────────────────────────────┐
│ Workflow Runs Automatically:        │
├─────────────────────────────────────┤
│ 1. ✅ Check out code               │
│ 2. ✅ Install dependencies         │
│ 3. ✅ Run ESLint on changed files  │
│ 4. ✅ SonarQube analysis          │
│ 5. ✅ Create PR to integration    │
└─────────────────────────────────────┘
```

**What to do:**
- Go to Pull Requests tab on GitHub
- Review the auto-created PR
- If all checks pass, merge to `integration`

#### 4️⃣ **Create PR: Integration → Dev**

```bash
# GitHub Web UI:
1. Go to Pull Requests
2. Click "New Pull Request"
3. Base: dev ← Compare: integration
4. Create Pull Request
5. Merge when ready
```

#### 5️⃣ **GitHub Actions Workflow #2 Triggers on Merge to Dev**

When PR is merged to `dev` from `integration`:

```
┌────────────────────────────────────────┐
│ Docker Build & Deploy Workflow Runs:   │
├────────────────────────────────────────┤
│ 1. ✅ Build Backend Docker image     │
│ 2. ✅ Build Frontend Docker image    │
│ 3. ✅ Scan for vulnerabilities       │
│ 4. ✅ Upload security reports        │
│ 5. ✅ Push to Docker Hub            │
│ 6. ✅ Generate deployment summary   │
└────────────────────────────────────────┘
```

**Images pushed to Docker Hub:**
```
✅ username/construction-backend:1.0.0
✅ username/construction-backend:latest
✅ username/construction-frontend:1.0.0
✅ username/construction-frontend:latest
```

---

## 🔧 Setup: GitHub Secrets

### IMPORTANT: Before Testing Workflows

Go to: https://github.com/najmulhasan/construction-repair-services/settings/secrets/actions

Click **New repository secret** for each:

#### Secret 1: `DOCKER_USERNAME`
1. Value: Your Docker Hub username (e.g., `yourname`)
2. Get from: https://hub.docker.com → Top right profile

#### Secret 2: `DOCKER_PASSWORD`
1. Value: Docker Hub access token (NOT password)
2. Get from: https://hub.docker.com/settings/security
3. Click "New Access Token" → Copy token

#### Secret 3: `SONAR_HOST_URL`
1. Value: Your SonarQube URL
2. Examples:
   - SonarCloud: `https://sonarcloud.io`
   - Self-hosted: `https://sonarqube.yourcompany.com`

#### Secret 4: `SONAR_TOKEN`
1. Value: SonarQube authentication token
2. Get from: SonarQube → Account → Security

**Verify all 4 secrets are listed:**
- ✅ DOCKER_PASSWORD
- ✅ DOCKER_USERNAME
- ✅ SONAR_HOST_URL
- ✅ SONAR_TOKEN

---

## 🧪 Test the Complete Workflow

### Test Workflow #1: Feature Branch Lint & SonarQube

```bash
# Step 1: Create test feature branch
git checkout -b feat/test-workflow

# Step 2: Make a small change
echo "// Test comment" >> backend/server.js

# Step 3: Commit and push
git add .
git commit -m "feat: test workflow changes"
git push origin feat/test-workflow

# Step 4: Watch GitHub Actions
# Go to: https://github.com/najmulhasan/construction-repair-services/actions
# Look for: "Lint and Code Quality (Feature Branches)"
```

**Expected Results:**
- ✅ ESLint runs on changed files
- ✅ SonarQube analysis completes
- ✅ PR auto-created to `integration`
- ✅ Workflow shows "passed" (green checkmark)

### Test Workflow #2: Docker Build & Deploy

```bash
# Step 1: Merge to integration
# Go to the auto-created PR and click "Merge pull request"

# Step 2: Create PR from integration → dev
# GitHub Web UI:
#   1. New Pull Request
#   2. Base: dev ← Compare: integration
#   3. Create
#   4. Merge

# Step 3: Watch GitHub Actions
# Go to: https://github.com/najmulhasan/construction-repair-services/actions
# Look for: "Build, Scan and Push Docker Image (Dev Release)"
```

**Expected Results:**
- ✅ Docker images built successfully
- ✅ Vulnerability scan completes
- ✅ Images pushed to Docker Hub
- ✅ Workflow shows "passed" (green checkmark)

---

## 📊 Full Git Workflow Diagram

```
┌────────────────────────────────────────────────────────────────┐
│                      COMPLETE WORKFLOW                        │
└────────────────────────────────────────────────────────────────┘

DEVELOPER ACTION          GIT ACTION           GITHUB ACTION
────────────────────────  ──────────────────   ─────────────────

Create feature           git checkout -b      Workflow #1:
Make changes            feat/feature-name    ✓ ESLint Check
Commit                  git commit -m "..."  ✓ SonarQube
                        git push origin      ✓ Auto-create PR
                        feat/feature-name    
                                   ↓
                        GitHub PR to        Check workflow
                        integration         results
                        branch              
                                   ↓
                        (After approval)     MERGE
                        Merge to            
                        integration         
                                   ↓
Create new PR           git checkout -b      (Manual PR)
integration → dev       dev
                        git pull origin
                        integration
                        Create PR on GitHub
                                   ↓
                        (After approval)     Workflow #2:
                        MERGE to dev         ✓ Build Docker
                                            ✓ Scan Images
                                            ✓ Push to Hub
                                            ✓ Reports
                                   ↓
                        ✅ Production Ready
                        Docker images
                        available on Hub
```

---

## 🐳 Docker Hub Image Details

After successful workflow completion:

```
Repository: username/construction-backend
Tags: 1.0.0, latest
Size: ~150MB (Alpine-based)
Platform: Linux/amd64

Repository: username/construction-frontend
Tags: 1.0.0, latest
Size: ~120MB (Alpine-based)
Platform: Linux/amd64
```

### Pull Production Images

```bash
docker pull username/construction-backend:latest
docker pull username/construction-frontend:latest

# Run in production
docker run -d -p 5005:5005 username/construction-backend:latest
docker run -d -p 3000:3000 username/construction-frontend:latest
```

---

## ✅ Verification Checklist

Before declaring "Ready for Production":

- [ ] Docker containers running locally ✅
- [ ] All 4 GitHub secrets configured
- [ ] `integration` branch created
- [ ] `dev` branch created
- [ ] Feature workflow tested
- [ ] Docker build workflow tested
- [ ] Images available on Docker Hub
- [ ] Vulnerability reports reviewed
- [ ] SonarQube analysis passed

---

## 📞 Troubleshooting

### Docker workflow doesn't trigger
**Issue**: Merge to dev doesn't trigger workflow
**Solution**: 
- Ensure branch is `dev` (case-sensitive)
- Ensure PR source is `integration`
- Check workflow file: `.github/workflows/dev-docker-push.yml`

### Secrets not working
**Issue**: "Resource not found" or "Permission denied"
**Solution**:
- Verify exact secret names in Settings
- Check that values are correct and not expired
- For Docker: Use access token, not password

### ESLint fails
**Issue**: Workflow fails on linting
**Solution**:
- Check `.eslintrc.js` configuration
- Run `npm run lint` locally to debug
- Fix issues and commit again

### SonarQube fails
**Issue**: "Failed to authenticate with SonarQube"
**Solution**:
- Verify `SONAR_HOST_URL` is accessible
- Verify `SONAR_TOKEN` hasn't expired
- Check SonarQube server logs

---

## 🚀 Next Steps

1. **✅ Configure GitHub Secrets** (Required)
   - Follow section: "🔧 Setup: GitHub Secrets"

2. **✅ Create Branches** (Required)
   - Follow section: "📋 Git Workflow Guide"

3. **✅ Test Workflows** (Recommended)
   - Follow section: "🧪 Test the Complete Workflow"

4. **✅ Start Development**
   - Create feature branches with `feat/` prefix
   - Workflows run automatically

---

## 📚 Quick Reference Commands

```bash
# View docker logs
docker-compose logs -f backend
docker-compose logs -f frontend

# Stop all containers
docker-compose down

# Remove volumes and rebuild
docker-compose down -v
docker-compose up --build

# Check running containers
docker ps

# View git branches
git branch -a

# View commit history
git log --oneline

# Create and checkout branch
git checkout -b branch-name

# Delete local branch
git branch -d branch-name

# Delete remote branch
git push origin --delete branch-name
```

---

## 🎯 Success Indicators

✅ **Workflow #1 Complete**:
- PR created to integration branch
- All checks pass (green checkmarks)
- SonarQube analysis available

✅ **Workflow #2 Complete**:
- Docker images built successfully
- Vulnerability reports generated
- Images pushed to Docker Hub
- Can pull latest images: `docker pull username/construction-backend:latest`

---

**Your CI/CD pipeline is now fully automated! 🎉**
