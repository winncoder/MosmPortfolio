const express = require('express');
var morgan = require('morgan');
const path = require('path');
const hbs = require('express-handlebars');
const app = express();
const port = 4040;

// const route = require('./routes');

app.use(morgan('combined'))

// Use static file
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true })); //milddeware xử lý dữ liệu từ clien gửi đên controller
app.use(express.json());

// Template engine
app.engine('hbs', hbs.engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));
console.log(path.join(__dirname, 'resources/views'))

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/info', (req, res) => {
  res.render('info')
})

app.get('/nang_exhibition', (req, res) => {
  res.render('nang_exhibition')
})

app.get('/1412store', (req, res) => {
  res.render('1412store')
})
// // Route init
// route(app);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})