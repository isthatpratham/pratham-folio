# Deployment Guide

This guide will help you deploy your portfolio website to various hosting platforms.

## 🚀 GitHub Pages Deployment

### 1. Push to GitHub
```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit: Portfolio website"

# Add remote origin (replace with your GitHub repo URL)
git remote add origin https://github.com/yourusername/your-repo-name.git

# Push to GitHub
git push -u origin main
```

### 2. Enable GitHub Pages
1. Go to your GitHub repository
2. Click on "Settings" tab
3. Scroll down to "Pages" section
4. Select "Deploy from a branch"
5. Choose "main" branch and "/ (root)" folder
6. Click "Save"

### 3. Set Environment Variables
For GitHub Pages, you'll need to set environment variables in your build process or use a different approach since GitHub Pages doesn't support server-side environment variables.

## 🌐 Netlify Deployment

### 1. Build and Deploy
```bash
# Build the project
npm run build

# Deploy the dist folder to Netlify
```

### 2. Set Environment Variables
1. Go to your Netlify dashboard
2. Select your site
3. Go to "Site settings" > "Environment variables"
4. Add your EmailJS variables:
   - `VITE_EMAILJS_PUBLIC_KEY`
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`

## 🔧 Vercel Deployment

### 1. Deploy with Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### 2. Set Environment Variables
1. Go to your Vercel dashboard
2. Select your project
3. Go to "Settings" > "Environment Variables"
4. Add your EmailJS variables

## 📝 Important Notes

- **Environment Variables**: Make sure to set your EmailJS credentials in your hosting platform
- **Build Command**: Use `npm run build` to create the production build
- **Output Directory**: The build output is in the `dist` folder
- **HTTPS**: Most hosting platforms provide HTTPS by default, which is required for EmailJS

## 🐛 Troubleshooting

- **Contact Form Not Working**: Check that environment variables are properly set
- **Build Errors**: Ensure all dependencies are installed with `npm install`
- **Styling Issues**: Verify that Tailwind CSS is properly configured
