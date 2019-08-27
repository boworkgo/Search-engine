var express = require("express");
var cors = require("cors");
var app = express();
var scholar = require("google-scholar");
var fileUpload = require("express-fileupload");
const port = 5000;

app.use(cors());
app.use(fileUpload());

app.listen(port, () => {
  console.log("Server up!");
});

app.post("/upload", function(req, res) {
  if (!req.files) {
    res.send("File not found");
    return;
  }
  var file = req.files.code;
  var path = "tmp/" + file.name;
  file.mv(path, e => {
    if (e) {
      return res.status(500).send(e);
    }
  });
  res.redirect("/privatecode");
});

app.get("/googlescholar_backend/:query", (req, res) => {
  var query = String(req.params.query);
  scholar
    .search(query)
    .then(data => res.send(data))
    .catch(err => console.log(err));
});

function execute(command) {
  var execSync = require("child_process").execSync;
  return execSync(command, { encoding: "utf-8" });
}

app.get("/execute/:query", (req, res) => {
  var query = decodeURI(req.params.query);
  query = "cd tmp; grep -r '" + query + "' .";
  res.send(String(execute(query)));
});
