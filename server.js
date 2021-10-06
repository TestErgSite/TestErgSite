const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();
const ctrlTelegram = require('./telegramMsg');
const bodyParser = require('body-parser');

//site path requests
app.use(express.static(path.join(__dirname, "/build")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const endpoints = ["/", "/platform", "/study-page", "what-is-ergonza", "methodology", "team"];

endpoints.forEach((endpoint) => {
  app.get(endpoint, (req, res) => {
    res.sendFile(path.join(__dirname + "/build/index.html"));
  });
});
//telegram request
app.post('/telegram', ctrlTelegram.sendMsg); 
//wrong endpoint
app.use(function (req, res, next) {
    res.redirect("/", 302);
  });

const port = process.env.PORT || 80;
app.listen(port);
