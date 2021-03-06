import Admin from "../models/adminModel.js";
import User from "../models/userModel.js";
import { generateToken } from "../utils/utils.js";

export const createUser = async (req, res) => {
  
  const user = new User({...req.body.user, events: 0, balance: 100000, followers: [], following: []});
  const createdUser = await user.save();

  console.log("LO QUE ENVIO", createdUser)
  res.status(201).send({
    name: createdUser.name,
    lastname: createdUser.lastname,
    email: createdUser.email,
    username: createdUser.username,
    mobile: createdUser.mobile,
    balance: createdUser.balance,
    image: createdUser.image,
    password: createdUser.password,
    events: 0,
    wishlist: createdUser.wishlist,
    followers: createdUser.followers,
    following: createdUser.following,
    token: generateToken(user),
  });
};

export const updateAdmin = async (req, res) => {
  console.log(req.body)

  const admin = await Admin.findOne(req.body.email);
  

    admin.name = req.body.name,
    admin.lastname = req.body.lastname,
    admin.identification = req.body.identification,
    admin.email = req.body.email,
    admin.password = req.body.password,
    admin.age = req.body.age,
    admin.mobile = req.body.mobile,
    admin.address = req.body.address,
    admin.image = req.body.image

  const updatedAdmin = await admin.save();

  res.send({
    _id: updatedAdmin._id,
    name: updatedAdmin.name,
    lastname: updatedAdmin.lastname,
    password: updatedAdmin.password,
    identification: updatedAdmin.identification,
    email: updatedAdmin.email,
    age: updatedAdmin.age,
    mobile: updatedAdmin.mobile,
    address: updatedAdmin.address,
    image: updatedAdmin.image,
    token: generateToken(admin),
  });
};

export const findOneUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  
  if(!user){
    throw new Error("NO se puede cargar el usuario")
  }
  if(user){
    res.send(user);
  }
};

export const addToWishlist = async (req, res) => {
  const user = await User.findById(req.body.id);

  if(user){
    user.wishlist.unshift({store: req.body.store});
    user.save();
  }
   res.send(user);
}

export const findWishlist = async (req, res) => {
  const user = await User.findById(req.body.id);

  if(user){
    const wishlist = await user.wishlist;
    user.save();
  }
   res.send(user);
}


export const signin = async (req, res) => {
  console.log(req.body)
  const user = await User.findOne({ username: req.body.username });
  
  console.log(user)
  
  if (user) {
    if (req.body.password == user.password) {
      res.send({
        _id: user._id,
        name: user.name,
        lastname: user.lastname,
        username: user.username,
        email: user.email,
        balance: user.balance,
        mobile: user.mobile,
        image: user.image,
        token: generateToken(user),
        events: user.events,
        wishlist: user.wishlist || [],
        followers: user.followers || [],
        following: user.following || [],
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
