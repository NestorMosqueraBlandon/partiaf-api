import { Router } from "express";
import * as bookingsCtrl from '../controllers/bookingsController.js'
const router = Router();

router.put("/create", bookingsCtrl.create)
router.get("/", bookingsCtrl.getAll)
// router.delete("/:id", buyCtrl.delete)
// router.put("/:id", buyCtrl.update)

export default router;