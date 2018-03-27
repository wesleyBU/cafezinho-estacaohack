const Express = require('express');
const Cors = require('cors');
const fs = require('fs');

let data;

const App = Express();
App.use(Cors());

App.get('/data/card.json', function (req, res) {
    data = require('./cards.json');
    res.send(data);
});

App.get('/1.mp3', function (req, res) {
    res.download('./1.mp3');
});
App.get('/gemidao.mp3', function (req, res) {
    res.download('./gemidao.mp3');
});
App.get('/vitas.mp3', function (req, res) {
    res.download('./vitas.mp3');
});
App.get('/quero-cafe.mp3', function (req, res) {
    res.download('./data/quero-cafe.mp3');
});
App.get('/harry-intro.mp3', function (req, res) {
    res.download('./data/harry-intro.mp3');
});
App.get('/toasty.mp3', function (req, res) {
    res.download('./data/toasty.mp3');
});

App.listen('3030', () => {
    console.log('Running server...');
});