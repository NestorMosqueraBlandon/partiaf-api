import Admin from "../models/adminModel.js";
import Menu from "../models/menuModel.js";

export const create = async (req, res) => {
    
    const {title, email, storeId} = req.body.props;

    console.log(storeId)
    const admin = await Admin.findOne({email});
    const id = admin.stores.findIndex((s) => s._id == storeId);
    
    if(admin && id){
        admin.stores[id].menus.unshift({
            title,
        });
    }

    await admin.save();
    res.status(201).json();
};
  

export const getAll = async(req, res) => {
    const {email, storeId} = req.query;

    const admin = await Admin.findOne({email});

    const id = admin.stores.findIndex((s) => s._id == storeId);

    const menus = await admin.stores[id].menus;

    console.log(menus)
    if(menus){
        res.status(200).json(menus);
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
