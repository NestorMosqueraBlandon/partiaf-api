import Admin from "../models/adminModel.js";
import Menu from "../models/menuModel.js";

export const create = async (req, res) => {
    
    console.log(req.body)
    const {name, price, email, storeId, menuId} = req.body;

    const newPrice = price;
    const newName = name;
    
    const admin = await Admin.findOne({email});
    const id = admin.stores.findIndex((s) => s._id == storeId);
    const idMenu = admin.stores[id].menus.findIndex((m) => m._id == menuId);

    try{
        if(admin){
            console.log(admin.stores[id])
            admin.stores[id].menus[idMenu].items.unshift({
                name: newName,
                price: newPrice
            });
        }
    
        await admin.save();
        res.status(201).json(admin);

    }catch(err){
        res.status(404).json({message: err.message})

    }

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


export const deleteItem = async (req, res) => {


    console.log(req.query)

    const {email, storeId, menuId} = req.query;

    const admin = await Admin.findOne({email})

    const id = admin.stores.findIndex((s) => s._id == storeId)
    
    console.log(id)
    const idMenu = admin.stores[id].menus.findIndex((m) => m._id == menuId);

    console.log(idMenu)
    const idItem = admin.stores[id].menus[idMenu].itmes.findIndex((i) => i._id == req.params.id);

    const item = admin.stores[id].menus[idMenu].items.splice(idItem, 1);

    await admin.save();

    res.json({
        message: 'Item were deleted successfully'
    });
}


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
