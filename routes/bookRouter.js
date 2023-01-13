const express = require('express');
const router = express.Router();
const booksCtrl= require('../controllers/booksCtrl');

router.get('/',booksCtrl.get);
router.post('/',booksCtrl.post)

module.exports= router;