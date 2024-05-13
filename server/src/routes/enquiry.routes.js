import { Router } from "express";

import { verifyJWT } from "../middlewares/auth.middleware.js";
import { createEnquiry } from "../controllers/enquiry.controller.js";

const router = Router();

router.route("/createEnquiry").post(createEnquiry);

export default router;
