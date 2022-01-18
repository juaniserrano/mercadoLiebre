const express = require('express');
const path =  require('path');

const app = express();

const publicPath = path.resolve(__dirname + '/public');
const pathViews = path.resolve(__dirname + '/views');

app.use( express.static(publicPath));
app.use( express.static(pathViews));

app.listen(3000, () => {
    console.log('Levantando express')
})

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'))
});