import { Router } from "express";
import * as bussinessCtrl from '../controllers/bussinessController.js'
const router = Router();

router.post("/", bussinessCtrl.createStore)
router.put("/id", bussinessCtrl.updateStore)
router.get("/list/", bussinessCtrl.allStores)
router.get('/listall', bussinessCtrl.allStoresApp)
router.post("/select/", bussinessCtrl.selectStore)
router.delete("/", bussinessCtrl.deleteStore)
router.post("/createCover/", bussinessCtrl.createStoreCover)
router.get("/covers/", bussinessCtrl.allCovers)
router.delete("/covers/:id", bussinessCtrl.deleteCover)
router.put("/updateCover/:id", bussinessCtrl.updateCover)

export default router;