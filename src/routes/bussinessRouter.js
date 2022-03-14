import { Router } from "express";
import * as bussinessCtrl from '../controllers/bussinessController.js'
const router = Router();

router.post("/", bussinessCtrl.createStore)
router.get("/list/", bussinessCtrl.allStores)
router.post("/select/", bussinessCtrl.selectStore)
router.post("/createCover/", bussinessCtrl.createStoreCover)
router.get("/covers/", bussinessCtrl.allCovers)

export default router;