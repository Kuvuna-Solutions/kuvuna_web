/**
 * KUVUNA INQUIRY PIPELINE - GOOGLE APPS SCRIPT
 * 
 * Instructions:
 * 1. Open Google Sheets and create a new spreadsheet: "Kuvuna Inquiries"
 * 2. Set the first row headers:
 *    A: Timestamp | B: Name | C: Business | D: Email | E: Phone | F: Interests | G: Message | H: Status | I: Notes
 * 3. Go to Extensions > Apps Script
 * 4. Paste this code into Code.gs
 * 5. Update TEAM_EMAILS below with your notification email(s)
 * 6. Click "Deploy" > "New deployment"
 * 7. Select type: "Web app"
 * 8. Execute as: "Me"
 * 9. Who has access: "Anyone"
 * 10. Copy the Web App URL and paste it into your Kuvuna contact form configuration
 */

const TEAM_EMAILS = "team@kuvuna.com"; // Replace with your team email(s), comma-separated

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);

    const timestamp = new Date();
    const name = data.name || "N/A";
    const business = data.business || "N/A";
    const email = data.email || "N/A";
    const phone = data.phone || "N/A";
    const interests = Array.isArray(data.interests) ? data.interests.join(", ") : (data.interests || "General Inquiry");
    const message = data.message || "N/A";

    // Append to sheet
    sheet.appendRow([
      timestamp,
      name,
      business,
      email,
      phone,
      interests,
      message,
      "New",
      ""
    ]);

    // Send instant email notification to team
    const emailSubject = `[Kuvuna Lead] New inquiry from ${name} (${business})`;
    const emailBody = `
New inquiry submitted on Kuvuna website:

Name: ${name}
Business: ${business}
Email: ${email}
Phone/WhatsApp: ${phone}
Area of Interest: ${interests}

Message / Problem Description:
${message}

Date & Time: ${timestamp.toUTCString()}

View the full inquiry spreadsheet:
${SpreadsheetApp.getActiveSpreadsheet().getUrl()}
    `;

    if (TEAM_EMAILS && TEAM_EMAILS !== "team@kuvuna.com") {
      MailApp.sendEmail({
        to: TEAM_EMAILS,
        subject: emailSubject,
        body: emailBody
      });
    }

    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      message: "Thank you. Your inquiry has been received."
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: err.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService.createTextOutput(JSON.stringify({
    status: "ok",
    service: "Kuvuna Lead Capture Webhook"
  })).setMimeType(ContentService.MimeType.JSON);
}
