const consulta = require("../controler/contactControler");

const contactHandler = async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  if (!name || !email || !phone || !subject || !message) {
    return res
      .status(400)
      .json({ success: false, error: "Todos los campos son requeridos" });
  }

  try {
    await consulta(
      name,
      email,
      phone,
      subject,
      message,
    );
    res
      .status(200)
      .json({ success: true, message: "Correo enviado con éxito" })
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });  
  }
};

module.exports = contactHandler;
