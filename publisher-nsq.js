const nsq = require("nsqjs");

const publishMessage = (message) => {
    console.log('come to here with msg : ' + JSON.stringify(message));
    const writer = new nsq.Writer('localhost', 4150);
    writer.connect();
    writer.on('ready', () => {
        writer.publish('test', message);
        console.log('Published message : ' + message);
    });

    writer.on('closed', () => {
        console.log('writer closed');
    });
};

module.exports = publishMessage;