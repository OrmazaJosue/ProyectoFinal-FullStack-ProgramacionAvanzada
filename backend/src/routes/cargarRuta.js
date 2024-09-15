const express = require('express');
const router = express.Router();
const solicitanteController = require('../controllers/cararData'); // Importa el controlador de solicitantes

// Definir las rutas
router.get('/', solicitanteController.getAllSolicitantes);
router.get('/:id', solicitanteController.getSolicitanteById);
router.get('/estado/:estado', solicitanteController.getSolicitantesByEstado);
router.put('/:id/status', solicitanteController.updateSolicitanteStatus);

module.exports = router;
