const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const path = require("path");

require("dotenv").config({
  path: path.join(process.cwd(), "/src/config/.env"),
});

const app = express();

app.use(express.json());

app.use("/api/v1/movie", require("./router/api/movie"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("../client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server listening on port ${PORT}`));
