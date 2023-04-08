const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const api = express();
const port = 4000;

api.use(express.json());
api.use(cors());

const path = require('path');
const dbPath = path.resolve(__dirname, '../src/API/database/expense_data.db');
const db = new sqlite3.Database(dbPath);

api.get('/api/users', (req, res) => {
  const sql = 'SELECT * FROM user';
  db.all(sql, [], (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send(err);
    } else {
      res.send(rows);
    }
  });
});

api.post('/api/users', (req, res) => {
  const { Name, Email, Password } = req.body;
  const sql = 'INSERT INTO user (Name, Email, Password) VALUES (?, ?, ?)';
  db.run(sql, [Name, Email, Password], function (err) {
    if (err) {
      console.error(err);
      res.status(500).send(err);
    } else {
      res.send({ id: this.lastID });
    }
  });
});

api.get('/api/cars', (req, res) => {
  const sql = 'SELECT * FROM car';
  db.all(sql, [], (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send(err);
    } else {
      res.send(rows);
    }
  });
});

api.post('/api/cars', (req, res) => {
  const { UID, Manufacturer, Model, Tank, Battery, Is_Electric } = req.body;
  const sql = 'INSERT INTO car (UID, Manufacturer, Model, Tank, Battery, Is_Electric) VALUES (?, ?, ?, ?, ?, ?)';
  db.run(sql, [UID, Manufacturer, Model, Tank, Battery, Is_Electric], function (err) {
    if (err) {
      console.error(err);
      res.status(500).send(err);
    } else {
      res.send({ id: this.lastID });
    }
  });
});

api.get('/api/mileage_prices', (req, res) => {
  const sql = 'SELECT * FROM prices';
  db.all(sql, [], (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send(err);
    } else {
      res.send(rows);
    }
  });
});

api.post('/api/mileage_prices', (req, res) => {
  const { CID, Total_filled, Total_price, Total_distance } = req.body;
  const sql = 'INSERT INTO prices (CID, Total_filled, Total_price, Total_distance) VALUES (?, ?, ?, ?)';
  db.run(sql, [CID, Total_filled, Total_price, Total_distance], function (err) {
    if (err) {
      console.error(err);
      res.status(500).send(err);
    } else {
      res.send({ id: this.lastID });
    }
  });
});


api.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
