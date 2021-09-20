// variables
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const router = express.Router();
const port = 8000;


// archivos estaticos (css)
app.use(express.static('public'));

/*template engine*/
app.use(expressLayouts);
app.set('view engine', 'ejs'),
app.set('layout', './layouts/layout');
/*template engine*/

// traigo el archivo indexRoute

const indexRoute = require('./routes/indexRoute');
const countryRoute = require('./routes/countryRoute');

app.use('/', indexRoute)
app.use('/:id', countryRoute)

app.listen(port, () => {
    console.log('example')
})