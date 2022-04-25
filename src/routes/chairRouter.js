import { Router } from "express";
import * as chairCtrl from '../controllers/chairController.js'
const router = Router();

router.post("/create", chairCtrl.create)
router.get("/", chairCtrl.getAll)
router.delete("/:id", chairCtrl.deleteChair)
router.put("/:id", chairCtrl.updateChair)

export default router;