const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductController')


// $ sequelize model:generate --name Products --attributes name:string,price:integer,description:string, Cat
// egoryId:integer
router.post('/createProduct',ProductController.createProduct)
router.put('/updateProductById/:id', ProductController.updateProductById)
router.delete('/deleteProductById/:id', ProductController.deleteProductById)
router.get('/getProductById/:id', ProductController.getProductById)

module.exports = router;