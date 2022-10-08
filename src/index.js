const path = require('path');
const express = require('express');
const hbs = require('express-handlebars');
const cookieParser = require('cookie-parser');

const indexRouter = require('./routes/index');
const blogRouter = require('./routes/blogRouter');
const commentRouter = require('./routes/commentRouter')
const app = express();
const port = 5000;

app.use(express.static(path.join(__dirname, 'public')));



app.engine('hbs', hbs.engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
  res.render('home');
})
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/blog', blogRouter)
app.use('/comment', commentRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

