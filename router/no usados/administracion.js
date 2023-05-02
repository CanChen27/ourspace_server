const express = require('express');

const router = express();

//personal data
router.post('/perdata', (req, res)=> {
    console.log(req.auth);
    res.send({status: 200, data: req.auth});
})



module.exports = router;
