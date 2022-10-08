const express = require('express')
const router = express.Router()
const { addComment } = require('../controllers/commentController')

router.use((req, res, next) => {
  next()
})
router.post('/add', addComment)

module.exports = router