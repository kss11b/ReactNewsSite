const express = require("express");
const os = require("os");
const app = express();
const ejs = require('ejs')
const apiRouter = express.Router()
const request = require('request-promise')

const techUrl = 'https://newsapi.org/v1/articles?source=hacker-news&sortBy=latest&apiKey=f76904152bf944798a8a79a3be817402'
app.use(express.static("dist"));

app.get("/api/getUsername", (req, res) =>
  res.send({ username: os.userInfo().username })
);

app.get("/api/getArticles", (req, res) =>
request({
  "method":"GET",
  "uri": techUrl,
  "json": true,
  // "headers": {
  //   "User-Agent": "My little demo app"
  // }
}).then(response => {console.log(response, 'response'); return res.send(response)})
);

app.get("/api/getTechArticles", (req, res) =>
request({
  "method":"GET",
  "uri": techUrl,
  "json": true,
  // "headers": {
  //   "User-Agent": "My little demo app"
  // }
}).then(response => {console.log(response, 'response aaaaa'); return res.send(response)})
);

app.get("/", (req, res) =>
  res.render('index', {})
);

app.all('/*', (req, res) => {
  res.render('index', {});
});


app.use('/public', express.static('public'));

app.engine('html', ejs.renderFile);
app.set('view engine', 'html');
app.set('views', `${__dirname}/public`);

app.use('/api', apiRouter);


app.listen(8080, () => console.log("Listening on port 8080!"));
