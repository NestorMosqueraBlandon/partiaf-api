import { Router } from "express";
import * as userCtrl from '../controllers/userController.js'
const router = Router();

router.post("/signup", userCtrl.createUser)
router.post("/signin", userCtrl.signin)
router.put("/", userCtrl.updateAdmin)

export default router;