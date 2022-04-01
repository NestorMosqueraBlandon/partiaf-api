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
            totalLimit: req.body.totalLimit,
        })

        await admin.save()

        // const store = {
        //     name: admin.stores[0].name,
        //     type: admin.stores[0].type,
        //     price : admin.stores[0].price,
        //     date : admin.stores[0].date,
        //     totalLimit: admin.stores[0].totalLimit,
        //     hour: admin.stores[0].hour,
        //     description: admin.stores[0].description,
        // };

        res.send({store: admin.stores[0]})
    }
}

export const createStoreCover = async(req, res) => {
    console.log(req.body)
    const admin = await Admin.findOne({email:req.body.email})

    const storeId = admin.stores.findIndex((s) => s._id == req.body.storeId)

    const store = admin.stores[storeId];
    

    if(admin)
    {
        admin.stores[storeId].covers.unshift({
            name: req.body.name,
            type: req.body.type,
            price : req.body.price,
            date : req.body.date,
            totalLimit: req.body.totalLimit,
            hour: req.body.hour,
            description: req.body.description,
        })

        await admin.save()

        res.send(200)
    }
}

export const allCovers = async(req, res) => {
    console.log(req.query)
    const admin = await Admin.findOne({email:req.query.email})
    console.log(admin)
    const storeId = admin.stores.findIndex((s) => s._id == req.query.storeId)

    const store = admin.stores[storeId];

    const covers = admin.stores[storeId].covers;
    console.log(covers)

    if(admin)
    {
        res.send(covers);
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

export const allStoresApp = async (req, res) => {
    const admins = await Admin.find();


    let stores = [];

    // console.log(admins[0].stores)
    for(let i= 0; i < admins.length; i++){
        stores = stores.concat(admins[i].stores)
    }

    // console.log(stores)
    res.send(
        stores
    )
}

export const selectStore = async (req, res) => {
    console.log(req.body);
    const admin = await Admin.findOne({email:req.body.email})

    const storeId = admin.stores.findIndex((s) => s._id == req.body.storeId)

    const store = admin.stores[storeId];
    
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

export const deleteStore = async (req, res) => {
    console.log(req.body)
    const admin = await Admin.findOne({email:req.body.email})

    const storeId = admin.stores.findIndex((s) => s._id == req.body.storeId)

    const store = admin.stores[storeId];
    
    if(store)
    {
        if(req.body.password == store.password)
        {
            admin.stores.splice(storeId, 1);
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


export const deleteCover = async (req, res) => {

    console.log(req.query)

    const admin = await Admin.findOne({email:req.query.email})

    const storeId = admin.stores.findIndex((s) => s._id == req.query.storeId)
    
    const coverId = admin.stores[storeId].covers.findIndex((s) => s._id == req.params.id);

    const store = admin.stores[storeId].covers.splice(coverId, 1);

    await admin.save();

    res.json({
        message: 'Product were deleted successfully'
    });
}


export const updateCover = async (req, res) => {
    console.log("entro")
    console.log(req.body)

    const admin = await Admin.findOne({email:req.body.email})
    
    const storeId = admin.stores.findIndex((s) => s._id == req.body.storeId)
    
    const coverId = admin.stores[storeId].covers.findIndex((s) => s._id == req.params.id);

    admin.stores[storeId].covers[coverId] = {
            name: req.body.name,
            type: req.body.type,
            price : req.body.price,
            date : req.body.date,
            totalLimit: req.body.totalLimit,
            hour: req.body.hour,
            description: req.body.description,
    };

    await admin.save();

    res.json({
        message: 'Product were deleted successfully'
    });
}
