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
  const { Name } = req.body;
  const sql = 'INSERT INTO user (Name) VALUES (?)';
  db.run(sql, [Name], function (err) {
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
