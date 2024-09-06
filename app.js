const express = require('express');
const path = require("path")
const bodyParser = require('body-parser');
const messageRoutes = require("./routes/chat")
const loginRoutes = require("./routes/login")

const app = express();
const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(loginRoutes)
app.use(messageRoutes)

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
