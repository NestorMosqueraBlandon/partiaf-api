import mongoose from 'mongoose';

const menuSchema = new mongoose.Schema(
  {
    title: { type: String },
    items: [
        {
            name: String,
            price: String,
            image: String,
        }
    ],
    image: {type: String}
  },
  {
    timestamps: true,
  }
);

const Menu = mongoose.model(
  'Menu',
  menuSchema
);

export default Menu;
