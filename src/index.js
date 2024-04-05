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

app.get('/info', (req, res) => {
  res.render('info', { headerColor: 'info', textColor: 'black' });
});

app.get('/nang_exhibition', (req, res) => {
  res.locals.headerColor = true;
  res.render('nang_exhibition')
})

app.get('/soi_exhibition', (req, res) => {
  res.render('soi_exhibition');
});

app.get('/tan', (req, res) => {
  res.render('tan')
})

app.get('/1412store', (req, res) => {
  res.render('1412store')
})

app.get('/linh', (req, res) => {
  res.render('linh');
});

app.get('/bunnie', (req, res) => {
  res.render('bunnie');
});

app.get('/', (req, res) => {
  res.render('home', { headerColor: 'home', textColor: 'black' });
})

// // Route init
// route(app);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})