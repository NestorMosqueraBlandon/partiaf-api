import Admin from "../models/adminModel.js";

export const createStore = async (req, res) => {
  const admin = await Admin.findOne({ email: req.body.email });

  if (admin) {
    admin.stores.unshift({
      name: req.body.name,
      type: req.body.type,
      nit: req.body.nit,
      email: req.body.email,
      mobile: req.body.mobile,
      employes: req.body.employes,
      address: req.body.name,
      password: req.body.password,
      totalLimit: req.body.totalLimit,
      images: req.body.images
    });

    await admin.save();

    // const store = {
    //     name: admin.stores[0].name,
    //     type: admin.stores[0].type,
    //     price : admin.stores[0].price,
    //     date : admin.stores[0].date,
    //     totalLimit: admin.stores[0].totalLimit,
    //     hour: admin.stores[0].hour,
    //     description: admin.stores[0].description,
    // };

    res.send({ store: admin.stores[0] });
  }
};

export const updateStore = async (req, res) => {
  const admin = await Admin.findOne({ email: req.body.email });

  const storeId = admin.stores.findIndex((s) => s._id == req.params.id);
  if (admin) {
    admin.stores[storeId] = {
      name: req.body.name,
      type: req.body.type,
      nit: req.body.nit,
      email: req.body.email,
      mobile: req.body.mobile,
      images: req.body.images,
      employes: req.body.employes,
      address: req.body.name,
      menus: admin.stores[storeId].menus,
      totalLimit: req.body.totalLimit,
      password: req.body.password
    };

    await admin.save();

    res.send({ store: admin.stores[storeId] });
  }
};

export const createStoreCover = async (req, res) => {
  const admin = await Admin.findOne({ email: req.body.email });

  try {
  const storeId = admin.stores.findIndex((s) => s._id == req.body.storeId);

    if (admin) {
      admin.stores[storeId].covers.unshift({
        name: req.body.name,
        type: req.body.type,
        price: req.body.price,
        date: req.body.date,
        totalLimit: req.body.totalLimit,
        hour: req.body.hour,
        description: req.body.description,
      });

      await admin.save();

      res.send(200);
    }
  } catch (err) {
    throw new Error(err);
  }
};

export const allCovers = async (req, res) => {
  const admin = await Admin.findOne({ email: req.query.email });


  try {
    const storeId = admin.stores.findIndex((s) => s._id == req.query.storeId);
    const covers = admin.stores[storeId].covers;
    if (admin) {
      res.status(200).send(covers);
    }
  } catch (err) {
    throw new Error(err);
  }
};

export const allStores = async (req, res) => {
  const admin = await Admin.findOne({ email: req.query.email });

  try {
    if (admin?.stores) {
      const stores = admin.stores;
      res.status(200).json({
        stores,
      });
    }
  } catch (err) {
    throw new Error(err);
  }
};

export const allStoresApp = async (req, res) => {
  const admins = await Admin.find();

  let stores = [];
  try {
    for (let i = 0; i < admins.length; i++) {
      stores = stores.concat(admins[i].stores);
    }

    res.status(200).send(stores);
  } catch (err) {
    throw new Error(err);
  }
};

export const selectStore = async (req, res) => {
  console.log(req.body);
  const admin = await Admin.findOne({ email: req.body.email });

  try{
    const storeId = admin.stores.findIndex((s) => s._id == req.body.storeId);

    const store = admin.stores[storeId];
  
    
    if (store) {
      if (req.body.password == store.password) {
        res.send({
          store,
        });
      } else {
        res.status(500).json({
          message: "Contrasena incorrecta",
        });
      }
    } else {
      res.status(500).json({
        message: "Admin dont exits",
      });
    }
  }catch(err){
      throw new Error(err);
  }  
};

export const getOne = async (req, res) => {
  console.log(req.body);
  const admins = await Admin.find({});

  const stores = [] 
  
  admins.filter((admin) => admin.stores.length > 0)
  .map((admin) => {
    const store = admin.stores;
    stores.push(...store);
  })

  try{
    const storeId = req.params.id;

    const store = stores.filter((store) => store._id == storeId )
  
    
    console.log(store)
    if (store) {
      
        res.send({
          ...store,
        });
    } else {
      res.status(500).json({
        message: "Admin dont exits",
      });
    }
  }catch(err){
      // throw new Error(err);
      console.log(err)
  }  
};

// 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

export const deleteStore = async (req, res) => {
  const admin = await Admin.findOne({ email: req.query.email });

  console.log(req.query);
  const storeId = admin.stores.findIndex((s) => s._id == req.query.storeId);

  const store = admin.stores[storeId];

  console.log(store);
  if (admin) {
    if (req.query.password == store.password) {
      admin.stores.splice(storeId, 1);

      await admin.save();

      res.json({
        message: "Store were deleted successfully",
      });
    } else {
      res.status(500).json({
        message: "Contrasena incorrecta",
      });
    }
  } else {
    res.status(500).json({
      message: "Admin dont exits",
    });
  }
};

export const deleteCover = async (req, res) => {
  console.log(req.query);

  const admin = await Admin.findOne({ email: req.query.email });

  const storeId = admin.stores.findIndex((s) => s._id == req.query.storeId);

  const coverId = admin.stores[storeId].covers.findIndex(
    (s) => s._id == req.params.id
  );

  const store = admin.stores[storeId].covers.splice(coverId, 1);

  await admin.save();

  res.json({
    message: "Product were deleted successfully",
  });
};

export const updateCover = async (req, res) => {
  console.log("entro");
  console.log(req.body);

  const admin = await Admin.findOne({ email: req.body.email });

  const storeId = admin.stores.findIndex((s) => s._id == req.body.storeId);

  const coverId = admin.stores[storeId].covers.findIndex(
    (s) => s._id == req.params.id
  );

  admin.stores[storeId].covers[coverId] = {
    name: req.body.name,
    type: req.body.type,
    price: req.body.price,
    date: req.body.date,
    totalLimit: req.body.totalLimit,
    hour: req.body.hour,
    description: req.body.description,
  };

  await admin.save();

  res.json({
    message: "Product were deleted successfully",
  });
};
