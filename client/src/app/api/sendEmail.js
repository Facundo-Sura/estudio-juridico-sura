import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido" });
  }

  const { name, email, phone, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Faltan campos requeridos" });
  }

  try {
    // Configuración del transportador de nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Contenido del correo
    const mailOptions = {
      from: process.env.SMTP_EMAIL,
      to: process.env.SMTP_EMAIL, // Cambiar si quieres que los correos lleguen a otro destino
      subject: `Consulta de ${name}: ${subject || "Sin asunto"}`,
      text: `
        Has recibido una nueva consulta:
        Nombre: ${name}
        Email: ${email}
        Teléfono: ${phone || "No proporcionado"}
        Mensaje:
        ${message}
      `,
    };

    // Enviar el correo
    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: "Correo enviado exitosamente" });
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    res.status(500).json({ error: "Error al enviar el correo" });
  }
}
