const express = require("express")
const router = express.Router()
const path = require("path")

router.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'login.html'));
});

router.post('/login', (req, res) => {
  const username = req.body.username;
  if (username) {
    res.redirect(`/?username=${username}`);
  } else {
    res.send('Username is required');
  }
});

module.exports = router