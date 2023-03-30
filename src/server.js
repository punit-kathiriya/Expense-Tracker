const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

const db = new sqlite3.Database('./data.db');

app.get('/api/data', (req, res) => {
  const sql = 'SELECT * FROM data';
  db.all(sql, [], (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send(err);
    } else {
      res.send(rows);
    }
  });
});

app.post('/api/data', (req, res) => {
  const { name, value } = req.body;
  const sql = 'INSERT INTO data (name, value) VALUES (?, ?)';
  db.run(sql, [name, value], function (err) {
    if (err) {
      console.error(err);
      res.status(500).send(err);
    } else {
      res.send({ id: this.lastID });
    }
  });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
