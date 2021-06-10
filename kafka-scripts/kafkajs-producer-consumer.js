const { KAFKA_HOST_URL, TOPIC_NAME, CLIENT_ID, GROUP_ID } = require("./config_dont_push.js");
console.log('KAFKA_HOST_URL: ', KAFKA_HOST_URL, 'TOPIC_NAME: ', TOPIC_NAME, 'CLIENT_ID: ', CLIENT_ID, 'GROUP_ID: ', GROUP_ID);

const kafkaProducerConsumer = async function () {
    const { Kafka } = require('kafkajs');

    const kafka = new Kafka({
      clientId: CLIENT_ID,
      brokers: [KAFKA_HOST_URL]
    })

    const producer = kafka.producer();

    // Producing
    await producer.connect()
    await producer.send({
      topic: TOPIC_NAME,
      messages: [
        { value: 'Hello world!' },
      ],
    })

    const consumer = kafka.consumer({ groupId: GROUP_ID })

    // Consuming
    await consumer.connect()
    await consumer.subscribe({ topic: TOPIC_NAME, fromBeginning: true })

    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        // console.log('topic: ', topic);
        // console.log('partition: ', partition);
        // console.log('message: ', message);

        console.log({
          partition,
          offset: message.offset,
          value: message.value.toString(),
        });
      },
    })

    return 'OK';
};

kafkaProducerConsumer();
