const client = require("./client");

async function init() {
    await client.set('msg:4', "Hey from Node.js");
    await client.set('name', "Node.js");
    const res = await client.get("msg:4"); //get func. of redis
    await client.expire("name", 10); //expire cmd
    const res2 = await client.get("name"); //get func. of redis
    console.log("Result 1 --> ", res);
    console.log("Result 2--> ", res2)
}

init();