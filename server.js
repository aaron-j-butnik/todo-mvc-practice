const express = require("express");
const app = express();
const connectDB = require("./config/database");
const homeRoutes = require("./routes/home");
const todosRoutes = require("./routes/todos");

require("dotenv").config({ path: "./config/.env" });

connectDB();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", homeRoutes);
app.use("/todos", todosRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
