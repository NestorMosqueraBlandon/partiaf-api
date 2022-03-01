import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: { type: String },
    type: { type: String },
    nit: { type: Number },
    email: { type: String },
    password: { type: String },
    mobile: { type: Number },
    employes: { type: Number },
    address: { type: String },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model(
  'User',
  userSchema
);

export default User;
