import Admin from "../models/adminModel.js";
import Buy from "../models/buyModel.js";

export const create = async (req, res) => {
    
    console.log(req.body);

    const {type, peoples, day, hour, total, email, storeId} = req.body;

    const admin = await Admin.findOne({email});

    const id = admin.stores.findIndex((s) => s._id == storeId);

    try{
        if(admin){
            admin.stores[id].bookings.unshift({
                type: type,
                peoples: peoples,
                day: day,
                hour: hour,
                total:total
            })

            admin.save();
            res.status(201).json(admin);

        }
    }catch(e){
        res.status(404).json({message: e.message})
    }
  };
  

export const getAll = async(req, res) => {

    const {email, storeId} = req.query;

    const admin = await Admin.findOne({email});

    const id = admin.stores.findIndex((s) => s._id == storeId);

    const buys = await admin.stores[id].buys;

    console.log(buys)
    if(buys){
        res.send(buys);
    }
}


export const deleteBooking = async (req, res) => {

    console.log(req.query)

    const admin = await Admin.findOne({email:req.query.email})

    const storeId = admin.stores.findIndex((s) => s._id == req.query.storeId)
    
    const coverId = admin.stores[storeId].bookings.findIndex((s) => s._id == req.params.id);

    const store = admin.stores[storeId].bookings.splice(coverId, 1);

    await admin.save();

    res.json({
        message: 'Booking were deleted successfully'
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
