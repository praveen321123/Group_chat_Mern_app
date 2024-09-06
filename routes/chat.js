const express = require("express")
const router = express.Router()
const path = require("path")
const fs = require("fs")

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

router.post('/send-message', (req, res) => {
  const { username, message } = req.body;
  const filePath = path.join(__dirname, '../messages', 'messages.json');
  let messages = [];
  
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath);
    messages = JSON.parse(data);
  }
  messages.push({ username, message });
  fs.writeFileSync(filePath, JSON.stringify(messages, null, 2));
  res.redirect(`/?username=${username}`);
});

router.get('/messages', (req, res) => {
  const filePath = path.join(__dirname, '../messages', 'messages.json');
  
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath);
    res.json(JSON.parse(data));
  } else {
    res.json([]);
  }
});

module.exports = router