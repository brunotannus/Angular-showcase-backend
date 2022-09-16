const express = require('express');
const app = express(),
      bodyParser = require("body-parser");
      port = 8000;

const history = [];
const bookmarks = [];

app.use(bodyParser.json());
app.use(express.static(process.cwd()+"/../relieftest-frontend/dist/front-end/"));

app.get('/api/history', (req, res) => {
  res.json(history);
  console.log("get history");
  console.log(history);
});

app.post('/api/historyItem', (req, res) => {
  const historyItem = req.body.historyItem;
  history.push(historyItem);
  res.json("historyItem added");
});

app.delete('/api/bookmark', (req, res) => {
  const bookmark = req.body.bookmark;
  const index = bookmarks.indexOf(bookmark);
  bookmarks.splice(index, 1);
  res.json("bookmark deleted");
});

app.get('/api/bookmarks', (req, res) => {
  res.json(bookmarks);
  
});

app.post('/api/bookmark', (req, res) => {
  const bookmark = req.body.bookmark;
  bookmarks.push(bookmark);
  res.json("bookmark added");
});

app.get('/', (req,res) => {
  res.sendFile(process.cwd()+"/../relieftest-frontend/dist/front-end/index.html")
});


app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});