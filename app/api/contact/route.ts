import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
  try {
    // Check if Resend API key is configured
    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Email service is not configured. Please contact the administrator.' },
        { status: 500 }
      );
    }

    const resend = new Resend(resendApiKey);

    const body = await request.json();
    const { name, email, phone, service, message } = body;

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    // Send email using Resend
    // Using onboarding@resend.dev for testing (can only send to verified email)
    // For production, verify domain at resend.com/domains to send to any email
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
    
    // Format service type for display
    const serviceLabels: Record<string, string> = {
      maintenance: 'Recurring Maintenance',
      repair: 'Equipment Repair',
      renovation: 'Renovation Planning',
      other: 'Other Service'
    };
    const serviceDisplay = service ? (serviceLabels[service] || service) : 'Not specified';
    
    // Determine recipients based on whether domain is verified
    // If using onboarding@resend.dev, can only send to verified emails
    // If using custom domain, can send to any email
    const isTestMode = fromEmail === 'onboarding@resend.dev';
    const recipients = isTestMode 
      ? ['ben@sproutflow-studio.com'] // Only verified email in test mode
      : ['ben@sproutflow-studio.com', 'nolapoolsolutions@gmail.com']; // Both in production with verified domain
    
    // Send email
    const emailResult = await resend.emails.send({
      from: fromEmail,
      to: recipients,
      subject: `New Pool Service Inquiry from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5;">
          <div style="background-color: #0B1F3F; padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 700;">NOLA Pool Solutions</h1>
            <p style="color: #90caf9; margin: 10px 0 0 0; font-size: 14px;">New Contact Form Submission</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 30px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <p style="color: #536471; font-size: 16px; margin-bottom: 25px;">You have received a new inquiry from your website contact form:</p>
            
            <div style="background-color: #F8FBFF; border-left: 4px solid #1B5A7D; padding: 20px; margin: 20px 0; border-radius: 4px;">
              <h2 style="color: #0B1F3F; margin-top: 0; font-size: 18px; font-weight: 600;">Contact Information</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; color: #536471; font-weight: 600; width: 120px;">Name:</td>
                  <td style="padding: 8px 0; color: #0B1F3F;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #536471; font-weight: 600;">Email:</td>
                  <td style="padding: 8px 0;">
                    <a href="mailto:${email}" style="color: #1B5A7D; text-decoration: none;">${email}</a>
                  </td>
                </tr>
                ${phone ? `
                <tr>
                  <td style="padding: 8px 0; color: #536471; font-weight: 600;">Phone:</td>
                  <td style="padding: 8px 0;">
                    <a href="tel:${phone.replace(/[^0-9]/g, '')}" style="color: #1B5A7D; text-decoration: none;">${phone}</a>
                  </td>
                </tr>
                ` : ''}
                <tr>
                  <td style="padding: 8px 0; color: #536471; font-weight: 600;">Service:</td>
                  <td style="padding: 8px 0; color: #0B1F3F;">${serviceDisplay}</td>
                </tr>
              </table>
            </div>
            
            ${message ? `
            <div style="margin: 25px 0;">
              <h2 style="color: #0B1F3F; font-size: 18px; font-weight: 600; margin-bottom: 10px;">Message</h2>
              <div style="background-color: #F8FBFF; padding: 15px; border-radius: 4px; color: #0B1F3F; white-space: pre-wrap;">${message.replace(/\n/g, '<br>')}</div>
            </div>
            ` : ''}
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #E8F4F8;">
              <p style="color: #536471; font-size: 14px; margin: 0;">
                <strong>Next Steps:</strong> Please respond to this inquiry within one business day as promised on your website.
              </p>
            </div>
            
            <div style="margin-top: 25px; padding: 15px; background-color: #E8F4F8; border-radius: 4px; font-size: 12px; color: #536471;">
              <p style="margin: 0;"><strong>Note:</strong> This inquiry was submitted through the NOLA Pool Solutions website contact form.</p>
              ${isTestMode ? '<p style="margin: 10px 0 0 0;"><strong>Action Required:</strong> Please forward this email to nolapoolsolutions@gmail.com</p>' : ''}
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px; padding: 20px; color: #536471; font-size: 12px;">
            <p style="margin: 0;">NOLA Pool Solutions | Greater New Orleans Area</p>
            <p style="margin: 5px 0 0 0;">Phone: (504) 450-3496 | Email: nolapoolsolutions@gmail.com</p>
          </div>
        </body>
        </html>
      `,
    });

    if (emailResult.error) {
      console.error('Email error:', emailResult.error);
      return NextResponse.json(
        { 
          error: 'Failed to send email',
          details: emailResult.error?.message || JSON.stringify(emailResult.error)
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

