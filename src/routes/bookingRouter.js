import { Router } from "express";
import * as bookingCtrl from '../controllers/bookingController.js'
const router = Router();

router.post("/createBooking/", bookingCtrl.createBooking)
router.get("/booking/", bookingCtrl.allBookings)
router.delete("/bookings/:id", bookingCtrl.deleteBooking)
router.put("/updateBooking/:id", bookingCtrl.updateBooking)

export default router;