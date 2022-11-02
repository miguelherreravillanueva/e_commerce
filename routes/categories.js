const express = require('express');
const router = express.Router();
const CategoryController = require('../controllers/CategoryController')

router.post('/createCategory',CategoryController.createCategory)
router.get("/getCategories",CategoryController.getCategories)
router.get("/getCategoryById/:id",CategoryController.getCategoryById)
router.get("/getCategoryByName/:name", CategoryController.getCategoryByName)
router.put("/updateCategoryById/:id", CategoryController.updateCategoryById)
router.delete("/deleteCategoryById/:id", CategoryController.deleteCategoryById)

module.exports = router;
