import { Router } from "express";
import * as itemCtrl from '../controllers/itemController.js'
const router = Router();

router.post("/create", itemCtrl.create)
router.get("/", itemCtrl.getAll)
router.delete("/:id", buyCtrl.deleteItem)
// router.put("/:id", buyCtrl.update)

export default router;