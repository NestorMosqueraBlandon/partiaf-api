import { Router } from "express";
import * as itemCtrl from '../controllers/itemController.js'
const router = Router();

router.post("/create", itemCtrl.create)
router.get("/", itemCtrl.getAll)
router.delete("/:id", itemCtrl.deleteItem)
router.put("/:id", itemCtrl.updateItem)

export default router;