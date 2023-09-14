import amqp from "amqplib";

connect();

async function connect() {
    try {
        const connection = await amqp.connect("amqp://localhost:5672");
        const channel = await connection.createChannel();
        const queueName = "jobs";

        channel.consume(queueName, message => {
            const input = JSON.parse(message.content.toString());
            console.log(`Received job with input ${input.number}`);
            if (input.number == 4) {
                channel.ack(message);
                // this will dequeue the message from the queue
            }
        });

        console.log("Waiting for messages...");
    } catch (error) {
        console.error(error);
    }
}