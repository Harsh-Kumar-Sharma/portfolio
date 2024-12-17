const express = require('express');
const router = express.Router();
const { createEnquiriesController } = require('../controllers/enquire.controller')

router.post('/enquire', createEnquiriesController)

module.exports = router;
