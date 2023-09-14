# RabbitMQ-Node.js
This repository provides a Docker Compose configuration for setting up a RabbitMQ container, along with Node.js applications for sending and consuming messages.

## Create A Docker Contianer For RabbitMQ
### Prerequisites
* Docker: Install Docker on your machine. You can download it from the official Docker website: https://www.docker.com.

* Node.js: Install Node.js on your machine. You can download it from the official Node.js website: https://nodejs.org.

### Setup
1.Start the RabbitMQ container using Docker Compose:
```
docker compose up
```

2.Install the required Node.js dependencies for sending and consuming messages:
```
npm install
```

## Sending a Message

To send a message to the consumer, use the following command:
```
npm run publish <your_number>
```
Replace <your_number> with the desired number you want to send to the consumer.

## Consuming Messages

To start the consumer and receive messages, use the following command:
```
npm run consume
```
The consumer application will listen for messages from the RabbitMQ queue and display them in the console. You can modify the consumer.js file to customize the processing of received messages.

Make sure to change line 14 in consumer.js to receive an acknowledgment for the number you have sent from the publisher

## Cleanup

To stop the RabbitMQ container and remove it, use the following command:

```
docker compose dowm
```
This will stop the container and remove all associated resources.