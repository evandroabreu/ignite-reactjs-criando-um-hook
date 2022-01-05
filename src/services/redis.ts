import { createClient } from "redis";

type RedisClientType = ReturnType<typeof createClient>

const getConfig = () => {



    let config = {
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT
    };


    config = (!process.env.REDIS_PASSWORD) ? config : Object.assign({}, config, { password: process.env.REDIS_PASSWORD });

    return config;
};

export async function getRedis(): Promise<RedisClientType> {
    const host = process.env.REDIS_HOST;
    const port = process.env.REDIS_PORT;
    const pass = process.env.REDIS_PASSWORD;
    const user = process.env.REDIS_USER;
    let url;
    if (!pass) {
        url = `redis://${host}:${port}/8`;
    } else {
        url = `redis://${user}:${pass}@${host}:${port}/8`;
    }

    const redis: RedisClientType = createClient({ url });

    await redis.connect();

    return redis;
}