# GitFlow Guide for Bridgen Training Project

## Table of Contents

- [What is GitFlow?](#what-is-gitflow)
- [Installation](#installation)
- [Project Setup](#project-setup)
- [Branch Structure](#branch-structure)
- [Workflows](#workflows)
- [Common Commands](#common-commands)
- [Best Practices](#best-practices)
- [Troubleshooting](#troubleshooting)

## What is GitFlow?

GitFlow is a branching model for Git that provides a robust framework for managing larger projects. It defines a strict branching model designed around the project release, making it ideal for projects with scheduled releases like our Bridgen Training website.

### Key Benefits:

- **Organized Development**: Clear separation between features, releases, and hotfixes
- **Parallel Development**: Multiple developers can work on different features simultaneously
- **Stable Production**: Main branch always reflects production-ready state
- **Easy Rollbacks**: Clear version history makes rollbacks straightforward

## Installation

### macOS (using Homebrew)

```bash
brew install git-flow-avh
```

### Windows

Git-flow is included with Git for Windows. Download from: https://git-scm.com/download/win

### Linux (Ubuntu/Debian)

```bash
sudo apt-get install git-flow
```

### Linux (CentOS/RHEL/Fedora)

```bash
sudo yum install gitflow
# or
sudo dnf install git-flow
```

## Project Setup

### Initial GitFlow Setup

Navigate to your project directory and initialize GitFlow:

```bash
cd /path/to/bridgentraining
git flow init
```

When prompted, use these settings for our project:

- **Production releases branch**: `main`
- **Next release development branch**: `develop`
- **Feature branches prefix**: `feature/`
- **Bugfix branches prefix**: `bugfix/`
- **Release branches prefix**: `release/`
- **Hotfix branches prefix**: `hotfix/`
- **Support branches prefix**: `support/`
- **Version tag prefix**: `v`

### Verify Setup

```bash
git branch
# Should show:
# * develop
#   main
```

## Branch Structure

### Main Branches

#### `main` (Production Branch)

- **Purpose**: Reflects production-ready code
- **Deployment**: Automatically deployed to production (Vercel)
- **Protection**: No direct commits allowed
- **Merges**: Only from `release/` and `hotfix/` branches

#### `develop` (Integration Branch)

- **Purpose**: Integration branch for features
- **Contains**: Latest delivered development changes
- **Deployment**: Can be deployed to staging environment
- **Merges**: From `feature/` branches and to `release/` branches

### Supporting Branches

#### Feature Branches (`feature/`)

- **Purpose**: Develop new features
- **Naming**: `feature/contact-form-validation`, `feature/course-gallery`
- **Origin**: Branch from `develop`
- **Merge**: Back to `develop`
- **Lifetime**: Until feature is complete

#### Release Branches (`release/`)

- **Purpose**: Prepare new production release
- **Naming**: `release/v1.2.0`, `release/v2.0.0`
- **Origin**: Branch from `develop`
- **Merge**: To both `main` and `develop`
- **Activities**: Bug fixes, documentation, release preparation

#### Hotfix Branches (`hotfix/`)

- **Purpose**: Fix critical production issues
- **Naming**: `hotfix/contact-form-error`, `hotfix/v1.1.1`
- **Origin**: Branch from `main`
- **Merge**: To both `main` and `develop`
- **Priority**: Highest - immediate production fixes

## Workflows

### 🚀 Feature Development Workflow

#### 1. Start a New Feature

```bash
# Start feature branch
git flow feature start contact-form-improvements

# This creates and switches to: feature/contact-form-improvements
```

#### 2. Develop Your Feature

```bash
# Make your changes
# Edit files, add components, etc.

# Commit changes regularly
git add .
git commit -m "feat: add form validation for contact form"
git commit -m "feat: improve error messaging"
git commit -m "test: add validation tests"
```

#### 3. Finish the Feature

```bash
# Finish feature (merges to develop and deletes feature branch)
git flow feature finish contact-form-improvements
```

#### 4. Push Changes

```bash
# Push develop branch with new feature
git push origin develop
```

### 📦 Release Workflow

#### 1. Start a Release

```bash
# Start release branch from develop
git flow release start v1.2.0
```

#### 2. Prepare Release

```bash
# Update version numbers, changelog, documentation
# Fix any bugs found during testing
# No new features - only bug fixes!

git add .
git commit -m "chore: bump version to v1.2.0"
git commit -m "fix: resolve mobile responsive issues"
git commit -m "docs: update changelog for v1.2.0"
```

#### 3. Finish Release

```bash
# Finish release (merges to main and develop, creates tag)
git flow release finish v1.2.0

# You'll be prompted for:
# 1. Merge commit message for main
# 2. Tag message for v1.2.0
# 3. Merge commit message for develop
```

#### 4. Push Everything

```bash
# Push all branches and tags
git push origin main
git push origin develop
git push origin --tags
```

### 🚨 Hotfix Workflow

#### 1. Start Hotfix

```bash
# Start hotfix from main branch
git flow hotfix start contact-form-crash
```

#### 2. Fix the Issue

```bash
# Make minimal changes to fix critical issue
git add .
git commit -m "fix: resolve contact form crash on mobile devices"
```

#### 3. Finish Hotfix

```bash
# Finish hotfix (merges to main and develop, creates tag)
git flow hotfix finish contact-form-crash
```

#### 4. Deploy Immediately

```bash
# Push to trigger immediate deployment
git push origin main
git push origin develop
git push origin --tags
```

## Common Commands

### Feature Commands

```bash
# List all features
git flow feature list

# Start new feature
git flow feature start <feature-name>

# Finish feature
git flow feature finish <feature-name>

# Publish feature to remote
git flow feature publish <feature-name>

# Pull feature from remote
git flow feature pull origin <feature-name>
```

### Release Commands

```bash
# Start new release
git flow release start <version>

# Finish release
git flow release finish <version>

# Publish release
git flow release publish <version>
```

### Hotfix Commands

```bash
# Start hotfix
git flow hotfix start <hotfix-name>

# Finish hotfix
git flow hotfix finish <hotfix-name>
```

### Utility Commands

```bash
# Check current version
git flow version

# Get help
git flow help
git flow feature help
```

## Best Practices

### 🎯 Naming Conventions

#### Feature Branches

- `feature/header-navigation-improvement`
- `feature/course-booking-system`
- `feature/student-portfolio-gallery`
- `feature/contact-form-validation`

#### Release Branches

- `release/v1.0.0` (major release)
- `release/v1.1.0` (minor release)
- `release/v1.0.1` (patch release)

#### Hotfix Branches

- `hotfix/urgent-security-patch`
- `hotfix/contact-form-error`
- `hotfix/v1.0.1`

### 📝 Commit Message Guidelines

Use conventional commits format:

```bash
# Features
git commit -m "feat: add student testimonials section"
git commit -m "feat(contact): implement WhatsApp integration"

# Bug fixes
git commit -m "fix: resolve mobile menu toggle issue"
git commit -m "fix(form): handle email validation edge cases"

# Documentation
git commit -m "docs: update API documentation"
git commit -m "docs(readme): add deployment instructions"

# Chores
git commit -m "chore: update dependencies"
git commit -m "chore(build): optimize bundle size"
```

### 🔄 Development Workflow

#### Daily Workflow

1. **Start your day**: Pull latest changes

   ```bash
   git checkout develop
   git pull origin develop
   ```

2. **Create feature**: For each new task/feature

   ```bash
   git flow feature start your-feature-name
   ```

3. **Regular commits**: Commit small, logical changes

   ```bash
   git add .
   git commit -m "feat: add course filter functionality"
   ```

4. **Finish feature**: When complete
   ```bash
   git flow feature finish your-feature-name
   git push origin develop
   ```

#### Weekly Workflow

- **Code Review**: Review all features merged to `develop`
- **Testing**: Test `develop` branch thoroughly
- **Documentation**: Update documentation for new features

#### Release Workflow

- **Monthly/Bi-weekly**: Create release branches
- **Testing**: Comprehensive testing on release branch
- **Bug fixes**: Only bug fixes on release branch
- **Deploy**: Merge to main and deploy to production

### 🛡️ Branch Protection

For production projects, configure branch protection:

#### Main Branch Protection

- Require pull request reviews
- Require status checks to pass
- Require up-to-date branches
- Include administrators in restrictions

#### Develop Branch Protection

- Require pull request reviews (optional)
- Require status checks to pass

### 🚀 Integration with Vercel

#### Automatic Deployments

```bash
# Production deployment (main branch)
git push origin main  # Triggers production deployment

# Preview deployment (feature branches)
git push origin feature/your-feature  # Triggers preview deployment
```

#### Environment Variables

Ensure these are set in Vercel:

- `NODE_ENV=production` (for main branch)
- `NODE_ENV=development` (for develop branch)

## Troubleshooting

### Common Issues

#### 1. GitFlow Not Initialized

**Error**: `fatal: Not a gitflow-enabled repo yet`
**Solution**:

```bash
git flow init
```

#### 2. Branch Already Exists

**Error**: `Branch 'feature/my-feature' already exists`
**Solution**:

```bash
# Delete local branch
git branch -d feature/my-feature

# Start fresh
git flow feature start my-feature
```

#### 3. Merge Conflicts During Finish

**Error**: Merge conflicts when finishing feature
**Solution**:

```bash
# Switch to develop and update
git checkout develop
git pull origin develop

# Switch back to feature and rebase
git checkout feature/my-feature
git rebase develop

# Resolve conflicts, then finish
git flow feature finish my-feature
```

#### 4. Accidentally Committed to Wrong Branch

**Solution**:

```bash
# If committed to main instead of feature branch
git checkout main
git reset --hard HEAD~1  # Remove last commit

# Create proper feature branch
git flow feature start my-feature
git cherry-pick <commit-hash>  # Apply the commit
```

### Getting Help

#### GitFlow Help

```bash
git flow help
git flow feature help
git flow release help
git flow hotfix help
```

#### Git Help

```bash
git help <command>
git help merge
git help rebase
```

## Project-Specific Guidelines

### For Bridgen Training Website

#### Feature Categories

- **UI/UX**: `feature/ui-course-cards-redesign`
- **Content**: `feature/content-student-testimonials`
- **Functionality**: `feature/func-contact-form-validation`
- **Performance**: `feature/perf-image-optimization`
- **SEO**: `feature/seo-meta-tags-improvement`

#### Release Planning

- **Major Release** (v2.0.0): New course categories, major UI overhaul
- **Minor Release** (v1.1.0): New sections, feature additions
- **Patch Release** (v1.0.1): Bug fixes, content updates

#### Deployment Strategy

```bash
# Development: feature branches → develop → Vercel preview
# Staging: develop → Vercel staging environment
# Production: main → Vercel production
```

#### Team Collaboration

1. **Feature Assignment**: Each team member works on separate features
2. **Code Review**: All features reviewed before merging to develop
3. **Testing**: Test develop branch before creating releases
4. **Documentation**: Update this guide as workflow evolves

---

## Quick Reference Card

```bash
# Start your day
git checkout develop && git pull origin develop

# New feature
git flow feature start feature-name

# Commit work
git add . && git commit -m "feat: description"

# Finish feature
git flow feature finish feature-name && git push origin develop

# Create release
git flow release start v1.0.0

# Finish release
git flow release finish v1.0.0 && git push --all && git push --tags

# Emergency fix
git flow hotfix start fix-name
git flow hotfix finish fix-name && git push --all && git push --tags
```

---

**Remember**: GitFlow is a tool to help organize development. Adapt it to your team's needs, but maintain consistency once established.

For questions or improvements to this workflow, please create an issue or update this documentation.
