import { Router } from "express";
import * as commentCtrl from '../controllers/commentController.js'
const router = Router();

router.put("/", commentCtrl.create)
router.get("/", commentCtrl.getAll)
router.delete("/:id", commentCtrl.deleteMenu)
router.put("/:id", commentCtrl.updateMenu)

export default router;