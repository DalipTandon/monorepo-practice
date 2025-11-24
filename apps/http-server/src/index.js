"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
app.get("/healtcheck", (req, res) => {
    res.send("OK");
});
//# sourceMappingURL=index.js.map