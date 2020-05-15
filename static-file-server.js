
const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

const host = '127.0.0.1'
const port = 3000

router.get('', function(req,res){
	res.sendFile(path.join(__dirname + '/front.html'));
});

app.use(express.static(__dirname + '/'));
app.use('/', router);

app.listen(port, host, function() {
  console.log(`Server listens http://${host}:${port}`)
})

