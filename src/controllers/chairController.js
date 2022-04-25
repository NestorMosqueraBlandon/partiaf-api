import Admin from "../models/adminModel.js";

export const create = async (req, res) => {
    
    console.log(req.body)
    const {email, storeId, type, limit, price, amount} = req.body;

    const admin = await Admin.findOne({email});
    const id = admin.stores.findIndex((s) => s._id == storeId);
    
    const reserved = 0;
    try{
        if(admin){
            console.log(admin.stores[id])
            admin.stores[id].chairs.unshift({
                type, limit, price, amount , reserved
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

    const chairs = await admin.stores[id].chairs;

    console.log(chairs)
    if(chairs){
        res.status(200).json(chairs);
    }
}


export const deleteChair = async (req, res) => {


    console.log(req.query)

    const {email, storeId} = req.query;

    const admin = await Admin.findOne({email})

    const id = admin.stores.findIndex((s) => s._id == storeId)
    
    const idMenu = admin.stores[id].chairs.findIndex((m) => m._id == req.params.id);

    const menu = admin.stores[id].chairs.splice(idMenu, 1);

    await admin.save();

    res.json({
        message: 'Menu were deleted successfully'
    });
}


export const updateChair = async (req, res) => {
    console.log("entro")
    console.log(req.body)

    const admin = await Admin.findOne({email:req.body.email})
    
    const storeId = admin.stores.findIndex((s) => s._id == req.body.storeId)
    
    const chairId = admin.stores[storeId].chairs.findIndex((s) => s._id == req.params.id);

    admin.stores[storeId].chairs[chairId] = {
        type: req.body.type,
        price: req.body.price,
        amount: req.body.amount,
        limit: req.body.limit,
        description: req.body.description,
        state: req.bodu.state,
    };

    await admin.save();

    res.json({
        message: 'Product were deleted successfully'
    });
}
