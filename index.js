import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

const port = process.env.PORT || 4000;

app.listen(port);
