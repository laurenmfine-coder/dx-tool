/**
 * ReasonDx Email Service
 * 
 * Sends verification codes via Supabase Edge Function + Resend.
 * Falls back to console logging if the edge function is not yet deployed.
 */

// ============================================
// CONFIGURATION
// ============================================

const EMAIL_CONFIG = {
    provider: 'supabase',
    fromEmail: 'noreply@reasondx.com',
    fromName: 'ReasonDx',
    supabaseEmailFunction: 'https://lpwbiqpojisqgezycupw.supabase.co/functions/v1/send-email'
};

// ============================================
// MAIN EMAIL FUNCTIONS
// ============================================

async function sendVerificationEmail(toEmail, code) {
    const subject = 'Your ReasonDx Verification Code';
    const html = `
        <div style="font-family: Arial, sans-serif; max-width: 480px; margin: 0 auto; padding: 20px;">
            <div style="text-align: center; margin-bottom: 24px;">
                <h1 style="color: #2874A6; margin: 16px 0 8px;">ReasonDx</h1>
                <p style="color: #64748b; margin: 0;">Clinical Reasoning Education</p>
            </div>
            <div style="background: #f0f7fc; border: 2px solid #2874A6; border-radius: 12px; padding: 24px; text-align: center; margin-bottom: 24px;">
                <p style="margin: 0 0 8px; color: #1a5276; font-size: 14px;">Your verification code is:</p>
                <div style="font-size: 36px; font-weight: bold; color: #2874A6; letter-spacing: 8px; font-family: monospace;">
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
    const text = `Your ReasonDx verification code is: ${code}\n\nThis code expires in 10 minutes.`;
    return sendEmail(toEmail, subject, html, text);
}

async function sendPasswordResetEmail(toEmail, code) {
    const subject = 'Reset Your ReasonDx Password';
    const html = `
        <div style="font-family: Arial, sans-serif; max-width: 480px; margin: 0 auto; padding: 20px;">
            <div style="text-align: center; margin-bottom: 24px;">
                <h1 style="color: #2874A6; margin: 16px 0 8px;">Password Reset</h1>
            </div>
            <div style="background: #eff6ff; border: 2px solid #bfdbfe; border-radius: 12px; padding: 24px; text-align: center; margin-bottom: 24px;">
                <p style="margin: 0 0 8px; color: #1e40af; font-size: 14px;">Your reset code is:</p>
                <div style="font-size: 36px; font-weight: bold; color: #2563eb; letter-spacing: 8px; font-family: monospace;">
                    ${code}
                </div>
            </div>
            <p style="color: #475569; font-size: 14px; line-height: 1.6;">
                Enter this code on the password reset page. This code expires in <strong>10 minutes</strong>.
            </p>
        </div>
    `;
    const text = `Your ReasonDx password reset code is: ${code}\n\nThis code expires in 10 minutes.`;
    return sendEmail(toEmail, subject, html, text);
}

async function sendWelcomeEmail(toEmail, studyId, isFaculty = false) {
    const subject = 'Welcome to ReasonDx!';
    const html = `
        <div style="font-family: Arial, sans-serif; max-width: 480px; margin: 0 auto; padding: 20px;">
            <div style="text-align: center; margin-bottom: 24px;">
                <h1 style="color: #2874A6; margin: 16px 0 8px;">Welcome to ReasonDx!</h1>
            </div>
            <p style="color: #475569; font-size: 14px; line-height: 1.6;">
                Your account has been created successfully.
            </p>
            <div style="text-align: center; margin-top: 24px;">
                <a href="https://reasondx.com" style="display: inline-block; background: #2874A6; color: white; padding: 12px 32px; border-radius: 8px; text-decoration: none; font-weight: 600;">
                    Start Learning
                </a>
            </div>
        </div>
    `;
    return sendEmail(toEmail, subject, html);
}

// ============================================
// EMAIL SENDING
// ============================================

async function sendEmail(to, subject, html, text = '') {
    try {
        const response = await fetch(EMAIL_CONFIG.supabaseEmailFunction, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                to: to,
                subject: subject,
                html: html,
                text: text,
                from_email: EMAIL_CONFIG.fromEmail,
                from_name: EMAIL_CONFIG.fromName
            })
        });

        if (response.ok) {
            const data = await response.json();
            if (data.success) {
                console.log('Email sent successfully');
                return { success: true };
            }
        }

        const errorData = await response.text();
        console.warn('Edge function error:', errorData);
        return { success: false, error: errorData };

    } catch (error) {
        console.warn('Email service unavailable:', error.message);
        return { success: false, error: error.message };
    }
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
