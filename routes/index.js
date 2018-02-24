let express = require('express');
let router = express.Router();
let client =require('twilio')('AC46a2f12f1ed65451c6a6*********','24bc58f81b5ae949fa761*********');

/* GET home page. */

router.get('/messenger', function (req, res) {
    client.messages.create({
        to: '+91**********',
        from:'+1**********',
        body:'Amartya calling Amartya'
    }, function (err, data) {
        if(err){
            console.log(err);
        }else{
            console.log(data);
        }
    });

    res.send('Successful')
});

router.get('/call', function (req, res) {
    client.calls.create({
        url: 'http://demo.twilio.com/docs/voice.xml',
        to: '+91**********',
        from:'+1**********',
        context:'Amartya calling Amartya'
    }, function (err, data) {
        if(err){
            console.log(err);
        }else{
            console.log(data);
        }
    });

    res.send('Successful')
});

router.post('/voice', (request, response) => {
    const twiml = new twilio.TwimlResponse();
    twiml.say('hello world!', { voice: 'alice' });

    response.type('text/xml');
    response.send(twiml.toString());
});

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
