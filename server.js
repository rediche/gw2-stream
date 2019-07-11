const app = require("express")();
const port = process.env.PORT || 3000;

const routes = require("./api/routes");

// Set Content-Type to 'text/plain'
app.use(function(req, res, next) {
  res.header("Content-Type", "text/plain");
  next();
});

app.use("/", routes);

app.listen(port, () => console.log("Listening on port:", port));
