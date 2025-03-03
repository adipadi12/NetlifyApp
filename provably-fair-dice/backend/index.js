const express = require('express');
const cors = require('cors');
const diceRoutes = require('./routes/dice');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/roll-dice', diceRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
