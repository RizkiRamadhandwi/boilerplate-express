require('dotenv').config();
let express = require('express');
let app = express();
let bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extanded: false}));

app.use(bodyParser.json());

console.log("Hello World");

app.get('/now', (req, res, next) => {
    req.time = new Date().toString();
    next();
}, (req, res) => {
    res.send({time: req.time});
}
)

app.get('/name', (req, res) => {
    let firstname = req.query.first;
    let lastname = req.query.last;

    res.json({
        name : `${firstname} ${lastname}`
    })
})

app.post('/name', (req, res) => {
    let qwe = req.body.first + ' ' + req.body.last;

    res.json({
        name: `${qwe}`
    })
})
 
app.get('/:word/echo', (req, res) => {
    const {word} = req.params;
    res.json({
        echo: word
    })
})

app.use((req, res, next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`)
    next();
});

app.get('/', (req, res) => {
    res.sendFile(absolutePath = __dirname + '/views/index.html') 
});

app.use('/public', 
express.static(__dirname + '/public')
);

app.get('/json', (req, res) => {
if (process.env.MESSAGE_STYLE == 'uppercase'){
    res.json({"message": "HELLO JSON"})
} else {
    res.json({"message": "Hello json"})
}});



































 module.exports = app;
