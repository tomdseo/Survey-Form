const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public"));
const server = app.listen(1337, () => console.log("suhhhhh dude 1337"));
const io = require('socket.io')(server);
var counter = 0;

io.on('connection', function(socket) { //..................................2
    socket.emit('greeting', {msg: 'Greetings, from server Node, brought to you by Sockets! -Server' }); //..........3
    socket.on('thankyou', function(data) { //........................7
        console.log(data.msg); //.......................8
    });
    socket.on("submit", function(data) {
        let num = Math.floor(Math.random() * 1000);
        let output = {
            num: num,
            data: data,
        };
        socket.emit('submit', output);
    })
});

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + "/static"));


app.get('/', (req, res) => {
    res.render('index');
});

app.post('/submit', (req, res) => {
    socket.on('posting_form', function(socket) {
        socket.emit('')
    })
});