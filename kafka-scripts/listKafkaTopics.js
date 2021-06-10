const { KAFKA_HOST_URL, TOPIC_NAME, CLIENT_ID } = require("./config_dont_push.js");
console.log('KAFKA_HOST_URL: ', KAFKA_HOST_URL, 'TOPIC_NAME: ', TOPIC_NAME, 'CLIENT_ID: ', CLIENT_ID);


const { Kafka, ConfigResourceTypes } = require("kafkajs");
const kafka = new Kafka({
  clientId: CLIENT_ID,
  brokers: [KAFKA_HOST_URL],
});
const admin = kafka.admin();

const kafkaFunction = async () => {
  await admin.connect();
  const topics = await admin.listTopics();
  console.log("TOPICS:- ");
  console.log(topics);
  await admin.disconnect();
};

kafkaFunction();
