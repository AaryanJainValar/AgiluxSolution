# Career Form Setup - Complete Guide

## Overview
The Career form now includes:
1. **Cloudinary Integration** - Uploads resumes to Cloudinary
2. **EmailJS Integration** - Sends application emails with resume links

## Workflow
1. User selects resume file → Validates file → Uploads to Cloudinary → Stores Cloudinary URL
2. User fills form and submits → Sends email via EmailJS with all form data + Cloudinary resume URL
3. (Optional) Confirmation email sent to applicant

## Quick Setup Steps

### 1. Install Dependencies
```bash
npm install
```
Dependencies are already installed: `@emailjs/browser` and `cloudinary`

### 2. Set Up Cloudinary
Follow the detailed guide in `CLOUDINARY_SETUP.md`

Quick steps:
- Sign up at https://cloudinary.com/
- Create an **Unsigned Upload Preset**
- Get your **Cloud Name** and **Upload Preset Name**

### 3. Set Up EmailJS
Follow the detailed guide in `EMAILJS_SETUP.md`

Quick steps:
- Sign up at https://www.emailjs.com/
- Add email service (Gmail, Outlook, etc.)
- Create email template with variables
- Get **Public Key**, **Service ID**, and **Template ID**

### 4. Create .env File
Create a `.env` file in the project root (copy from `.env.example`):

```env
# Cloudinary
VITE_CLOUDINARY_CLOUD_NAME=your_cloud_name
VITE_CLOUDINARY_UPLOAD_PRESET=your_upload_preset_name

# EmailJS
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx

# Optional
VITE_EMAILJS_CONFIRMATION_TEMPLATE_ID=template_xxxxxxx
```

### 5. Restart Dev Server
After creating `.env` file:
```bash
npm run dev
```

## File Structure
```
src/
├── Components/
│   └── OtherRoutesComponents/
│       └── Career/
│           ├── Career.jsx (Updated with Cloudinary & EmailJS)
│           └── Career.css
└── utils/
    ├── cloudinary.js (Cloudinary upload utility)
    └── emailjs.js (EmailJS email utility)
```

## Features

### ✅ Cloudinary Upload
- Automatic upload when file is selected
- File validation (PDF, DOC, DOCX, max 10MB)
- Progress indicator during upload
- Stores secure Cloudinary URL
- Files organized in `agilux-resumes` folder

### ✅ EmailJS Integration
- Sends application email with all form data
- Includes Cloudinary resume link
- Optional confirmation email to applicant
- Error handling and user feedback

### ✅ Form Validation
- All fields required
- Email format validation
- Phone number validation (10 digits)
- Resume must be uploaded before submission

## Email Template Variables

Use these variables in your EmailJS template:
- `{{to_name}}` - Your team name
- `{{from_name}}` - Applicant full name
- `{{from_email}}` - Applicant email
- `{{phone}}` - Applicant phone
- `{{position}}` - Position applied for
- `{{experience}}` - Years of experience
- `{{description}}` - Applicant description
- `{{resume_link}}` - Cloudinary URL to resume
- `{{message}}` - Full formatted message

## Testing

1. **Test Cloudinary Upload**:
   - Select a PDF/DOC file
   - Should see "Uploading to Cloudinary..." message
   - Should see "✓ Resume uploaded successfully"
   - Check Cloudinary Media Library for the file

2. **Test EmailJS**:
   - Fill out all form fields
   - Click Submit
   - Check your email inbox for the application
   - Verify resume link works

## Troubleshooting

### Cloudinary Upload Fails
- Check `.env` variables are correct
- Verify Upload Preset is set to **Unsigned**
- Check Cloudinary dashboard for upload logs
- Verify file size is under 10MB

### EmailJS Not Sending
- Check `.env` variables are correct
- Verify email service is connected
- Check EmailJS dashboard for send logs
- Verify template variables match exactly

### Environment Variables Not Loading
- Restart dev server after creating `.env`
- Variables must start with `VITE_` for Vite
- Check `.env` file is in project root
- No spaces around `=` in `.env` file

## Security Notes

✅ **Safe to expose:**
- EmailJS Public Key (designed for client-side)
- Cloudinary Cloud Name
- Upload Preset Name (if unsigned)

❌ **Keep secret:**
- Cloudinary API Secret (not needed for unsigned uploads)
- Email service credentials (handled by EmailJS)

## Production Deployment

When deploying:
1. Set environment variables in your hosting platform (Vercel, Netlify, etc.)
2. Never commit `.env` file to Git
3. Use production Cloudinary account
4. Consider upgrading EmailJS plan for higher limits
5. Monitor Cloudinary bandwidth usage

## Support

For issues:
- Cloudinary: https://cloudinary.com/documentation
- EmailJS: https://www.emailjs.com/docs/
- Check browser console for error messages

