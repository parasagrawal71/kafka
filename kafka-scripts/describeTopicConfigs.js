const { KAFKA_HOST_URL, TOPIC_NAME, CLIENT_ID } = require("./config_dont_push.js");
console.log('KAFKA_HOST_URL: ', KAFKA_HOST_URL, 'TOPIC_NAME: ', TOPIC_NAME, 'CLIENT_ID: ', CLIENT_ID);

const { Kafka, ConfigResourceTypes } = require("kafkajs");
const kafka = new Kafka({
  clientId: CLIENT_ID,
  brokers: [KAFKA_HOST_URL],
});
const admin = kafka.admin();

const kafkaFunction = async () => {
  const configs = await admin.describeConfigs({
    includeSynonyms: false,
    resources: [
      {
        type: ConfigResourceTypes.TOPIC,
        name: TOPIC_NAME,
        // configNames: ['retention.ms'], // Remove this line to see all configs
        // configNames: ['cleanup.policy'], // Remove this line to see all configs
      },
    ],
  });
  console.log("configs:-");
  console.dir(configs, { depth: null, colors: true });
  console.log("---Execution Finished---");
  process.exit(0);
};

kafkaFunction();
