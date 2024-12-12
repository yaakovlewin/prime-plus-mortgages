export const ContactFormEmail = ({ name, email, message, ip, referenceId }) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>New Contact Form Submission</title>
        <link href="https://fonts.googleapis.com/css2?family=Exo+2:wght@400;600;700&family=Rubik:wght@400;500;600&display=swap" rel="stylesheet">
        <style>
          /* Modern Base Styles */
          body {
            background-color: #f1f5f9;
            font-family: 'Rubik', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            -webkit-font-smoothing: antialiased;
            font-size: 14px;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
            color: #334155;
          }
          
          /* Enhanced Container */
          .container {
            background-color: #ffffff;
            border-radius: 12px;
            max-width: 600px;
            margin: 40px auto;
            padding: 0;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05), 0 10px 15px rgba(0, 0, 0, 0.1);
            border: 1px solid rgba(226, 232, 240, 0.8);
          }
          
          /* Modernized Header */
          .header {
            background: linear-gradient(135deg, #0891b2 0%, #0e7490 100%);
            color: #ffffff;
            padding: 40px 24px;
            text-align: center;
            border-radius: 12px 12px 0 0;
            position: relative;
            overflow: hidden;
            font-family: 'Exo 2', sans-serif;
          }
          
          .header::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(circle at top right, rgba(255,255,255,0.1) 0%, transparent 60%);
          }
          
          .header h1 {
            margin: 0;
            font-size: 28px;
            font-weight: 700;
            letter-spacing: -0.025em;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            position: relative;
          }
          
          /* Content Area */
          .content {
            padding: 32px 24px;
          }
          
          /* Enhanced Field Styling */
          .field {
            margin-bottom: 24px;
            padding: 20px;
            background-color: #f8fafc;
            border-radius: 8px;
            border: 1px solid #e2e8f0;
            transition: all 0.2s ease;
          }
          
          .field:hover {
            background-color: #f1f5f9;
            border-color: #cbd5e1;
          }
          
          .field-label {
            color: #64748b;
            font-size: 13px;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            margin-bottom: 8px;
            font-weight: 600;
            font-family: 'Exo 2', sans-serif;
          }
          
          .field-value {
            color: #1e293b;
            font-size: 16px;
            line-height: 1.6;
            font-weight: 500;
          }
          
          /* Message Box with Enhanced Styling */
          .message-box {
            background-color: #f8fafc;
            border-left: 4px solid #0891b2;
            padding: 20px;
            margin: 28px 0;
            border-radius: 0 8px 8px 0;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);
          }
          
          .message-box .field-value {
            white-space: pre-wrap;
            font-weight: normal;
          }
          
          /* Enhanced Button Container */
          .button-container {
            text-align: center;
            margin: 40px 0;
            padding: 0 20px;
          }
          
          /* Modern Button Styling */
          .admin-link {
            display: inline-block;
            padding: 16px 32px;
            background: linear-gradient(135deg, #0891b2 0%, #0e7490 100%);
            color: #ffffff !important; /* Ensure text is always white */
            text-decoration: none;
            border-radius: 8px;
            font-weight: 600;
            font-size: 15px;
            letter-spacing: 0.025em;
            box-shadow: 0 4px 6px rgba(8, 145, 178, 0.15), 0 1px 3px rgba(8, 145, 178, 0.1);
            transition: all 0.2s ease;
            border: 1px solid rgba(255, 255, 255, 0.1);
            position: relative;
            font-family: 'Exo 2', sans-serif;
          }
          
          .admin-link:hover {
            background: linear-gradient(135deg, #0e7490 0%, #155e75 100%);
            box-shadow: 0 6px 8px rgba(8, 145, 178, 0.2), 0 2px 4px rgba(8, 145, 178, 0.1);
            transform: translateY(-1px);
            color: #ffffff !important; /* Ensure text stays white on hover */
          }
          
          .admin-link::after {
            content: " →";
            opacity: 0.8;
            margin-left: 6px;
            transition: transform 0.2s ease;
            color: #ffffff !important; /* Ensure arrow is white */
          }
          
          .admin-link:hover::after {
            transform: translateX(2px);
          }
          
          /* Enhanced Footer */
          .footer {
            margin-top: 40px;
            padding: 24px;
            border-top: 1px solid #e2e8f0;
            color: #64748b;
            font-size: 13px;
            background-color: #f8fafc;
            border-radius: 0 0 12px 12px;
          }
          
          .footer p {
            margin: 8px 0;
            line-height: 1.5;
          }
          
          /* Responsive Design Improvements */
          @media only screen and (max-width: 620px) {
            .container {
              margin: 20px 10px;
              width: auto !important;
            }
            
            .header {
              padding: 30px 20px;
            }
            
            .header h1 {
              font-size: 24px;
            }
            
            .content {
              padding: 24px 16px;
            }
            
            .field, .message-box {
              padding: 16px;
              margin-bottom: 16px;
            }
            
            .admin-link {
              padding: 14px 28px;
              width: 100%;
              box-sizing: border-box;
            }
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
            
            <div class="button-container">
              <a href="${process.env.NEXT_PUBLIC_BASE_URL}/admin/app/${referenceId}" class="admin-link">
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
