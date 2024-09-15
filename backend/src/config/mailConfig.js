// config/mailConfig.js
require('dotenv').config(); // Cargar las variables de entorno
const nodemailer = require('nodemailer');

// Crear el transporte de Nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS
    }
});

// Función para enviar correos con soporte para HTML
const sendMail = (to, subject, text, html) => {
    const mailOptions = {
        from: process.env.GMAIL_USER, // Dirección del remitente
        to: to, // Dirección del destinatario
        subject: subject, // Asunto del correo
        text: text, // Texto en plano
        html: html // Contenido HTML
    };

    return new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return reject(error);
            }
            return resolve(info);
        });
    });
};

module.exports = {
    sendMail
};
