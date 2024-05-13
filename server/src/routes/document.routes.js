import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import {
  createDocument,
  getAllDocuments,
  getDocumentById,
  updateDocumentById,
  deleteDocumentById,
} from "../controllers/document.controller.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();

router.route("/createDocument").post(
  upload.fields([
    {
      name: "documentImages",
      maxCount: 1,
    },
  ]),
  createDocument
);

router.route("/getAllDocuments").get(getAllDocuments);
router.route("/getDocumentById/:id").get(getDocumentById);
router.route("/updateDocumentById/:id").patch(
  upload.fields([
    {
      name: "documentImages",
      maxCount: 1,
    },
  ]),
  updateDocumentById
);
router.delete("/deleteDocumentById/:id", deleteDocumentById);

export default router;
