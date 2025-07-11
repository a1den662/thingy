const express = require('express');
const { run } = require('node:test');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/about.html');
  });
app.get("/contact", (req, res) => {
  res.sendFile(__dirname + "/contact.html");
  });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
