export const ContactFormEmail = ({ name, email, message, ip, referenceId }) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>New Contact Form Submission</title>
        <style>
          /* Base */
          body {
            background-color: #f6f6f6;
            font-family: sans-serif;
            -webkit-font-smoothing: antialiased;
            font-size: 14px;
            line-height: 1.4;
            margin: 0;
            padding: 0;
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
          }
          
          .container {
            background-color: #ffffff;
            border-radius: 8px;
            max-width: 580px;
            margin: 20px auto;
            padding: 20px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }
          
          .header {
            background-color: #1a365d;
            color: #ffffff;
            padding: 20px;
            text-align: center;
            border-radius: 6px 6px 0 0;
            margin: -20px -20px 20px -20px;
          }
          
          .header h1 {
            margin: 0;
            font-size: 24px;
            font-weight: 600;
          }
          
          .content {
            padding: 20px 0;
          }
          
          .field {
            margin-bottom: 20px;
            padding: 15px;
            background-color: #f8fafc;
            border-radius: 6px;
          }
          
          .field-label {
            color: #64748b;
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            margin-bottom: 5px;
          }
          
          .field-value {
            color: #1e293b;
            font-size: 16px;
            line-height: 1.5;
          }
          
          .message-box {
            background-color: #f8fafc;
            border-left: 4px solid #1a365d;
            padding: 15px;
            margin: 20px 0;
            border-radius: 0 6px 6px 0;
          }
          
          .footer {
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #e2e8f0;
            color: #64748b;
            font-size: 12px;
          }

          .admin-link {
            display: inline-block;
            margin-top: 15px;
            padding: 10px 20px;
            background-color: #1a365d;
            color: #ffffff;
            text-decoration: none;
            border-radius: 4px;
            font-weight: 500;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Contact Form Submission</h1>
          </div>
          
          <div class="content">
            <div class="field">
              <div class="field-label">Name</div>
              <div class="field-value">${name}</div>
            </div>
            
            <div class="field">
              <div class="field-label">Email</div>
              <div class="field-value">${email}</div>
            </div>
            
            <div class="message-box">
              <div class="field-label">Message</div>
              <div class="field-value">${message}</div>
            </div>
            
            <div style="text-align: center;">
              <a href="https://prime-plus-mortgages.vercel.app/admin/contacts/${referenceId}" class="admin-link">
                View in Admin Panel
              </a>
            </div>
            
            <div class="footer">
              <p>Submitted from IP: ${ip}</p>
              <p>Reference ID: ${referenceId}</p>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
};
