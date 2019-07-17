const express = require('express');
const app = express();

app.get('/api/timestamp/:date_string', function(req,res) {
  let paramDate = req.params.date_string;
  console.log(paramDate);
  res.send({"unix":strDate, "utc":})
})



//process.env.PROJECT_URL
//process.env.API_ENDPOINT