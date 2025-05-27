import express from "express";
import cors from "cors";
import mysql from "mysql2";

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

const connection = await mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "seiza",
  port: 3306,
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to the MySQL database.");
});

app.get("/stock", (req, res) => {
  const query = "SELECT stock FROM stock_producto";
  connection.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching stock data:", err);
      return res.status(500).json({ error: "Database query failed" });
    }
    res.json(results);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
