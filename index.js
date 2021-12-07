const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = 8000;

app.get("/", (req, res) => {
  res.json({
    msg: "Hello API",
    error: false,
  });
});

app.listen(PORT, () => {
  console.log(`Server up on ${PORT}`);
});
