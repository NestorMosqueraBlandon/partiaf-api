import { Router } from "express";
import * as adminCtrl from '../controllers/adminController.js'
const router = Router();

router.post("/signout", adminCtrl.createAdmin)
router.post("/signin", adminCtrl.signin)
router.put("/", adminCtrl.updateAdmin)

export default router;