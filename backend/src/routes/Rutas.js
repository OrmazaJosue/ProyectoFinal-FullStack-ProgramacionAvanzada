const express = require('express');
const router = express.Router();
const FormuData = require('../contro/FormuData'); // La ruta debe coincidir con la ubicación real

// Definir las rutas
router.get('/', FormuData.getAllFormularios);
router.get('/:id', FormuData.getFormularioById);
router.post('/', FormuData.createFormulario);
router.put('/:id', FormuData.updateFormulario);
router.delete('/:id', FormuData.deleteFormulario);

module.exports = router;