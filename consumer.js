const express = require('express');
const nsq = require('nsqjs');
const app = express();
const port = 3000;

const reader = new nsq.Reader('test', 'test-channel', {
    lookupdHTTPAddresses: 'localhost:4161'
});

reader.connect();

reader.on('message', msg => {
    console.log('Received message : ' + msg.body.toString());
    msg.finish();
});

app.listen(port, () => console.log('NSQ consumer is listening on port ' + port));