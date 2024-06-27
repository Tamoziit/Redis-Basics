const client = require("./client");

async function init() {
    await client.lpush('messages', 1);
    await client.lpush('messages', 2);
    await client.lpush('messages', 3);
    await client.lpush('messages', 4);
    const res1 = await client.rpop("messages");
    const res2 = await client.blpop("messages", 50);
    console.log(res1, res2);
}

init();