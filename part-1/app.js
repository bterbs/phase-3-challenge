const express = require('express');
const bodyParser = require('body-parser')
const app = express();

// bodyParser is middleware that allows us to handle POST requests
// tells express to take the req.body and parse into usable format
app.use(bodyParser.json());

app.get('/api/days/:day', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  const { day } = req.params;
  const daysOfWeek = {
    monday: 1, tuesday: 2, wednesday: 3, thursday: 4, friday: 5, saturday: 6, sunday: 7 };

  if (Object.keys(daysOfWeek).includes(day)) {
    res.status(200).send(`${daysOfWeek[day]}`);
  } else {
    res.status(500).send(`Hay, "${day}" is not a valid weekday`);
  }
});

app.post('/api/array/concat', (req, res) => {
  const arrayOne = req.body.array1;
  const arrayTwo = req.body.array2;
  const answer = arrayOne.concat(arrayTwo);
  res.status(200).json({
    results: answer,
  });
});

  const port = process.env.PORT || 3000
app.listen(port, () => { console.log(`server is listening on port: ${port}`); })
