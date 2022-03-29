import Admin from "../models/adminModel.js";

export const createBooking = async(req, res) => {
    const { email, storeId } = req.body;

    const admin = await Admin.findOne(email)
    const id = admin.stores.findIndex((s) => s._id == storeId)
    const store = admin.stores[id];

    try{

        if(admin)
        {
            admin.stores[id].bookings.unshift({
                info: req.body.info,
                cupo: req.body.cupo,
                date : req.body.date,
                hour : req.body.hour,
                description: req.body.description,
                state: true,
            })
        }
        await admin.save()
        res.status(201).json(newStore)

    }catch(err){
        res.status(404).json({message: err.message})
    }
}

export const allBookings = async(req, res) => {
    console.log(req.query)
    const admin = await Admin.findOne({email:req.query.email})
    console.log(admin)
    const storeId = admin.stores.findIndex((s) => s._id == req.query.storeId)

    const store = admin.stores[storeId];

    const bookings = admin.stores[storeId].bookings;
    console.log(bookings)

    if(admin)
    {
        res.send(bookings);
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
