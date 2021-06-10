const { KAFKA_HOST_URL, TOPIC_NAME, CLIENT_ID } = require("./config_dont_push.js");
console.log('KAFKA_HOST_URL: ', KAFKA_HOST_URL, 'TOPIC_NAME: ', TOPIC_NAME, 'CLIENT_ID: ', CLIENT_ID);

const { Kafka, ConfigResourceTypes } = require("kafkajs");
const kafka = new Kafka({
  clientId: CLIENT_ID,
  brokers: [KAFKA_HOST_URL],
});
const admin = kafka.admin();

const kafkaFunction = async () => {
  const response = await admin.alterConfigs({
    resources: [
      {
        type: ConfigResourceTypes.TOPIC,
        name: TOPIC_NAME,
        configEntries: [
          { name: "cleanup.policy", value: "compact,delete" },
          { name: "retention.ms", value: "172800000" },
        ],
      },
    ],
  });
  console.log("response:-");
  console.dir(response, { depth: null, colors: true });
  console.log("---Execution Finished---");
  process.exit(0);
};

kafkaFunction();
