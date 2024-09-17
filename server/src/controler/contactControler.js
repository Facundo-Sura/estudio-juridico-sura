require("dotenv").config();
const nodemailer = require("nodemailer");
const template = require("../templates/emailTemplate")

const { EMAIL_USER, EMAIL_PASS, EMAIL_RECEIVER } = process.env;

const consulta = async (name, email, phone, subject, message) => {
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
    subject: `Nuevo mensaje de ${name}`,
    html: template(email, phone, subject, message),
  };

  await transporter.sendMail(mailOptions);
  
};

module.exports = consulta;
