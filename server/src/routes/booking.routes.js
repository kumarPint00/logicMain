import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { createBookingDetails,
    getAllBookingDetails,
    getBookingDetailsById,
    updateBookingDetails,
    deleteBookingDetails,
    createBookingHistory,
    getAllBookingHistory,
    getBookingHistoryById,
    updateBookingHistory,
    deleteBookingHistory} from '../controllers/booking.controller.js'

const router = Router()


router.route('/createBookingDetails').post( createBookingDetails)
router.route('/getAllBookingDetails').get(getAllBookingDetails)
router.route('/getBookingDetailsById/:id').get(getBookingDetailsById)
router.route('/updateBookingDetails/:id').patch( updateBookingDetails)
router.route('/deleteBookingDetails/:id').delete( deleteBookingDetails)
router.route('/getBookingHistoryById/:id').get( getBookingHistoryById)
router.route('/updateBookingHistory/:id').patch( updateBookingHistory)
router.route('/deleteBookingHistory/:id').delete( deleteBookingHistory)
router.route('/createBookingHistory').post( createBookingHistory)
router.route('/getAllBookingHistory').get( getAllBookingHistory)

export default router