Kafka commands:

List consumer groups:
    bin/kafka-consumer-groups.sh --bootstrap-server localhost:9092 --list

Describe specific group:
    bin/kafka-consumer-groups.sh --bootstrap-server localhost:9092 --group my_group_name --describe

Describe all groups:
    bin/kafka-consumer-groups.sh --bootstrap-server localhost:9092 --all-groups --describe
	kafka-topics.sh --zookeeper your_zookeeper_address --delete --topic "*"


Add partition to a topic: 
    bin/kafka-topics.sh --bootstrap-server localhost:9092 --alter --topic my_topic_name --partitions 40 

Describe a topic:
   bin/kafka-topics.sh --bootstrap-server localhost:9092 --topic ocmp-acl-create --describe 




Reset Offset of group to earliest: 
   bin/kafka-consumer-groups.sh --bootstrap-server localhost:9092 --group covnia_queue_processing_group --reset-offsets --to-earliest --execute

Reset Offset of group to latest: 
   bin/kafka-consumer-groups.sh --bootstrap-server localhost:9092 --group covnia_record_streams_group --reset-offsets --to-latest --execute


To view all events in a topic parse
	bin/kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic ocmp-consent-validator.reply --from-beginning

Create Topic:
	kafka-topics.sh --bootstrap-server localhost:9092 --topic test_delete_topic --create --partitions 1 --replication-factor 1


 Delete Topic:
	kafka-topics.sh --bootstrap-server localhost:9092 --delete --topic test_delete_topic

How to produce a message to kafka
echo '{ "accountId": "ll", "channel": "waba", "entityName": "150", "tempCategory": "marketing", "noOfMessages": 2, "rateVersion": "0" }' | ./kafka-console-producer.sh --topic ocmp-wallet-refund-amount --bootstrap-server localhost:9092


echo '{ "trackId": "1", "accountId": "ll", "channel": "waba", "entityName": "150", "tempCategory": "marketing", "noOfMessages": 1}' | ./kafka-console-producer.sh --topic ocmp-wallet-debit-large-amount --bootstrap-server localhost:9092


