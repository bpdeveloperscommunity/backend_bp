// emailTemplates.js
module.exports = {
    registerUser: (name, email, downloadLink) => `
      <h2>Dear ${name},</h2>
      <h2>Email ${email},</h2>
      <p>Thank you for registering! We appreciate your interest in our course.</p>
      <p>Here is your brochure download link:</p>
      <p><a href="${downloadLink}" target="_blank" style="text-decoration: none; color: #007bff;">Download Brochure ${downloadLink}</a></p>
      <p>We hope you find the information helpful. If you have any questions, feel free to reach out to us.</p>
      <p>Best regards,<br>Your Organization</p>
    `,
  };
  