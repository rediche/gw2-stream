const app = require("express")();
const port = process.env.PORT || 3000;

const routes = require("./api/routes");

// Set Content-Type to 'text/plain'
app.use((req, res, next) => {
  res.header("Content-Type", "text/plain");
  next();
});

// Always check if a token is passed.
// TODO: Might need to be changed to only have some endpoints require a token.
app.use((req, res, next) => {
  if (!req.query.token) {
    res.end("No API token provided.");
  }

  next();
});

app.use("/", routes);

app.listen(port, () => console.log("Listening on port:", port));
