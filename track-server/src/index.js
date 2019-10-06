require('./models/User');
require('./models/Track')

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const authRoutes = require("./routes/authRoutes");
const trackRoutes = require("./routes/trackRoutes");

const requireAuth = require('./middlewares/requireAuth');

const mongoUri =
"mongodb://admin:password1@ds229108.mlab.com:29108/rn-course-tracker";


const app = express();

app.use(bodyParser.json())
app.use(authRoutes);
app.use(trackRoutes);


mongoose.connect(mongoUri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true
});
mongoose.connection.on("connected", () => {
  console.log("connected to mongo instance.");
});

mongoose.connection.on("error", err => {
  console.error("Error Connecting to mongo", err);
});

app.get("/", requireAuth, (req, res) => {
  res.send(`your email: ${req.user.email}`);
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
