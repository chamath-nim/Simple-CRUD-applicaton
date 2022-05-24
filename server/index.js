const express = require("express");
const app = express();
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "sql6094",
  database: "begood",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/get/", (req, res) => {
  const sqlSelect = "SELECT * FROM license_plate;";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

app.post("/api/insert/:plate_number", (req, res) => {
  const num = req.params.plate_number;

  const sqlInsert = "INSERT INTO license_plate (plate_number) VALUES (?);";

  db.query(sqlInsert, num, (err, result) => {
    console.log(result);
  });
  res.end();
});

app.delete("/api/delete/:plate_number", (req, res) => {
  const name = req.params.plate_number;
  const sqlDelete = "DELETE FROM license_plate WHERE plate_number = ?";
  db.query(sqlDelete, name, (err, result) => {
    if (err) console.log(err);
  });
});

app.put("/api/update/:plateNew/:plate_number", (req, res) => {
  const name = req.params.plateNew;
  const current = req.params.plate_number;
  console.log(name, current);
  const sqlUpdate =
    "UPDATE license_plate SET plate_number = ? WHERE plate_number = ?";
  db.query(sqlUpdate, [name, current], (err, result) => {
    if (err) console.log(err);
  });
});

app.listen(3001, () => {
  console.log("running on 3001");
});
