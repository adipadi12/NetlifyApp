const express = require('express');
const crypto = require('crypto');
const router = express.Router();

let balance = 1000;

router.post('/', (req, res) => {
  const { bet } = req.body;

  if (bet > balance) {
    return res.status(400).json({ message: 'Not enough balance!' });
  }

  const roll = Math.floor(Math.random() * 6) + 1;
  const hash = crypto.createHash('sha256').update(roll.toString()).digest('hex');

  let win = false;
  if (roll >= 4) {
    balance += bet;
    win = true;
  } else {
    balance -= bet;
  }

  res.json({
    roll,
    hash,
    win,
    balance,
  });
});

module.exports = router;
