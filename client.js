const { Redis } = require('ioredis');

const client = new Redis(); //redis-client init

module.exports = client;