const amqp = require('amqplib');

async function sendToQueue(message) {
  const connection = await amqp.connect('amqp://localhost'); // Connect to RabbitMQ server
  const channel = await connection.createChannel(); // Create a channel

  const exchange = 'rabbitmqtest';
  const routingKey = 'my_routing_key';

  await channel.assertExchange(exchange, 'direct', { durable: true }); // Declare an exchange
  channel.publish(exchange, routingKey, Buffer.from(message)); // Publish a message

  setTimeout(() => {
    channel.close(); // Close the channel
    connection.close(); // Close the connection
  }, 500);
}

sendToQueue('Hello World!');
