const express = require('express');
const router = express.Router();
const CategoryController = require('../controllers/CategoryController')

router.post('/createCategory',CategoryController.createCategory)
router.get("/getCategoryById/:id",CategoryController.getCategoryById)

module.exports = router;
