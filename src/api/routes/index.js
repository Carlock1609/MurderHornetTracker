const express = require('express');
const router = express.Router();
const User = require('../../models/user');

router.get('/', function(req,res) {
    // Trying to figure out how to pass in map to display

    context = {

   }
    res.render('base', context)
})


module.exports = router;

