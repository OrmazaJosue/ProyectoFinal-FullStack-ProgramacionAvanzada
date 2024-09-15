// emails/formularioExitoEmail.js

const generateFormularioExitoEmail = (nombreUsuario, cedulaUsuario) => {
    return `
      <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 20px;
            color: #333;
            background: linear-gradient(to bottom right, rgba(75, 202, 255, 0.5), rgba(255, 255, 255, 0.5)), url('https://i.imgur.com/k65qhRD.jpeg');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
          }
  
          .card {
            background-color: #ffffff;
            border: 8px solid #54a6b1;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
            max-width: 600px;
            margin: auto;
            padding: 20px;
            border-radius: 8px;
            transition: box-shadow 0.3s ease;
          }
  
          .card:hover {
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
          }
  
          .card-header {
            background-color: #75c0c5;
            color: #ffffff;
            font-size: 16px;
            font-weight: bold;
            padding: 8px;
            text-align: center;
            margin-bottom: 8px;
          }
  
          .card-body {
            padding: 10px;
            background-color: #f8f9fa;
            border-radius: 8px;
            margin-bottom: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            font-size: 14px;
          }
  
          .card-body p {
            margin-bottom: 8px;
            color: #555;
            text-align: justify;
            font-size: 14px;
          }
  
          .card-footer {
            background-color: #eaf3f8;
            border-top: 1px solid #e7e2e2;
            padding: 8px;
            text-align: center;
            border-bottom-left-radius: 8px;
            border-bottom-right-radius: 8px;
            color: #a59f9f;
            font-size: 15px;
          }
  
          .email-footer {
            text-align: center;
            font-size: 12px;
            margin-top: 10px;
            color: #6d6b6b;
          }
  
          .email-footer a {
            color: #007bff;
            text-decoration: none;
          }
        </style>
      </head>
      <body>
        <div class="card">
          <div class="card-header">
            ¡Formulario Enviado con Éxito!
          </div>
          <div class="card-body">
            <p>Estimado/a ${nombreUsuario}, con cédula: ${cedulaUsuario}</p>
            <p>Nos complace informarle que su formulario ha sido enviado con éxito. Nuestro equipo revisará su solicitud y le contactará en caso de ser necesario.</p>
            <hr>
            <p>Atentamente,</p>
            <p>El equipo de Soporte</p>
          </div>
          <div class="card-footer">
            Para más detalles, por favor contacte con nuestro equipo de soporte técnico.
          </div>
          <div class="email-footer">
            <p>Ha recibido este correo electrónico porque ha enviado un formulario a través de nuestra plataforma.</p>
            <p>© 2024 Nombre de la Empresa | Todos los derechos reservados | <a href="#">Política de privacidad</a></p>
          </div>
        </div>
      </body>
      </html>
    `;
  };
  
  module.exports = generateFormularioExitoEmail;  