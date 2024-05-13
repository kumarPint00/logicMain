import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import {  createPromoCode, getAllPromoCodes, getPromoCodeById, updatePromoCodeById, deletePromoCodeById } from '../controllers/promocode.controller.js'

const router = Router()


router.route('/createPromoCode').post( createPromoCode)
router.route('/getAllPromoCodes').get(getAllPromoCodes)
router.route('/getPromoCodeById/:id').get(getPromoCodeById)
router.route('/updatePromoCodeById/:id').patch( updatePromoCodeById)
router.route('/deletePromoCodeById/:id').delete( deletePromoCodeById)

export default router