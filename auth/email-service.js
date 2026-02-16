/**
 * ReasonDx Email Service
 * 
 * Handles sending verification codes and password reset emails.
 * Supports multiple email providers - configure one based on your needs.
 * 
 * SETUP OPTIONS:
 * 1. Resend (Recommended - easiest setup, 3,000 free/month)
 * 2. SendGrid (100 free/day)
 * 3. AWS SES (62,000 free/month with AWS)
 * 4. Supabase Edge Function (if using Supabase auth)
 */

// ============================================
// CONFIGURATION - Choose ONE provider
// ============================================

const EMAIL_CONFIG = {
    // Which provider to use: 'resend', 'sendgrid', 'supabase', or 'demo'
    provider: 'demo',
    
    // Your "from" email address
    fromEmail: 'noreply@reasondx.com',
    fromName: 'ReasonDx',
    
    // API Keys (set these for your chosen provider)
    resendApiKey: 'YOUR_RESEND_API_KEY',
    sendgridApiKey: 'YOUR_SENDGRID_API_KEY',
    
    // Supabase Edge Function URL (if using Supabase)
    supabaseEmailFunction: 'https://YOUR_PROJECT.supabase.co/functions/v1/send-email'
};

// ============================================
// MAIN EMAIL FUNCTION
// ============================================

async function sendVerificationEmail(toEmail, code) {
    const subject = 'Your ReasonDx Verification Code';
    const html = `
        <div style="font-family: Arial, sans-serif; max-width: 480px; margin: 0 auto; padding: 20px;">
            <div style="text-align: center; margin-bottom: 24px;">
                <span style="font-size: 48px;">🩺</span>
                <h1 style="color: #059669; margin: 16px 0 8px;">ReasonDx</h1>
                <p style="color: #64748b; margin: 0;">Clinical Reasoning Education</p>
            </div>
            
            <div style="background: #f0fdf4; border: 2px solid #a7f3d0; border-radius: 12px; padding: 24px; text-align: center; margin-bottom: 24px;">
                <p style="margin: 0 0 8px; color: #166534; font-size: 14px;">Your verification code is:</p>
                <div style="font-size: 36px; font-weight: bold; color: #059669; letter-spacing: 8px; font-family: monospace;">
                    ${code}
                </div>
            </div>
            
            <p style="color: #475569; font-size: 14px; line-height: 1.6;">
                Enter this code on the registration page to verify your email address.
                This code expires in <strong>10 minutes</strong>.
            </p>
            
            <p style="color: #94a3b8; font-size: 12px; margin-top: 24px;">
                If you didn't request this code, you can safely ignore this email.
            </p>
        </div>
    `;
    
    const text = `Your ReasonDx verification code is: ${code}\n\nThis code expires in 10 minutes.\n\nIf you didn't request this code, you can safely ignore this email.`;
    
    return sendEmail(toEmail, subject, html, text);
}

async function sendPasswordResetEmail(toEmail, code) {
    const subject = 'Reset Your ReasonDx Password';
    const html = `
        <div style="font-family: Arial, sans-serif; max-width: 480px; margin: 0 auto; padding: 20px;">
            <div style="text-align: center; margin-bottom: 24px;">
                <span style="font-size: 48px;">🔑</span>
                <h1 style="color: #059669; margin: 16px 0 8px;">Password Reset</h1>
            </div>
            
            <div style="background: #eff6ff; border: 2px solid #bfdbfe; border-radius: 12px; padding: 24px; text-align: center; margin-bottom: 24px;">
                <p style="margin: 0 0 8px; color: #1e40af; font-size: 14px;">Your reset code is:</p>
                <div style="font-size: 36px; font-weight: bold; color: #2563eb; letter-spacing: 8px; font-family: monospace;">
                    ${code}
                </div>
            </div>
            
            <p style="color: #475569; font-size: 14px; line-height: 1.6;">
                Enter this code on the password reset page to create a new password.
                This code expires in <strong>10 minutes</strong>.
            </p>
            
            <p style="color: #94a3b8; font-size: 12px; margin-top: 24px;">
                If you didn't request a password reset, you can safely ignore this email.
            </p>
        </div>
    `;
    
    const text = `Your ReasonDx password reset code is: ${code}\n\nThis code expires in 10 minutes.\n\nIf you didn't request this, you can safely ignore this email.`;
    
    return sendEmail(toEmail, subject, html, text);
}

async function sendWelcomeEmail(toEmail, studyId, isFaculty = false) {
    const subject = 'Welcome to ReasonDx!';
    const html = `
        <div style="font-family: Arial, sans-serif; max-width: 480px; margin: 0 auto; padding: 20px;">
            <div style="text-align: center; margin-bottom: 24px;">
                <span style="font-size: 48px;">${isFaculty ? '👨‍🏫' : '🎉'}</span>
                <h1 style="color: #059669; margin: 16px 0 8px;">Welcome to ReasonDx!</h1>
            </div>
            
            <p style="color: #475569; font-size: 14px; line-height: 1.6;">
                Your account has been created successfully. Here's your Study ID for reference:
            </p>
            
            <div style="background: #f0fdf4; border: 2px solid #a7f3d0; border-radius: 12px; padding: 20px; text-align: center; margin: 24px 0;">
                <p style="margin: 0 0 4px; color: #166534; font-size: 12px;">Your Study ID</p>
                <div style="font-size: 24px; font-weight: bold; color: #059669; font-family: monospace;">
                    ${studyId}
                </div>
            </div>
            
            <p style="color: #475569; font-size: 14px; line-height: 1.6;">
                This ID is used to track your learning progress anonymously. 
                ${isFaculty ? 'As a faculty member, you can share your referral code with students.' : ''}
            </p>
            
            <div style="text-align: center; margin-top: 24px;">
                <a href="https://reasondx.com" style="display: inline-block; background: #059669; color: white; padding: 12px 32px; border-radius: 8px; text-decoration: none; font-weight: 600;">
                    Start Learning →
                </a>
            </div>
        </div>
    `;
    
    return sendEmail(toEmail, subject, html);
}

// ============================================
// PROVIDER-SPECIFIC IMPLEMENTATIONS
// ============================================

async function sendEmail(to, subject, html, text = '') {
    switch (EMAIL_CONFIG.provider) {
        case 'resend':
            return sendWithResend(to, subject, html, text);
        case 'sendgrid':
            return sendWithSendGrid(to, subject, html, text);
        case 'supabase':
            return sendWithSupabase(to, subject, html, text);
        case 'demo':
        default:
            return sendDemo(to, subject, html, text);
    }
}

// RESEND (https://resend.com)
// Free: 3,000 emails/month, 100/day
async function sendWithResend(to, subject, html, text) {
    try {
        const response = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${EMAIL_CONFIG.resendApiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                from: `${EMAIL_CONFIG.fromName} <${EMAIL_CONFIG.fromEmail}>`,
                to: [to],
                subject: subject,
                html: html,
                text: text || undefined
            })
        });
        
        const data = await response.json();
        
        if (!response.ok) {
            throw new Error(data.message || 'Resend API error');
        }
        
        console.log('Email sent via Resend:', data.id);
        return { success: true, id: data.id };
        
    } catch (error) {
        console.error('Resend error:', error);
        return { success: false, error: error.message };
    }
}

// SENDGRID (https://sendgrid.com)
// Free: 100 emails/day
async function sendWithSendGrid(to, subject, html, text) {
    try {
        const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${EMAIL_CONFIG.sendgridApiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                personalizations: [{ to: [{ email: to }] }],
                from: { email: EMAIL_CONFIG.fromEmail, name: EMAIL_CONFIG.fromName },
                subject: subject,
                content: [
                    { type: 'text/plain', value: text || subject },
                    { type: 'text/html', value: html }
                ]
            })
        });
        
        if (!response.ok) {
            const error = await response.text();
            throw new Error(error);
        }
        
        console.log('Email sent via SendGrid');
        return { success: true };
        
    } catch (error) {
        console.error('SendGrid error:', error);
        return { success: false, error: error.message };
    }
}

// SUPABASE EDGE FUNCTION
// Requires setting up an edge function - see supabase-email-function.ts
async function sendWithSupabase(to, subject, html, text) {
    try {
        const response = await fetch(EMAIL_CONFIG.supabaseEmailFunction, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ to, subject, html, text })
        });
        
        const data = await response.json();
        
        if (!data.success) {
            throw new Error(data.error || 'Supabase email error');
        }
        
        return { success: true };
        
    } catch (error) {
        console.error('Supabase email error:', error);
        return { success: false, error: error.message };
    }
}

// DEMO MODE - shows alert instead of sending
function sendDemo(to, subject, html, text) {
    // Extract code from HTML if present
    const codeMatch = html.match(/letter-spacing: 8px[^>]*>[\s\n]*(\d{6})/);
    const code = codeMatch ? codeMatch[1] : 'N/A';
    
    console.log('DEMO EMAIL:', { to, subject, code });
    
    alert(
        `📧 DEMO MODE - Email would be sent:\n\n` +
        `To: ${to}\n` +
        `Subject: ${subject}\n` +
        `Code: ${code}\n\n` +
        `(In production, this would be a real email)`
    );
    
    return { success: true, demo: true, code };
}

// ============================================
// EXPORT
// ============================================

window.DxEmail = {
    sendVerificationEmail,
    sendPasswordResetEmail,
    sendWelcomeEmail,
    config: EMAIL_CONFIG
};
