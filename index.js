var express         = require('express');
var app             = express();
var bodyParser      = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function(req, res) {
    res.json({success: true});
});

app.listen(port);
