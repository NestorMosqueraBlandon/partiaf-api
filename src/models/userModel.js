import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: { type: String },
    lastname: {type: String},
    username: { type: String },
    identification: { type: Number }, 
    email: { type: String },
    password: { type: String },
    age: { type: Number },
    balance: { type: Number },
    mobile: { type: Number },
    address: { type: String },
    image: {type: String},
    gender: {type: String},
    events: {type: Number},
    wishlist: [{store: String}],
    followers: [{store: String}],
    following: [{store: String}],

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
