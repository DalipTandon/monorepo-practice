const express = require("express");
const app = express();

app.get("/healtcheck", (req:any, res:any) => {
  res.send("OK");
});