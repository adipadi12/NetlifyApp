const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
    const { bet } = req.body;
    
    if (!bet || bet <= 0) {
        return res.status(400).json({ error: "Invalid bet amount" });
    }

    const roll = Math.floor(Math.random() * 6) + 1;
    const win = roll >= 4;
    const newBalance = win ? bet * 2 : -bet; 

    res.json({ roll, win, newBalance });
});

module.exports = router;
