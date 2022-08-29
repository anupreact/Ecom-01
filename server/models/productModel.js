const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: { type: String, require },
    image: { type: String, require },
    description: { type: String, require },
    price: { type: Number, require },
    category: { type: String },
  },
  {
    timestamps: true,
  }
);

const productModel = mongoose.model("products", productSchema);

module.exports = productModel;
