# RabbitMQTestSample
This is only test and it does not use for further target

# At first, I installed RabbitMQ from docker
# latest RabbitMQ 3.12
docker run -it --rm --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3.12-management
# Second we have been configure the RabbitMQ as below
At this point, you have successfully created an exchange and a queue in RabbitMQ and bound them together. This setup is crucial for routing messages correctly within your system. Next, we will look into implementing producers that will send messages to your RabbitMQ exchange.

