const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./config/dbConnection");
const dotenv = require("dotenv").config();

connectDB();

const app = express();

const port = process.env.PORT || 4001;

app
  .use(express.json())
  .use(errorHandler)
  .use("/api/contacts", require("./routes/contactRoutes"))
  .use("/api/users", require("./routes/userRoutes"));
// app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));
