const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const shoeSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    price: {
      type: String,
    },
    info: {
      type: Date,
    },
    quantity: {
      type: String,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("shoe", shoeSchema);
