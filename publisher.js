const express = require('express');
const nsq = require('nsqjs');
const bodyParser = require('body-parser');
const publisherApi = require('./publisher-api');
const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use('/publisher', publisherApi);

app.listen(port, () => console.log('NSQ publisher is listening port ' + port));