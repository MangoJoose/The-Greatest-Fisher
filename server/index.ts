import express from 'express';
import path from 'path';


const app = express();
const port = 3000;

// Handlebars
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// React
app.use(express.static(path.join(__dirname, '../client/build')));

// API Route
app.get('/api/hello', (req, res) => {

    res.json({ message: 'Hello !!'});

});

// Server rendered route
app.get('/login', (req, res) => {

    res.render('login', { title: 'Login Page' });

});

// Fallback
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});