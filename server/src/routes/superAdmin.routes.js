import { Router } from "express";
import { 
    loginProvider, 
    logoutProvider, 
    registerProvider, 
    refreshAccessToken, 
    changeCurrentPassword, 
    getCurrentProvider, 
    updateProviderAvatar, 
    updateAccountDetails,
    getAllProviders,
    getProviderById
} from "../controllers/superAdmin.controller.js";
import {upload} from "../middlewares/multer.middleware.js"
import { verifyJWT } from "../middlewares/auth.middleware.js";


const router = Router()

router.route("/registerProvider").post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1
        }
    ]),
    registerProvider
    )

router.route("/login").post(loginProvider)

//secured routes
router.route("/logout").post(verifyJWT,  logoutProvider)
router.route("/refresh-token").post(refreshAccessToken)
router.route("/change-password").post(verifyJWT, changeCurrentPassword)
router.route("/current-Provider").get(verifyJWT, getCurrentProvider)
router.route("/update-account").patch(verifyJWT, updateAccountDetails)  
router.route('/getAllProviders').get(getAllProviders)
router.route('/getProviderById').get(getProviderById)
router.route("/avatar").patch(verifyJWT, upload.single("avatar"), updateProviderAvatar)


export default router