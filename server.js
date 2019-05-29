const express = require('express');
const app = express();
var rest=require('./test.js');
var hotel=require('./hotles.js');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
 // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => {
	
  res.send('Hello from App Engine!kk');
});

app.post('/sum', (req, res) => {
	
  res.send('kk11'+rest.getRestaurents());
});
app.get('/restaurents', (req, res) => {
	
  res.send(rest.getRestaurents());
});
app.get('/hotels', (req, res) => {
	
  res.send(hotel.getHotles());
});

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});