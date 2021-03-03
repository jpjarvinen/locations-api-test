const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
app.use(express.static("public"));
let customers = [
  { id: 1, name: "Jack" },
  { id: 2, name: "Tina" },
];

let database = [
  { id: 1, latitude: 60, longitude: 70 },
  { id: 2, latitude: 40, longitude: 80 },
];
var str = JSON.stringify(database, null, 2)

// HTTP GET http://localhost:8080/api/customers
app.get("/api/customers", (req, res) => {
  res.send(customers);
});

// HTTP GET http://localhost:8080/api/locations
app.get('/api/locations', function (req, res) {
  //res.json('fetch all locations')
  //res.json(database)
  res.type("application/json")
  res.send(str)
  //res.send(JSON.stringify(database, null, 2))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});