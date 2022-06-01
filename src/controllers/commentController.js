import Admin from "../models/adminModel.js";

export const create = async (req, res) => {
    
    console.log(req.body)
    const {text, photo, email, storeId} = req.body;

    const admin = await Admin.findOne({email});
    const id = admin.stores.findIndex((s) => s._id == storeId);
    
    try{
        if(admin){
            console.log(admin.stores[id])
            admin.stores[id].comments.unshift({
                text: text,
                photo: photo
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

    const comments = await admin.stores[id].comments;

    console.log(comments)
    if(comments){
        res.status(200).json(comments);
    }
}


export const deleteMenu = async (req, res) => {


    console.log(req.query)

    const {email, storeId} = req.query;

    const admin = await Admin.findOne({email})

    const id = admin.stores.findIndex((s) => s._id == storeId)
    
    const idMenu = admin.stores[id].menus.findIndex((m) => m._id == req.params.id);

    const menu = admin.stores[id].menus.splice(idMenu, 1);

    await admin.save();

    res.json({
        message: 'Menu were deleted successfully'
    });
}


export const updateMenu = async (req, res) => {

    console.log(req.body.props);

    const admin = await Admin.findOne({email:req.body.props.email})
    
    const storeId = admin.stores.findIndex((s) => s._id == req.body.props.storeId)
    
    const menuId = admin.stores[storeId].menus.findIndex((s) => s._id == req.params.id);

    admin.stores[storeId].menus[menuId] = {
        title: req.body.props.title,
        items: admin.stores[storeId].menus[menuId].items,
    };

    await admin.save();

    res.json({
        message: 'Menu were deleted successfully'
    });
}
