import { Router } from "express";
import * as buyCtrl from '../controllers/buyController.js'
const router = Router();

router.put("/", buyCtrl.create)
router.get("/", buyCtrl.getAll)
// router.delete("/:id", buyCtrl.delete)
// router.put("/:id", buyCtrl.update)

export default router;