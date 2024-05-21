import { Router } from "express";

import {
  createCar,
  deleteCarById,
  getAllCars,
  getCarById,
  getCarsByBrand,
  getCarsByLocation,
  getCarsByPriceRange,
  getCarsBySegment,
  updateCarById,
} from "../controllers/car.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();


router.route("/createNewCar").post(
  upload.fields([
    {
      name: "carImages",
      maxCount: 1,
    },
  ]),
  createCar
);

router.route("/getAllCars").get(getAllCars);
router.route("/getCarById/:id").get(getCarById);
router.route("/getCarsByBrand").get(getCarsByBrand);
router.route("/getCarsByLocation").get(getCarsByLocation);
router.route("/getCarsByPriceRange").get(getCarsByPriceRange);
router.route("/getCarsBySegment").get(getCarsBySegment);

//secured routes
router.route("/updateCarById/:id").patch( updateCarById);
router.route("/deleteCarById/:id").delete( deleteCarById);

export default router;
