# EmailJS Setup Guide

## Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up for a free account (allows 200 emails/month)
3. Verify your email address

## Step 2: Add Email Service
1. Go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. **Save your Service ID** (e.g., `service_xxxxxxx`)

## Step 3: Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Design your template with these variables:

### Template Variables:
- `{{to_name}}` - Recipient name (your team)
- `{{from_name}}` - Applicant's full name
- `{{from_email}}` - Applicant's email
- `{{phone}}` - Applicant's phone number
- `{{position}}` - Position applied for
- `{{experience}}` - Years of experience
- `{{description}}` - Applicant's description
- `{{resume_link}}` - Cloudinary URL to resume
- `{{message}}` - Full message (optional, contains all details)

### Sample Template:
```
Subject: New Career Application - {{position}}

Hello {{to_name}},

A new career application has been received:

Applicant Information:
- Name: {{from_name}}
- Email: {{from_email}}
- Phone: {{phone}}

Position Details:
- Position: {{position}}
- Experience: {{experience}}

Description:
{{description}}

Resume:
{{resume_link}}

---
This email was sent from Agilux Solution career form.
```

4. **Save your Template ID** (e.g., `template_xxxxxxx`)

## Step 4: Get Public Key
1. Go to **Account** → **General**
2. Find **Public Key** (also called API Key)
3. Copy this key

## Step 5: Add to Environment Variables
Add these to your `.env` file:

```env
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
```

## Step 6: (Optional) Confirmation Email Template
Create a second template for applicant confirmation:

1. Create new template
2. Use variables:
   - `{{to_name}}` - Applicant's name
   - `{{to_email}}` - Applicant's email
   - `{{message}}` - Confirmation message

3. Add to `.env`:
```env
VITE_EMAILJS_CONFIRMATION_TEMPLATE_ID=template_confirmation_xxxxxxx
```

## Testing
1. Test your template using EmailJS's **Test** button
2. Fill out the Career form with test data
3. Check your email inbox for the application email

## Security Notes
- Public Key is safe to expose (it's meant for client-side use)
- Service ID and Template ID are also safe to expose
- EmailJS handles rate limiting automatically
- Consider upgrading for production use (paid plans available)

