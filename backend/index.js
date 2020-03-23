const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.json({
    Eoq: "eoq",
    Bruxao: "e nois que voa"
  });
});

app.listen(3333);
