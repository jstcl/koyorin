"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const holodex_js_1 = require("holodex.js");
const holoClient = new holodex_js_1.HolodexApiClient({
    apiKey: process.env.HOLODEX_APIKEY,
});
exports.default = holoClient;
//# sourceMappingURL=Holodex.js.map