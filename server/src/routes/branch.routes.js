import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { createBranch, getAllBranches, getBranchById, updateBranchById, deleteBranchById} from '../controllers/branch.controller.js'

const router = Router()


router.route('/createBranch').post( createBranch)
router.route('/getAllBranches').get(getAllBranches)
router.route('/getBranchById/:id').get(getBranchById)
router.route('/updateBranchById/:id').patch( updateBranchById)
router.route('/deleteBranchById/:id').delete( deleteBranchById)



export default router