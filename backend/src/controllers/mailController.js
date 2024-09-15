// controllers/mailController.js
const { sendMail } = require('../config/mailConfig');

// Controlador para enviar correos
const sendMailController = async (req, res) => {
    const { to, subject, text } = req.body;

    try {
        const info = await sendMail(to, subject, text);
        res.status(200).json({ message: 'Correo enviado exitosamente', info });
    } catch (error) {
        res.status(500).json({ message: 'Error al enviar el correo', error });
    }
};

module.exports = {
    sendMailController
};
