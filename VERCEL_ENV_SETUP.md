# Vercel Environment Variables Setup Guide

## Issue: Resume Upload Not Working on Vercel

The resume upload API is not working because **environment variables are not set in Vercel**. These variables are required for Cloudinary and EmailJS integrations.

## Required Environment Variables

You need to add these environment variables to your Vercel project:

### Cloudinary Variables
```
VITE_CLOUDINARY_CLOUD_NAME=dvo30ytcq
VITE_CLOUDINARY_UPLOAD_PRESET=agilux-solution
```

### EmailJS Variables
```
VITE_EMAILJS_PUBLIC_KEY=tkeVye-HdNd-7qVSC
VITE_EMAILJS_SERVICE_ID=service_pfiia7h
VITE_EMAILJS_TEMPLATE_ID=template_gdnubda
```

**Optional (for confirmation emails):**
```
VITE_EMAILJS_CONFIRMATION_TEMPLATE_ID=your_confirmation_template_id
```

---

## Step-by-Step: Add Environment Variables to Vercel

### Method 1: Via Vercel Dashboard (Recommended)

1. **Go to Vercel Dashboard**
   - Visit: https://vercel.com/dashboard
   - Login to your account

2. **Select Your Project**
   - Click on your project (AgiluxNew or similar name)

3. **Navigate to Settings**
   - Click on **"Settings"** tab (top navigation)
   - Click on **"Environment Variables"** in the left sidebar

4. **Add Each Variable**
   
   **For Cloudinary:**
   - Click **"Add New"**
   - **Key:** `VITE_CLOUDINARY_CLOUD_NAME`
   - **Value:** `dvo30ytcq`
   - **Environment:** Select all (Production, Preview, Development)
   - Click **"Save"**

   - Click **"Add New"** again
   - **Key:** `VITE_CLOUDINARY_UPLOAD_PRESET`
   - **Value:** `agilux-solution`
   - **Environment:** Select all (Production, Preview, Development)
   - Click **"Save"**

   **For EmailJS:**
   - Click **"Add New"**
   - **Key:** `VITE_EMAILJS_PUBLIC_KEY`
   - **Value:** `tkeVye-HdNd-7qVSC`
   - **Environment:** Select all (Production, Preview, Development)
   - Click **"Save"**

   - Click **"Add New"**
   - **Key:** `VITE_EMAILJS_SERVICE_ID`
   - **Value:** `service_pfiia7h`
   - **Environment:** Select all (Production, Preview, Development)
   - Click **"Save"**

   - Click **"Add New"**
   - **Key:** `VITE_EMAILJS_TEMPLATE_ID`
   - **Value:** `template_gdnubda`
   - **Environment:** Select all (Production, Preview, Development)
   - Click **"Save"**

5. **Redeploy Your Project**
   - After adding all variables, go to **"Deployments"** tab
   - Click the **"⋯" (three dots)** on the latest deployment
   - Click **"Redeploy"**
   - Or push a new commit to trigger automatic redeployment

### Method 2: Via Vercel CLI

If you have Vercel CLI installed:

```bash
# Install Vercel CLI (if not installed)
npm i -g vercel

# Login to Vercel
vercel login

# Link your project (if not linked)
vercel link

# Add environment variables
vercel env add VITE_CLOUDINARY_CLOUD_NAME
# Enter value: dvo30ytcq
# Select environments: Production, Preview, Development

vercel env add VITE_CLOUDINARY_UPLOAD_PRESET
# Enter value: agilux-solution
# Select environments: Production, Preview, Development

vercel env add VITE_EMAILJS_PUBLIC_KEY
# Enter value: tkeVye-HdNd-7qVSC
# Select environments: Production, Preview, Development

vercel env add VITE_EMAILJS_SERVICE_ID
# Enter value: service_pfiia7h
# Select environments: Production, Preview, Development

vercel env add VITE_EMAILJS_TEMPLATE_ID
# Enter value: template_gdnubda
# Select environments: Production, Preview, Development

# Pull updated environment variables
vercel env pull .env.local

# Redeploy
vercel --prod
```

---

## Quick Checklist

- [ ] `VITE_CLOUDINARY_CLOUD_NAME` added to Vercel
- [ ] `VITE_CLOUDINARY_UPLOAD_PRESET` added to Vercel
- [ ] `VITE_EMAILJS_PUBLIC_KEY` added to Vercel
- [ ] `VITE_EMAILJS_SERVICE_ID` added to Vercel
- [ ] `VITE_EMAILJS_TEMPLATE_ID` added to Vercel
- [ ] All variables set for Production, Preview, and Development
- [ ] Project redeployed after adding variables

---

## Important Notes

### ⚠️ Environment Variables Are Case-Sensitive
- Make sure to use exact variable names (with `VITE_` prefix)
- Variable names must match exactly what's in the code

### ⚠️ Build-Time vs Runtime
- Vite environment variables are embedded at **build time**
- After adding variables, you **MUST redeploy** your project
- Just adding variables won't work on existing deployments

### ⚠️ Preview Deployments
- Preview deployments also need these variables
- Set variables for "Preview" environment to test in preview URLs

---

## Verify Environment Variables Are Working

After redeploying, check the browser console on your Vercel site:

1. Open your Vercel deployment URL
2. Open browser DevTools (F12)
3. Go to Console tab
4. Try uploading a resume
5. Look for these logs:
   - `🔧 Cloudinary Utility: Starting upload process...`
   - `Environment Variables:` should show values (not "❌ NOT SET")
   - If you see "❌ NOT SET", variables are not configured correctly

---

## Troubleshooting

### Problem: Still seeing "NOT SET" after redeploying
**Solution:**
- Make sure variable names start with `VITE_`
- Check spelling of variable names
- Verify you redeployed after adding variables
- Clear browser cache and hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

### Problem: Upload fails with "Upload preset must be whitelisted"
**Solution:**
- Go to Cloudinary Dashboard
- Settings → Upload → Upload Presets
- Find your preset (`agilux-solution`)
- Make sure "Signing mode" is set to **"Unsigned"**
- Save changes

### Problem: EmailJS template not found
**Solution:**
- Verify `VITE_EMAILJS_TEMPLATE_ID` matches your EmailJS template ID
- Check EmailJS dashboard: https://dashboard.emailjs.com/admin/templates
- Ensure template is published and active

---

## Quick Reference: All Variables

Copy-paste these exact values to Vercel:

```
VITE_CLOUDINARY_CLOUD_NAME=dvo30ytcq
VITE_CLOUDINARY_UPLOAD_PRESET=agilux-solution
VITE_EMAILJS_PUBLIC_KEY=tkeVye-HdNd-7qVSC
VITE_EMAILJS_SERVICE_ID=service_pfiia7h
VITE_EMAILJS_TEMPLATE_ID=template_gdnubda
```

---

**Need Help?**
- Vercel Docs: https://vercel.com/docs/concepts/projects/environment-variables
- Check browser console for detailed error messages
- Verify Cloudinary preset is set to "Unsigned"

