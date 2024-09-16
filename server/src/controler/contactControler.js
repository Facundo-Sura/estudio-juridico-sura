require("dotenv").config();
const nodemailer = require("nodemailer");

const { EMAIL_USER, EMAIL_PASS, EMAIL_RECEIVER } = process.env;

const consulta = async (fullname, email, phone, subject, message) => {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    phone: phone,
    to: EMAIL_USER,
    subject: `Nuevo mensaje de ${fullname}`,
    text: `
    telefone: ${phone}
    asunto: ${subject}
    mensaje: ${message}
    email: ${email}
    `,
  };

  await transporter.sendMail(mailOptions);
  
};

module.exports = consulta;
