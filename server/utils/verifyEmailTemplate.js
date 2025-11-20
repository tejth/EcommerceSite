const verifyEmailTemplate = ({ name, url }) => {
  return `
    <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
      <p>Dear <strong>${name}</strong>,</p>

      <p>Thank you for registering at <strong>Tushar Electricals</strong>.</p>

      <p>Please click the button below to verify your email address:</p>

      <a 
        href="${url}" 
        style="
          display: inline-block;
          background: #071263;
          color: white;
          text-decoration: none;
          padding: 12px 20px;
          margin-top: 12px;
          border-radius: 6px;
          font-weight: bold;
        "
      >
        Verify Email
      </a>

      <p style="margin-top: 20px;">If you didn’t create this account, you can safely ignore this email.</p>
    </div>
  `;
};

export default verifyEmailTemplate;
