const { Kafka } = require('kafkajs');

const express = require("express");
const app = express();
app.use(express.json());

const kafka = new Kafka({
    clientId: 'my-app',
    brokers: [`${process.env.KAFKA_HOST}:9092`]
  })

const producer = kafka.producer()

app.post('/api/',async function(req,res){
    const user = req.body.user;
    const pass = req.body.pass;
    
    await producer.conect();

    await producer.send({
        topic: "my-topic",
        message: [{
            values: JSON.stringify({
                user,
            }),
        },
    ],
    });

});

app.listen(3001);