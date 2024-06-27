//Speeding up data fetching using redis (Caching)
const express = require("express");
const axios = require("axios").default;
const client = require("./client");

const app = express();

app.get("/", async (req, res) => {
    const cacheValue = await client.get('todos'); //Querying in cache, if data is already present;
    if (cacheValue) return res.json(JSON.parse(cacheValue)); //early returning if cache is present

    //If cache not present
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos');
    await client.set("todos", JSON.stringify(data)); //Setting data in cache
    await client.expire("todos", 30); //Expiring the cache after 30s. (Best practice)
    return res.json(data);
})

app.listen(9000);


/**NB: By normal Axios fetching --> directly from API --> avg fetch time: 1400ms
       By Caching data --> avg fetch time: 6ms (after caching) [The initial call after the cache timeout has expired is >= fetch time for normal axios fetching, the eventual fetches wen data is in cache is much much faster].
*/