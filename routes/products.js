const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductController')



router.post('/createProduct',ProductController.createProduct)
router.put('/updateProductById/:id', ProductController.updateProductById)
router.delete('/deleteProductById/:id', ProductController.deleteProductById)
router.get('/getProductById/:id', ProductController.getProductById)

module.exports = router;