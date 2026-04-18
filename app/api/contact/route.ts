import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

interface ContactPayload {
  name: string
  email: string
  subject: string
  message: string
}

function validate(body: ContactPayload): string | null {
  const { name, email, message } = body
  if (!name?.trim())    return 'Name is required.'
  if (!email?.trim())   return 'Email is required.'
  if (!message?.trim()) return 'Message is required.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Invalid email address.'
  if (message.trim().length < 10) return 'Message must be at least 10 characters.'
  return null
}

function buildHtml(name: string, email: string, subject: string, message: string) {
  const escaped = (s: string) =>
    s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width,initial-scale=1" /></head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e4e4e7;">

        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,#6366f1,#06b6d4);padding:32px 40px;">
            <p style="margin:0;font-size:12px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:rgba(255,255,255,0.7);">Portfolio Contact</p>
            <h1 style="margin:8px 0 0;font-size:24px;font-weight:700;color:#ffffff;">New Message</h1>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:40px;">

            <!-- Sender meta -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;background:#f4f4f5;border-radius:8px;overflow:hidden;">
              <tr>
                <td style="padding:16px 20px;border-bottom:1px solid #e4e4e7;">
                  <p style="margin:0;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:1px;color:#71717a;">From</p>
                  <p style="margin:4px 0 0;font-size:15px;color:#09090b;font-weight:500;">${escaped(name)} &lt;${escaped(email)}&gt;</p>
                </td>
              </tr>
              <tr>
                <td style="padding:16px 20px;">
                  <p style="margin:0;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:1px;color:#71717a;">Subject</p>
                  <p style="margin:4px 0 0;font-size:15px;color:#09090b;font-weight:500;">${escaped(subject || '(no subject)')}</p>
                </td>
              </tr>
            </table>

            <!-- Message -->
            <p style="margin:0 0 12px;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:1px;color:#71717a;">Message</p>
            <div style="font-size:15px;line-height:1.7;color:#3f3f46;white-space:pre-wrap;">${escaped(message)}</div>

            <!-- Reply CTA -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:40px;padding-top:32px;border-top:1px solid #e4e4e7;">
              <tr>
                <td>
                  <a href="mailto:${escaped(email)}"
                     style="display:inline-block;padding:12px 28px;background:#6366f1;color:#ffffff;font-size:14px;font-weight:600;text-decoration:none;border-radius:8px;">
                    Reply to ${escaped(name)}
                  </a>
                </td>
              </tr>
            </table>

          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="padding:20px 40px;background:#f4f4f5;border-top:1px solid #e4e4e7;">
            <p style="margin:0;font-size:12px;color:#a1a1aa;">Sent from your portfolio contact form · chandrawijaya.dev</p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactPayload = await request.json()

    const validationError = validate(body)
    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 })
    }

    const { name, email, subject, message } = body

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

    await transporter.sendMail({
      from: `"Portfolio" <${process.env.GMAIL_USER}>`,
      replyTo: `"${name}" <${email}>`,
      to: process.env.GMAIL_USER,
      subject: subject?.trim()
        ? `[Portfolio] ${subject}`
        : `[Portfolio] New message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: buildHtml(name, email, subject, message),
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[contact] send error:', err)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    )
  }
}
