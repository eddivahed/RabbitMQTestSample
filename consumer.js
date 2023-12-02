const amqp = require('amqplib');

async function startConsumer() {
  const connection = await amqp.connect('amqp://localhost');
  const channel = await connection.createChannel();

  const queue = 'rabbitmqqueuetest';

  const exchange = 'rabbitmqtest';
  const routingKey = 'my_routing_key';

  await channel.assertQueue(queue, { durable: true });
  await channel.bindQueue(queue, exchange, routingKey);
  console.log(`Waiting for messages in ${queue}. To exit press CTRL+C`);

  channel.consume(queue, (message) => {
    console.log("Received:", message.content.toString());
    channel.ack(message);
  }, { noAck: false });
}

startConsumer();
