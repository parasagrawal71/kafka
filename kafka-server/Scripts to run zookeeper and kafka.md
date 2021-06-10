Downloaded file: apache-zookeeper-3.7.0-bin.tar.gz
Renamed To: zookeeper

./zookeeper/bin/zkServer.sh start

./zookeeper/bin/zkServer.sh stop



NOTE:-
	sudo ./zkServer.sh start
	[sudo] password for administrator:
	/bin/java
	ZooKeeper JMX enabled by default
	Using config: apache-zookeeper-3.5.5/bin/../conf/zoo.cfg
	Starting zookeeper ... FAILED TO START
	The solution is: download bin.tar file "apache-zookeeper-3.5.5-bin.tar.gz " I had downloaded 		just a tar file by mistake,

********************************************************************************************


Downloaded file: kafka_2.13-2.8.0.tgz
Renamed To: kafka

./kafka/bin/kafka-server-start.sh ./kafka/config/server.properties

./kafka/bin/kafka-server-stop.sh



Note: 
	1) Do not download a source files from appache kafka, download a binary file


	2) Since you're using an own log.dir in your broker properties, one solution is to create a 		meta.properties file under your log directory with some minimum config:

	version=0
	broker.id=0
	I would also recommend to place that file and directory somewhere in your project's test 		directory (i.e. not necessarily under /home/) and ensure that it is properly emptied after 		each test run.
	(I kept default path)


********************************************************************************************


/home/adminspin/office/wsi/_xtra/kafka-server
