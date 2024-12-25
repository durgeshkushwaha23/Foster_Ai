import Redis from "ioredis";

const redisClient  = new Redis({
    port: process.env.REDIS_PORT,
    host: process.env.REDIS_HOST,
    password: process.env.REDIS_PASSWORD
});


redisClient.on('Connect', () => {
    console.log('Connected to Redis');
});

export default redisClient;