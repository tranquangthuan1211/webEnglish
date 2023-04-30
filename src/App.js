const path = require('path');
const handlebars = require('express-handlebars');
const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');
const app = express();
const port = 3000;
const route = require('./router');

app.use(express.urlencoded());
app.use(express.json());
app.use(cookieParser());

app.use(methodOverride('_method'));
//db connect
const db = require('./config/db');
db.connect();

//HTTP LOGGER
app.use(morgan('combined'));

//template engine

app.use(express.static(path.join(__dirname, 'public')));

//worried update

app.engine(
    'handlebars',
    handlebars.engine({
        extname: 'hbs',
    }),
);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resourses/view'));

route(app);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error/index.handlebars', {
            message: err.message,
            code: err.status,
        });
    });
}

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});
