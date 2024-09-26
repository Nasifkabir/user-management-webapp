// models/userModel.js
const db = require('../config/db');

const User = {
  create: (userData, callback) => {
    const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
    db.query(query, [userData.name, userData.email, userData.password], callback);
  },

  findByEmail: (email, callback) => {
    const query = 'SELECT * FROM users WHERE email = ?';
    db.query(query, [email], (err, result) => {
      if (err) return callback(err);
      callback(null, result);
    });
  },

  updateStatus: (id, status, callback) => {
    const query = 'UPDATE users SET status = ? WHERE id = ?';
    db.query(query, [status, id], callback);
  },

  updateLastLogin: (id, callback) => {
    const query = 'UPDATE users SET last_login_time = NOW() WHERE id = ?';
    db.query(query, [id], callback);
  },

  delete: (id, callback) => {
    const query = 'DELETE FROM users WHERE id = ?';
    db.query(query, [id], callback);
  }
};

module.exports = User;
