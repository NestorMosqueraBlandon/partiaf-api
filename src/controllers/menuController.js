import Menu from "../models/menuModel.js";

export const create = async (req, res) => {
    
    const menu = new Menu({
      name: req.body.name,
      lastname: req.body.lastname,
      identification: req.body.identification,
      email: req.body.email,
      password: req.body.password,
      age: req.body.age,
      mobile: req.body.mobile,
      address: req.body.address,
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
      token: generateToken(admin),
    });
  };
  

export const getAll = async(req, res) => {
    const menus = await Menu.find({});
    console.log(menus)
    if(menus){
        res.send(menus);
    }
}


// export const delete = async (req, res) => {

//     console.log(req.query)

//     const admin = await Admin.findOne({email:req.query.email})

//     const storeId = admin.stores.findIndex((s) => s._id == req.query.storeId)
    
//     const coverId = admin.stores[storeId].bookings.findIndex((s) => s._id == req.params.id);

//     const store = admin.stores[storeId].bookings.splice(coverId, 1);

//     await admin.save();

//     res.json({
//         message: 'Booking were deleted successfully'
//     });
// }


export const updateBooking = async (req, res) => {
    console.log("entro")
    console.log(req.body)

    const admin = await Admin.findOne({email:req.body.email})
    
    const storeId = admin.stores.findIndex((s) => s._id == req.body.storeId)
    
    const coverId = admin.stores[storeId].bookings.findIndex((s) => s._id == req.params.id);

    admin.stores[storeId].bookings[coverId] = {
        info: req.body.info,
        cupo: req.body.cupo,
        date : req.body.date,
        hour : req.body.hour,
        description: req.body.description,
        state: req.bodu.state,
    };

    await admin.save();

    res.json({
        message: 'Product were deleted successfully'
    });
}
