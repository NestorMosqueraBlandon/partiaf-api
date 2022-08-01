import { Router } from "express";
import * as userCtrl from '../controllers/userController.js'
const router = Router();

router.get("/:id", userCtrl.findOneUser)
router.post("/signup", userCtrl.createUser)
router.post("/signin", userCtrl.signin)
router.put("/", userCtrl.updateAdmin)
router.post("/wishlist", userCtrl.addToWishlist)


export default router;