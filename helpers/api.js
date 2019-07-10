const client = require("gw2api-client");
const cacheMemory = require("gw2api-client/src/cache/memory");

module.exports = api = client().cacheStorage(cacheMemory());
