const express = require('express');
const router = express.Router();
const solicitudesAprobadasController = require('../controllers/solicitudesAprobadasController');

// Crear una nueva solicitud aprobada
router.post('/solicitudes-aprobadas', solicitudesAprobadasController.createSolicitudAprobada);

// Obtener todas las solicitudes aprobadas
router.get('/solicitudes-aprobadas', solicitudesAprobadasController.getAllSolicitudesAprobadas);

// Obtener una solicitud aprobada por ID
router.get('/solicitudes-aprobadas/:id', solicitudesAprobadasController.getSolicitudAprobadaById);

// Actualizar una solicitud aprobada por ID
router.put('/solicitudes-aprobadas/:id', solicitudesAprobadasController.updateSolicitudAprobada);

// Eliminar una solicitud aprobada por ID
router.delete('/solicitudes-aprobadas/:id', solicitudesAprobadasController.deleteSolicitudAprobada);

module.exports = router;
