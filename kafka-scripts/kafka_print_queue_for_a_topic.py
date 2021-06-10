from kafka import KafkaConsumer
from kafka.structs import TopicPartition
from datetime import datetime
import json

########################################
#RUN with command:- python3 filename.py
########################################

f = open("config_dont_push.json", "r")
config = json.load(f)
currentConfig = config['localKafkaConfig']
f.close()

# Printing as string not dict
print(json.dumps(currentConfig)) 

KAFKA_HOST_URL = currentConfig['KAFKA_HOST_URL']
TOPIC_NAME = currentConfig['TOPIC_NAME']
CLIENT_ID = currentConfig['CLIENT_ID']
GROUP_ID = currentConfig['GROUP_ID']


#https://kafka-python.readthedocs.io/en/master/usage.html
#https://towardsdatascience.com/getting-started-with-apache-kafka-in-python-604b3250aa05

class Consumer():
	def __init__(self):
		self.consumer =None
		self.settings = {
						'bootstrap_servers':KAFKA_HOST_URL,
						'auto_offset_reset':'earliest',
						'consumer_timeout_ms':1000
					}
		self.topicName = TOPIC_NAME

	def initilize_consumer(self):
		self.consumer = KafkaConsumer(bootstrap_servers=KAFKA_HOST_URL,
				                         auto_offset_reset='earliest',
				                         consumer_timeout_ms=1000)
		self.consumer.subscribe([self.topicName])

		print(self.consumer)

	def read_msg(self):
		# f = open("data_in_topic", "a")
		
		# partitions = self.consumer.partitions_for_topic(self.topicName)
		# for p in partitions:
		# 	topic_partition = TopicPartition(self.topicName, p)
		# 	print(topic_partition)
		# 	# Seek offset 95
		# 	self.consumer.seek(partition=topic_partition, offset=190)
		
		try:
			while True:				
				
				for msg in self.consumer:
					
					print("topic: {} \t msg is {} \t msg size :{}\t count :{}\
					#\t key :{}\t timestamp :{}".
					format(msg.topic,msg.value.decode('ascii'),msg.serialized_value_size,
					msg.offset,msg.key,datetime.fromtimestamp((msg.timestamp+19800*1000)/1000)))
						
					# print(msg.value.decode('ascii'))
					# f.write(msg.value.decode('ascii'))
					
					
				#print('waiting for msg...')

		except KeyboardInterrupt:
			pass
		finally:
			f.close()
			self.consumer.close()

	def close_consumer(self):
		self.consumer.close()

'''
ConsumerRecord(topic='TutorialTopic1', partition=0, offset=96, timestamp=1610440839384, timestamp_type=0, key=None, value=b'some_message_bytes---1', headers=[], checksum=None, serialized_key_size=-1, serialized_value_size=22, serialized_header_size=-1)

'''

if __name__ == "__main__":
	
	consumer_obj = Consumer()
	consumer_obj.initilize_consumer()
	consumer_obj.read_msg()
	consumer_obj.close_consumer()
