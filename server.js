const express = require('express');
const app = express();

const Datastore = require('nedb');
const database = new Datastore('messages.db');
database.loadDatabase()

app.use(express.static('public'));
app.use(express.json({limit: '1mb'}));

app.get('/get_msg', (req, res) => {
    database.find({}, (err, data) => {
        if ( err ) {
            console.log( err );
            res.sendStatus(500).end();
            return;
        }
        res.send( data );
    })
})

app.post('/send_msg', (req, res) => {
    database.insert(req.body);
    res.sendStatus(200);
});

app.listen(8080);