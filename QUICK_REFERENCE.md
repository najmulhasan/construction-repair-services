# 🚀 QUICK REFERENCE CARD

## ⚡ Quick Setup (5 minutes)

### 1. Configure GitHub Secrets
```
Go to: github.com/najmulhasan/construction-repair-services
Settings → Secrets and variables → Actions → New repository secret

Add these 4 secrets:
✅ DOCKER_USERNAME = your-docker-username
✅ DOCKER_PASSWORD = your-docker-access-token  
✅ SONAR_HOST_URL = https://sonarcloud.io (or your SonarQube URL)
✅ SONAR_TOKEN = your-sonarqube-token
```

### 2. Create Branches
```bash
git checkout -b integration && git push origin integration
git checkout -b dev && git push origin dev
```

### 3. Test Feature Workflow
```bash
git checkout -b feat/test
echo "// test" >> README.md
git add . && git commit -m "feat: test"
git push origin feat/test
# Check: https://github.com/najmulhasan/construction-repair-services/actions
```

---

## 🎯 Development Workflow

### Create Feature
```bash
git checkout -b feat/your-feature-name
# Make changes...
git add .
git commit -m "feat: description"
git push origin feat/your-feature-name
```

### After Approval
```bash
# Workflow #1 runs automatically
# Merge auto-created PR to integration
# Then manually merge integration → dev via PR
# Workflow #2 runs automatically
# Docker images pushed to Docker Hub ✅
```

---

## 🐳 Docker Commands

```bash
# Start
docker-compose up --build

# View logs
docker-compose logs -f backend
docker-compose logs -f frontend

# Stop
docker-compose down

# Clean rebuild
docker-compose down -v
docker-compose up --build
```

---

## 📍 Access Points

| Service | URL | Status |
|---------|-----|--------|
| Frontend | http://localhost:3000 | ✅ |
| Backend | http://localhost:5005 | ✅ |
| Health Check | http://localhost:5005/api/test | ✅ |

---

## 📚 Documentation Files

| File | Purpose |
|------|---------|
| README.md | Project overview |
| GITHUB_SETUP.md | Secrets configuration |
| WORKFLOW_GUIDE.md | Complete workflow guide |
| IMPLEMENTATION_SUMMARY.md | Technical details |
| PROJECT_COMPLETION.md | What was completed |
| FINAL_STATUS.md | Final status report |

---

## 🔍 Git Branches

```bash
# Create integration
git checkout -b integration
git push origin integration

# Create dev
git checkout -b dev
git push origin dev

# Create feature
git checkout -b feat/feature-name
git push origin feat/feature-name

# View all
git branch -a
```

---

## ✅ Workflow Triggers

### Workflow #1 (Lint & SonarQube)
**Trigger**: Push to `feat/*` branch
```bash
git push origin feat/anything
```
**Result**: 
- ESLint runs on changed files
- SonarQube analysis
- Auto PR to integration

### Workflow #2 (Docker & Deploy)
**Trigger**: Merge PR from `integration` → `dev`
```
1. Merge to integration (auto PR from Workflow #1)
2. Create PR: integration → dev
3. Merge to dev
4. Workflow #2 runs automatically
```
**Result**:
- Docker images built
- Vulnerability scanned
- Images pushed to Docker Hub

---

## 🚀 Production Deployment

```bash
# Pull images
docker pull username/construction-backend:latest
docker pull username/construction-frontend:latest

# Run
docker run -d -p 5005:5005 username/construction-backend:latest
docker run -d -p 3000:3000 username/construction-frontend:latest
```

---

## 🔐 Secrets Reference

### Where to Get Them:

**DOCKER_USERNAME**
- Go to: https://hub.docker.com
- Profile → Settings → Username

**DOCKER_PASSWORD**  
- Go to: https://hub.docker.com/settings/security
- New Access Token → Copy

**SONAR_HOST_URL**
- For SonarCloud: https://sonarcloud.io
- For self-hosted: https://your-sonarqube.com

**SONAR_TOKEN**
- Go to: SonarQube Account → Security
- Generate new token → Copy

---

## 🐛 Troubleshooting Quick Fixes

### Port Already in Use
```bash
# Find process
lsof -i :5005  # Backend
lsof -i :3000  # Frontend
kill -9 <PID>
```

### Docker Won't Start
```bash
docker-compose down -v
docker-compose up --build
```

### Workflow Not Running
- Check branch name (case-sensitive)
- Check GitHub Actions enabled
- Verify secrets configured
- Check workflow file syntax

### Docker Push Failed
- Verify Docker Hub credentials
- Check username/password in secrets
- Ensure Docker Hub account has storage

---

## 📊 File Summary

```
✅ .github/workflows/feat-lint-sonar.yml      - Workflow #1
✅ .github/workflows/dev-docker-push.yml      - Workflow #2
✅ backend/Dockerfile                          - Backend container
✅ frontend/Dockerfile                         - Frontend container
✅ docker-compose.yml                          - Orchestration
✅ .env                                        - Configuration
✅ sonar-project.properties                    - SonarQube config
✅ backend/.eslintrc.js                        - Linting rules
✅ README.md                                   - Project guide
✅ GITHUB_SETUP.md                             - Secrets setup
✅ WORKFLOW_GUIDE.md                           - Workflow guide
✅ IMPLEMENTATION_SUMMARY.md                   - Technical info
```

---

## ⏱️ Time Estimates

| Task | Time |
|------|------|
| Configure secrets | 5 min |
| Create branches | 2 min |
| Test feature workflow | 10 min |
| Complete deployment test | 20 min |
| **Total Setup** | **37 min** |

---

## ✨ Status Indicators

### When Everything Works:
```
✅ Feature push → Workflow #1 runs
✅ Workflow #1 passes → PR created
✅ PR merged to dev → Workflow #2 runs
✅ Workflow #2 passes → Images on Docker Hub
```

### Green Checkmarks = Success
- ✅ All GitHub Actions checks pass
- ✅ SonarQube quality gate meets
- ✅ Trivy vulnerability scan completes
- ✅ Docker images pushed

---

## 🎯 Common Commands

```bash
# Git
git checkout -b branch-name
git add .
git commit -m "message"
git push origin branch-name
git log --oneline

# Docker
docker ps
docker logs container-name
docker-compose up --build
docker-compose down

# Check
curl http://localhost:5005/api/test
curl http://localhost:3000
```

---

## 📱 Contact Development Endpoints

```
Backend Contact API: POST /api/contact/submit

Frontend Contact Form: http://localhost:3000/contact

Email Setup: .env file
  EMAIL_USER=your-email
  EMAIL_PASSWORD=app-password
  COMPANY_EMAIL=company@email.com
```

---

## 🎓 Learning Resources

1. **Start with**: README.md
2. **Then read**: GITHUB_SETUP.md
3. **For workflows**: WORKFLOW_GUIDE.md
4. **For tech details**: IMPLEMENTATION_SUMMARY.md
5. **For reference**: This quick card

---

**🚀 You're ready to go! Start with: GITHUB_SETUP.md**

**Repository**: https://github.com/najmulhasan/construction-repair-services
