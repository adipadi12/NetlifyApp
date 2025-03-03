import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [bet, setBet] = useState(100);
  const [balance, setBalance] = useState(1000);
  const [result, setResult] = useState(null);

  const rollDice = async () => {
    try {
      const response = await axios.post("http://localhost:5000/roll-dice", { bet });
      setBalance(response.data.balance);
      setResult(`Rolled: ${response.data.roll} | ${response.data.win ? "You Win!" : "You Lose!"}`);
    } catch (error) {
      console.error(error);
      setResult("Error rolling dice.");
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "50px", background: "#121212", color: "#fff" }}>
      <h1>Provably Fair Dice Game 🎲</h1>
      <p>Balance: ${balance}</p>
      <input
        type="number"
        value={bet}
        onChange={(e) => setBet(Number(e.target.value))}
        style={{ padding: "10px", fontSize: "16px" }}
      />
      <button onClick={rollDice} style={{ marginLeft: "10px", padding: "10px", fontSize: "16px" }}>
        Roll Dice 🎲
      </button>
      <p>{result}</p>
    </div>
  );
}
