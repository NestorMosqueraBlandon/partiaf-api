import { Router } from "express";
import * as menuCtrl from '../controllers/menuController.js'
const router = Router();

router.post("/create", menuCtrl.create)
router.get("/", menuCtrl.getAll)
// router.delete("/:id", buyCtrl.delete)
// router.put("/:id", buyCtrl.update)

export default router;