import Admin from "../models/adminModel.js";

export const createStore = async(req, res) => {

    const admin = await Admin.findOne({email: req.body.email});

    if(admin)
    {
        admin.stores.unshift({
            name: req.body.name,
            type: req.body.type,
            nit : req.body.nit,
            email : req.body.email,
            mobile: req.body.mobile,
            employes: req.body.employes,
            address: req.body.name,
            password: req.body.password,
        })

        await admin.save()
    }
}


export const allStores = async(req, res) => {

    console.log(req.query)
    const admin = await Admin.findOne({email:req.query.email})

    console.log(admin)
    const stores = admin.stores
    console.log(stores)
    res.json({
        stores
    });
}


export const selectStore = async (req, res) => {
    console.log(req.body);
    const admin = await Admin.findOne({email:req.body.email})

    const storeId = admin.stores.findIndex((s) => s._id == req.body.storeId)

    const store = admin.stores[storeId];
    console.log(store.password)    
    if(store)
    {
        if(req.body.password == store.password)
        {
            res.send({
                store
            });
            return;
        }else{
            res.status(500).json({
                message: 'Contrasena incorrecta'
            })
        }
    }else{
        res.status(500).json({
            message: 'Admin dont exits'
        })
    }
}