const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 9000;

const app = express();

app.use(cors());

app.get('/api/get-stuff', (req, res) => {
    res.send({success: true, message: 'I live my life a quarter mile at a time'});
})

app.get('/', (req, res) => {
    res.send('<h1>Making pancakes makin bacon pancakes. Take some bacon and you put it in a pancake. Making pancakes making bacon pancakes. Bacon pancakes.</h1>');
});

app.listen(PORT, () => {
    console.log("Server running on PORT:" + PORT);
});
