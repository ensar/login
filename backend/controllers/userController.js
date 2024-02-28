const pool = require('../utils/db');
const { hashToPassword, comparePassword } = require('../utils/hash');
const { createAccessToken, createRefreshToken } = require('../utils/token');

const getAllUsers = async (req, res) => {
  await pool.query('SELECT * FROM users', (err, result) => {
    if (err) {
      return res.status(500).json({ message: err });
    }

    res.status(200).json({ message: result });
  });
};

const signup = async (req, res) => {
  const { name, mail, password } = req.body;
  const user = await pool.query('SELECT * FROM users WHERE email=$1', [mail]);

  if (user.rows.length > 0) {
    return res.status(500).json({ message: 'Kullanıcı mevcut' });
  }

  await pool.query(
    'INSERT INTO users (name, email,password) VALUES ($1, $2,$3)',
    [name, mail, hashToPassword(password)],
    (err, result) => {
      if (err) {
        return res.status(500).json({ message: err });
      }
      res.status(201).json({ message: 'Kullanıcı eklendi.' });
    }
  );
};

const login = async (req, res) => {
  const { mail, password } = req.body;
  const user = await pool.query('SELECT * FROM users WHERE email=$1', [mail]);

  if (user.rows.length > 0) {
    if (comparePassword(password, user.rows[0].password)) {
      const accessToken = createAccessToken({ mail });
      const refreshToken = createRefreshToken({ mail });
      res.status(200).json({ message: { accessToken, refreshToken, mail } });
    } else {
      return res.status(500).json({ message: 'Şifre yanlış.' });
    }
  } else {
    return res.status(404).json({ message: 'Kullanıcı bulunamadı.' });
  }
};

module.exports = { signup, login, getAllUsers };
