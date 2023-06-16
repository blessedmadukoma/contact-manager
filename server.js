const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();

const app = express();

const port = process.env.PORT || 4001;

app
  .use(express.json())
  .use("/api/contacts", require("./routes/contactRoutes"))
  .use(errorHandler);
// app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));
