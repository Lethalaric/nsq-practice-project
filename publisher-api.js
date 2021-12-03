const express = require('express');
const router = express.Router();
const publisherNsq = require('./publisher-nsq');

router.post("/publish", (req, res, next) => {
    console.log('Request body : ' + JSON.stringify(req.body));
    publisherNsq(req.body);
    res.send({message: 'message has been published'});
});

module.exports = router;