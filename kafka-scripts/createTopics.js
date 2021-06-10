const { KAFKA_HOST_URL, TOPIC_NAME, CLIENT_ID } = require("./config_dont_push.js");
console.log('KAFKA_HOST_URL: ', KAFKA_HOST_URL, 'TOPIC_NAME: ', TOPIC_NAME, 'CLIENT_ID: ', CLIENT_ID);

const kafka = require("kafka-node");

const client = new kafka.KafkaClient({ kafkaHost: KAFKA_HOST_URL });
const admin = new kafka.Admin(client);

const topics = [
  {
    topic: TOPIC_NAME,
    partitions: 1,
    replicationFactor: 1, // 2
    configEntries: [
      {
        name: "retention.ms",
        value: "172800000",
      },
      {
        name: "cleanup.policy",
        value: "compact,delete",
      },
    ],
  },
];

admin.createTopics(topics, (err, res) => {
  // result is an array of any errors if a given topic could not be created
  if(err) {
  	console.log("err: ", err);
  }

  console.log("res: ", res);
});
