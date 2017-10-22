const path = require('path');

var express = require('express');
var app = express();

// Serve Static Content
app.use(express.static(__dirname + '/dist'));

    app.get('/*', function (request, response, next) {
            response.sendFile(path.join(__dirname + '/dist/index.html'));
    });

app.listen(9000, () => {
    console.log('Server listening to 9000 port.');
});
