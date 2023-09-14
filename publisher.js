import amqp from "amqplib";

const msg = { number: process.argv[2] };

connect();

async function connect() {
    try {
        const connection = await amqp.connect("amqp://localhost:5672");
        const channel = await connection.createChannel();
        const queueName = "jobs";
        const result = await channel.assertQueue(queueName);
        channel.sendToQueue(queueName, Buffer.from(JSON.stringify(msg)));
        console.log(`Job sent successfully ${msg.number}`);

    } catch (error) {
        console.error(error);
    }
}