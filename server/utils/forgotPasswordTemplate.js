const forgotPasswordTemplate = ({ name = 'Friend', otp = '----' }) => {
  return `
  <!doctype html>
  <html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>Reset your password</title>
    <style>
      /* Fallback fonts and basic reset for email clients */
      body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
      table { border-collapse: collapse !important; }
      img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; display: block; }
      a { text-decoration: none; }
      /* Simple responsive */
      @media screen and (max-width: 600px) {
        .container { width: 100% !important; padding: 20px !important; }
        .hero { font-size: 20px !important; }
        .otp { font-size: 28px !important; padding: 18px 20px !important; }
      }
    </style>
  </head>
  <body style="margin:0; padding:0; background-color:#f3f6fb; font-family: 'Helvetica Neue', Arial, sans-serif;">
    <!-- Preheader text (hidden in email preview) -->
    <div style="display:none; font-size:1px; color:#f3f6fb; line-height:1px; max-height:0px; max-width:0px; opacity:0; overflow:hidden;">
      Use this secure code to reset your password.
    </div>

    <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
      <tr>
        <td align="center" style="padding:30px 16px;">
          <table class="container" width="600" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff; border-radius:12px; box-shadow:0 6px 20px rgba(20,30,50,0.08); overflow:hidden; width:600px;">
            <!-- Header / logo -->
            <tr>
              <td style="padding:28px 32px; text-align:left; background: linear-gradient(90deg,#4b6cb7 0%, #182848 100%); color: #fff;">
                <table width="100%">
                  <tr>
                    <td style="vertical-align:middle;">
                      <img src="https://via.placeholder.com/120x28?text=LOGO" width="120" height="28" alt="Logo" style="display:block;">
                    </td>
                    <td style="text-align:right; vertical-align:middle; font-size:14px; opacity:0.95;">
                      Password Help
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding:36px 40px 24px;">
                <h2 class="hero" style="margin:0 0 12px; font-size:24px; color:#102a43; font-weight:600;">
                  Hi ${name},
                </h2>
                <p style="margin:0 0 20px; color:#334e68; line-height:1.5;">
                  We received a request to reset the password for your account. Use the temporary code below to continue. This code will expire in <strong>10 minutes</strong>.
                </p>

                <!-- OTP card -->
                <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="margin:20px 0;">
                  <tr>
                    <td align="center">
                      <div class="otp" style="display:inline-block; padding:20px 28px; border-radius:10px; background: linear-gradient(180deg, #ffffff, #f7fbff); border:1px solid #e6eef9; font-weight:700; font-size:32px; letter-spacing:6px; color:#0b2a66;">
                        ${otp}
                      </div>
                    </td>
                  </tr>
                </table>

                <!-- CTA / button -->
                <p style="margin:18px 0 10px;">
                  If you didn't request a password reset, you can safely ignore this email — no changes were made. If you need help, contact our support.
                </p>

                <table cellpadding="0" cellspacing="0" role="presentation" style="margin-top:18px;">
                  <tr>
                    <td align="left">
                      <a href="#" style="display:inline-block; padding:12px 20px; border-radius:8px; background:#2f6fe4; color:#ffffff; font-weight:600; text-decoration:none;">
                        Reset password
                      </a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="background:#f7fafc; padding:18px 40px 28px; color:#557; font-size:13px;">
                <p style="margin:0 0 6px;">
                  If the button doesn't work, copy and paste this code into the app: <strong>${otp}</strong>
                </p>
                <p style="margin:8px 0 0; color:#8b9bb1;">
                  © ${new Date().getFullYear()} Your Company. All rights reserved.<br>
                  123 Example Street, City, Country
                </p>
              </td>
            </tr>

          </table>

          <!-- Small text under card -->
          <table width="600" cellpadding="0" cellspacing="0" role="presentation" style="max-width:600px; margin-top:12px;">
            <tr>
              <td style="text-align:center; color:#98a6bf; font-size:12px; padding:8px 12px;">
                This email was intended for ${name}. If you believe you received this by mistake, please ignore it.
              </td>
            </tr>
          </table>

        </td>
      </tr>
    </table>
  </body>
  </html>
  `;
}


export default forgotPasswordTemplate                              