const client = require("./client");

async function init() {
    try {
        await client.xadd("mystream", "*", "name", "Bruyne");
        const res = await client.xread("STREAMS", "mystream", "0");
        console.log("Result --> ", res);
    } catch (error) {
        console.error("Error --> ", error);
    }
}

init();
