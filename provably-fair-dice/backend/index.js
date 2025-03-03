const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post("/roll-dice", (req, res) => {
    const { bet } = req.body;
    const roll = Math.floor(Math.random() * 6) + 1;
    const win = roll >= 4;
    res.json({ roll, win, newBalance: win ? bet * 2 : bet });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
