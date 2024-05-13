import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import {  createWallet, getAllWallets, getWalletByUserId, deleteWalletByUserId, updateWalletByUserId } from '../controllers/wallet.controller.js'

const router = Router()


router.route('/createWallet').post( createWallet)
router.route('/getAllWallets').get(getAllWallets)
router.route('/getWalletByUserId/:id').get(getWalletByUserId)
router.route('/updateWalletByUserId/:id').patch( updateWalletByUserId)
router.route('/deleteWalletByUserId/:id').delete( deleteWalletByUserId)
export default router