const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
dotenv.config({ path: "./config.env" });

const app = express();

// set view engine
app.set("view engine", "ejs");

// set views folder explicitly (optional but good practice)
app.set("Views", path.join(__dirname, "Views"));

// serve static files (css, js, images) from public folder
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.render("index"); // looks for views/index.ejs
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/services", (req, res) => {
  res.render("services");
});


app.get("/contact", (req, res) => {
  res.render("contact");
});



app.listen(PORT, () => {
 console.log(`Server running on http://localhost:${PORT}`);
});
  