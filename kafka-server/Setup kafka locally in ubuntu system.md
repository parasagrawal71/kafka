## Setup kafka locally in ubuntu system:-

#### i. Setup Zookeeper

**Step 1:** 

Download ZooKeeper binary file (*-bin.tar.gz) from the following link:-

```
https://mirrors.estointernet.in/apache/zookeeper/
```



**Step 2:**

- Unzip the file. Inside the conf directory, rename the file *zoo_sample.cfg* as *zoo.cfg*. 
- The *zoo.cfg* file keeps configuration for ZooKeeper, i.e. on which port the ZooKeeper instance will listen, data directory, etc.  The default listen port is *2181*. You can change this port by changing `clientPort`.



**Step 3:**

- Go to the *bin* directory.

- Start ZooKeeper by executing the command:-

  ```
  ./zkServer.sh start
  ```

- Stop ZooKeeper by executing the command:-

  ```
  ./zkServer.sh stop
  ```

  

<br />

#### ii. Setup Kafka

**Step 1:**

Download Kafka binary file from the following link under binary downloads:-

```
https://kafka.apache.org/downloads
```



**Step 2:**

- Unzip this file. The Kafka instance (Broker) configurations are kept in the config directory.
- Go to the config directory. Open the file *server.properties*.
- Remove the comment from listeners property, i.e. `listeners=PLAINTEXT://:9092`. The Kafka broker will listen on port *9092*.



**Step 3:**

- Go to the Kafka home directory

- Start the Kafka by executing the command:-

  ```
  ./bin/kafka-server-start.sh config/server.properties
  ```

- Stop the Kafka broker through the command:-

  ```
  ./bin/kafka-server-stop.sh
  ```


<br />

## Common errors:-

- Error 1: Classpath is empty. Please build the project first e.g. by running './gradlew jar -PscalaVersion=2.13.5'

  ```
  When: 		While starting kafka service
  
  Reason: 	It is because there is a space in the path where Kafka resides.
  
  Solution:	Simply rename the Kafka home directory to "kafka".
  
  Reference: 	https://stackoverflow.com/a/51645290
  ```
  
  

<br />

## Reference:-

Blog referred:  https://dzone.com/articles/kafka-setup