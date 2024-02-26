const pool = require('../utils/db');
const bcryptjs = require('bcryptjs');
const { hashToPassword } = require('../utils/hash');

const getAllUsers = async (req, res) => {
  await pool.query('SELECT * FROM users', (err, result) => {
    if (err) {
      res.status(500).send(err);
    }

    res.status(200).json(result);
  });
};

const signup = async (req, res) => {
  const { name, mail, password } = req.body;
  const user = await pool.query('SELECT * FROM users WHERE email=$1', [mail]);

  if (user.rows.length > 0) {
    res.status(500).json('Kullanıcı mevcut');
    throw new Error('Kullanıcı mevcut');
  }

  await pool.query(
    'INSERT INTO users (name, email,password) VALUES ($1, $2,$3)',
    [name, mail, hashToPassword(password)],
    (err, result) => {
      if (err) {
        res.status(500).json(err);
        throw new Error(err);
      }
      res.status(201).json('Kullanıcı eklendi.');
    }
  );
};

const login = async (req, res) => {
  res.send('login');
};

module.exports = { signup, login, getAllUsers };
