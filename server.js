const express = require('express');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(__dirname)); // index.html sunumu

app.post('/log', (req, res) => {
  const logData = req.body;
  const logLine = JSON.stringify(logData) + '\n';
  fs.appendFileSync('dedectico_logs.txt', logLine);
  res.status(200).send('Veri kaydedildi.');
});

app.listen(port, () => {
  console.log(`Dedectico GPS + IP sistemi ${port} portunda çalışıyor.`);
});