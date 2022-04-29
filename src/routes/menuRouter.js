import { Router } from "express";
import * as menuCtrl from '../controllers/menuController.js'
const router = Router();

router.post("/create", menuCtrl.create)
router.get("/", menuCtrl.getAll)
router.delete("/:id", menuCtrl.deleteMenu)
router.put("/:id", menuCtrl.updateMenu)

export default router;