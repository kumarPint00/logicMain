import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import {  createLanguage, getAllLanguages, getLanguageById, updateLanguageById, deleteLanguageById} from '../controllers/language.controller.js'

const router = Router()

router.route('/createLanguage').post( createLanguage)
router.route('/getAllLanguages').get(getAllLanguages)
router.route('/getLanguageById/:id').get(getLanguageById)
router.route('/updateLanguageById/:id').patch( updateLanguageById)
router.route('/deleteLanguageById/:id').delete( deleteLanguageById)

export default router