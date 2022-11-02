const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductController')



router.post('/createProduct',ProductController.createProduct)
router.put('/updateProduct/:id', ProductController.updateProduct)
module.exports = router;