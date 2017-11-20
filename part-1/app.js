const express = require('express');
const bodyParser = require('body-parser')
const app = express();

// bodyParser is middleware that allows us to handle POST requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/days/:day', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  const dayId = req.params.day;
  const days = {
    monday: 1, tuesday: 2, wednesday: 3, thursday: 4, friday: 5, saturday: 6, sunday: 7 };

  if (Object.keys(days).includes(dayId)) {
    res.status(200).send(`${days[dayId]}`);
  } else {
    res.status(500).send(`Hay, "${dayId}" is not a valid weekday`);
  }
});

app.post('/api/array/concat', (req, res) => {
  const arrOne = req.body['array1'];
  const arrTwo = req.body['array2']
})

app.listen(3000, () => { console.log('server listening on port 3000...'); })
