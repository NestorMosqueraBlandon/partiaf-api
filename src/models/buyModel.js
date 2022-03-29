import mongoose from 'mongoose';

const buySchema = new mongoose.Schema(
  {
    name: { type: String },
    item: [{
        amount: Number,
        name: String,
        price: Number
    }],
    total: {type: Number},
  },
  {
    timestamps: true,
  }
);

const Buy = mongoose.model(
  'Buy',
  buySchema
);

export default Buy;
