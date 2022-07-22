const express = require("express");


const router = require("./userRoutes");
const app = express();
const port = 2001;

app.set("view engine", "ejs");
app.use("/", router);
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

