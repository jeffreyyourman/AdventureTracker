const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const pointSchema = new mongoose.Schema({
  typestamp: Number,
  coords: {
    latitude: Number,
    logitude: Number,
    altitude: Number,
    accuracy: Number,
    heading: Number,
    speed: Number
  }
});

const trackSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  name: {
    type: String,
    default: ""
  },
  locations: [pointSchema]
});

mongoose.model('Track', trackSchema);