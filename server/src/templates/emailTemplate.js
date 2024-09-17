const emailTemplate = (email, phone, subject, message) => {
  return `<div style="width:100%;font-family:arial;padding:0;Margin:0">
    <p style="text-decoration:none"><strong>Email:</strong> ${email}</p>
    <p><strong>Teléfono:</strong> ${phone}</p>
    <p><strong>Asunto:</strong> ${subject}</p>
    </div>
    <div style="height:350px;width:100%;background-color:grey">
    <p style="padding:10px;font-size:22px">${message}</p>
    </div>
    `;
};

module.exports = emailTemplate;
