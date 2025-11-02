/**
 * EmailJS Utility
 * Handles sending emails via EmailJS
 */

import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
const initializeEmailJS = () => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (publicKey) {
        emailjs.init(publicKey);
    }
};

// Initialize on import
initializeEmailJS();

/**
 * Send career application email via EmailJS
 */
export const sendCareerApplicationEmail = async (formData) => {
    const {
        firstName,
        lastName,
        email,
        phone,
        position,
        experience,
        description,
        resumeUrl,
    } = formData;

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

    if (!serviceId || !templateId) {
        throw new Error('EmailJS configuration is missing. Please check environment variables.');
    }

    const templateParams = {
        // EmailJS template variables
        to_name: 'Agilux Solution Hiring Team',
        from_name: `${firstName} ${lastName}`,
        from_email: email,
        phone: phone,
        position: position,
        experience: experience,
        description: description,
        resume_link: resumeUrl,
        message: `
New Career Application Received

Applicant Details:
- Name: ${firstName} ${lastName}
- Email: ${email}
- Phone: ${phone}
- Position Applied: ${position}
- Experience: ${experience}

Description:
${description}

Resume: ${resumeUrl || 'Not uploaded'}

---
This email was sent from the Agilux Solution career form.
        `,
    };

    try {
        const response = await emailjs.send(
            serviceId,
            templateId,
            templateParams
        );

        return {
            success: true,
            message: 'Email sent successfully',
            response,
        };
    } catch (error) {
        console.error('EmailJS error:', error);
        return {
            success: false,
            error: error.text || error.message || 'Failed to send email',
        };
    }
};

/**
 * Send confirmation email to applicant
 */
export const sendConfirmationEmail = async (applicantEmail, applicantName) => {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_CONFIRMATION_TEMPLATE_ID; // Optional confirmation template

    if (!serviceId || !templateId) {
        // If confirmation template is not set, skip confirmation email
        return { success: true, skipped: true };
    }

    const templateParams = {
        to_name: applicantName,
        to_email: applicantEmail,
        message: `
Thank you for your interest in joining Agilux Solution!

We have received your application for the position you applied for. 
Our team will review your application and get back to you soon.

Best regards,
Agilux Solution Team
        `,
    };

    try {
        const response = await emailjs.send(
            serviceId,
            templateId,
            templateParams
        );

        return {
            success: true,
            message: 'Confirmation email sent',
            response,
        };
    } catch (error) {
        console.error('Confirmation email error:', error);
        return {
            success: false,
            error: error.text || error.message || 'Failed to send confirmation email',
        };
    }
};

