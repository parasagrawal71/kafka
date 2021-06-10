const prodConfig = {
  KAFKA_HOST_URL: "",
  TOPIC_NAME: "",
  CLIENT_ID: "",
  GROUP_ID: "",
};

const devConfig = {
  KAFKA_HOST_URL: "",
  TOPIC_NAME: "",
  CLIENT_ID: "",
  GROUP_ID: "",
};

const localKafkaConfig = {
  KAFKA_HOST_URL: "localhost:9092", // Local KAFKA-IP
  TOPIC_NAME: "local-kafka-topic",
  CLIENT_ID: "local-kafka-client",
  GROUP_ID: "local-kafka-group",
};

module.exports = localKafkaConfig;
