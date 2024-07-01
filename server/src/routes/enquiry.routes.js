import { Router } from "express";

import { verifyJWT } from "../middlewares/auth.middleware.js";
import { createEnquiry, deleteEnquiry, getAllAcceptedEnquiries, getAllEnquiries, getAllRejectedEnquiries, getEnquiryById, updateEnquiry } from "../controllers/enquiry.controller.js";

const router = Router();

router.route("/createEnquiry").post(createEnquiry);
router.route('/getAllEnquiries').get(getAllEnquiries);
router.route('/getEnquiryById/:id').get(getEnquiryById);
router.route('/getAllAcceptedEnquiries').get(getAllAcceptedEnquiries);
router.route('/getAllRejectedEnquiries').get(getAllRejectedEnquiries);
router.route('/updateEnquiry/:id').put(updateEnquiry);
router.route('/deleteEnquiry/:id').delete(deleteEnquiry);

export default router;
