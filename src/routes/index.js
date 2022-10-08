const express = require('express');
const router = express.Router();
const { getAllBlog, addBlog } = require('../controllers/blogController')
router.get('/', getAllBlog)
router.post('/add', addBlog)

module.exports = router;
