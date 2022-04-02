import Admin from "../models/adminModel.js";
import { generateToken } from "../utils/utils.js";

export const createAdmin = async (req, res) => {
  console.log(req.body)
  const admin = new Admin({
    name: req.body.name,
    lastname: req.body.lastname,
    identification: req.body.identification,
    email: req.body.email,
    password: req.body.password,
    age: req.body.age,
    mobile: req.body.mobile,
    address: req.body.address,
    image: req.body.image
  });
  const createdAdmin = await admin.save();

  res.send({
    _id: createdAdmin._id,
    name: createdAdmin.name,
    lastname: createdAdmin.lastname,
    password: createdAdmin.password,
    identification: createdAdmin.identification,
    email: createdAdmin.email,
    age: createdAdmin.age,
    mobile: createdAdmin.mobile,
    address: createdAdmin.address,
    image: createdAdmin.image,
    token: generateToken(admin),
  });
};

export const findOneAdmin = async (req, red) => {
  const admin = await Admin.findById(req.params.id);
  res.json({
    message: "Admin were deleted successsfully",
  });
};

export const signin = async (req, res) => {
  const admin = await Admin.findOne({ email: req.body.email });
  console.log(admin);
  if (admin) {
    if (req.body.password == admin.password) {
      res.send({
        _id: admin._id,
        name: admin.name,
        lastname: admin.lastname,
        identification: admin.identification,
        email: admin.email,
        age: admin.age,
        mobile: admin.mobile,
        address: admin.address,
        stores: admin.stores,
        token: generateToken(admin),
      });
      return;
    } else {
      res.status(500).json({
        message: "Password incorrect",
      });
    }
  } else {
    res.status(500).json({
      message: "User dont exits",
    });
  }
};

// export const singup = async (req, res) => {
//   try {
//     const admin = new Admin({
//       name: req.body.name,
//       username: req.body.username,
//       password: req.body.password,
//     });

//     const createdAdmin = await admin.save();
//     res.send({
//       _id: createdAdmin._id,
//       name: createdAdmin.name,
//       username: createdAdmin.username,
//       password: createdAdmin.password,
//       image: createdAdmin.image,
//       token: generateToken(createdAdmin),
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };
