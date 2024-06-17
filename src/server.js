const path = require("path");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const publicDirPath = express.static(path.join(__dirname, "../public"));
app.use(publicDirPath);
app.use(express.urlencoded({ extended: true }));

app.get("", (req, res) => {
  res.render("index");
});

app.get("/hxworked", (req, res) => {
  res.send(`<h1 class="working">If this text is centered HTMX worked</h1>`);
});

app.listen(PORT, () => {
  console.log(`Server is up on http://localhost:${PORT}`);
});
