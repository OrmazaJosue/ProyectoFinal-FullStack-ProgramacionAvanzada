const express = require('express');
const router = express.Router();
const FormuData = require('../controllers/FormuData'); // La ruta debe coincidir con la ubicación real
const sendMailController = require('../controllers/mailController');
// Definir las rutas
router.get('/', FormuData.getAllFormularios);
router.get('/:id', FormuData.getFormularioById);
router.post('/', FormuData.createFormulario);
router.put('/:id', FormuData.updateFormulario);
router.delete('/:id', FormuData.deleteFormulario);
router.post('/sendmail', sendMailController.sendMailController);

module.exports = router;