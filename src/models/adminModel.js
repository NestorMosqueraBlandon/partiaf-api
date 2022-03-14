import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema(
  {
    name: { type: String },
    lastname: {type: String},
    identification: { type: Number }, 
    email: { type: String },
    password: { type: String },
    age: { type: Number },
    mobile: { type: Number },
    address: { type: String },
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
        covers: [{
          name: {type: String},
          type: {type: String},
          price: {type: Number},
          date: {type: String},
          totalLimit: {type: String},
          hour: {type: String},
          description: {type: String},

        }]
      }
    ]
  },
  {
    timestamps: true,
  }
);

const Admin = mongoose.model(
  'Admin',
  adminSchema
);

export default Admin;