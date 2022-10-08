const express = require('express')
const router = express.Router()
const { getAllBlog, addBlog, deleteBlog } = require('../controllers/blogController')

router.use((req, res, next) => {
  next()
})

router.get('/', getAllBlog)
router.post('/add', addBlog)
router.get('/delete/:id', deleteBlog)

module.exports = router