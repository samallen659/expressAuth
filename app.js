const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();

const PORT = 3001;

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.use(expressLayouts);

app.get('/', (req, res) => {
	res.render('index', { title: 'Express Auth' });
});

app.listen(PORT, (req, res) => {
	console.log(`Server listening on port: ${PORT}`);
});
