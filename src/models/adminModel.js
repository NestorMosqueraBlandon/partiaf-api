import mongoose from "mongoose";

const adminSchema = new mongoose.Schema(
  {
    name: { type: String },
    lastname: { type: String },
    identification: { type: Number },
    email: { type: String },
    password: { type: String },
    age: { type: Number },
    mobile: { type: Number },
    address: { type: String },
    image: { type: String },
    stores: [
      {
        name: { type: String },
        type: { type: String },
        nit: { type: Number },
        email: { type: String },
        password: { type: String },
        mobile: { type: Number },
        employes: { type: Number },
        address: { type: String },
        totalLimit: { type: Number },
        images: [
          {
            type: String
          }
        ],
        covers: [
          {
            name: { type: String },
            type: { type: String },
            price: { type: Number },
            date: { type: String },
            totalLimit: { type: String },
            hour: { type: String },
            description: { type: String },
            image: {type: String}
          },
        ],
    
        menus: [
          {
            title: { type: String },
            items: [
              {
                name: {type: String},
                price: {type: String},
                description: {type: String},
                amount: {type: Number},
                image: {type: String},
              },
            ],
          },
        ],
        buys: [
          {
            name: { type: String },
            items: [{
                amount: Number,
                name: String,
                price: Number
            }],
            total: {type: Number},
          },
        ],
        bookings: [
          {
            type: { type: String},
            peoples: { type: Number},
            day: { type: String},
            hour: {type: String},
            total: {type: Number},
          },
        ],
        chairs: [
          {
            type: { type: String },
            limit: { type: Number },
            price: { type: Number },
            amount: { type: Number },
            reserved: { type: Number },
          }
        ],
        comments: [
          {
            text: {type: String},
            photo: { type: String },
            createdAt: { type: Date, default: Date.now() },
          }
        ]
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Admin = mongoose.model("Admin", adminSchema);
export default Admin;
