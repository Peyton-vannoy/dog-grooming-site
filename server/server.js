const express = require("express");

const app = express();
app.use(express.json());

const PORT = 5000;

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.post("/api/contact", (req, res) => {
  console.log("Received data:", req.body);

  res.send("Form received");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
