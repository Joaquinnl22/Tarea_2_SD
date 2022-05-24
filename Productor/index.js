const { Kafka } = require('kafkajs')

const express = require("express");
const app = express();

app.use(express.json());

const kafka = new Kafka({
    clientId: 'my-app',
    brokers: [`${process.env.KAFKA_HOST}:9092`]
  })

const consumer = kafka.consumer({ groupId: 'test-group' })

app.listen(4000, async function() {

await consumer.connect()
await consumer.subscribe({ topic: 'my-topic', fromBeginning: true })

await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        partition,
        offset: message.offset,
        value: message.value.toString(),
      })
    },
  })
});