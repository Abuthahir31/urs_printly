// backend/models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    rating: { type: Number, default: 0 },
    reviews: { type: Number, default: 0 },
    tag: { type: String },
    description: { type: String },
    features: { type: [String], default: [] },
    images: { type: [String], default: [] },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      default: null,
    },
    subcategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      default: null,
    },
    customNameFields: [{
      label: { type: String, required: true },
      placeholder: { type: String, default: '' },
      maxLength: { type: Number, required: true, min: 1, max: 100 }
    }],
    allowCustomImage: { type: Boolean, default: false },
    productTypes: [{
      label: { type: String, required: true },
      additionalPrice: { type: Number, required: true, default: 0 }
    }],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Product', productSchema);