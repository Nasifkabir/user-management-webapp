// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const { register, login, blockUser, unblockUser, deleteUser } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/register', register);
router.post('/login', login);
router.put('/block/:id', authMiddleware, blockUser);
router.put('/unblock/:id', authMiddleware, unblockUser);
router.delete('/delete/:id', authMiddleware, deleteUser);

module.exports = router;
