import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import {
  Car,
  CarFeature,
  CarImages,
  PackageDetail,
} from "../models/car.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { sendEmailNotification } from "../utils/notification.service.js";
import { sendWhatsAppmessage } from "../utils/sms.service.js";
import { ObjectId } from "mongodb";


const createCar = asyncHandler(async (req, res) => {
  const {
    brand,
    model,
    interiorColor,
    exteriorColor,
    year,
    category,
    location,
    vehicleType,
    featuredCar,
    status,
    services,
    description,
    securityDeposit,
    ExcessClaimAmount,
    paymentMethods,
    dailypackage,
    weeklypackage,
    monthlypackage,
    strandardInsurrance,
    fullInsurrance,
    transmission,
    cruiseControl,
    engineCapacity,
    luggageBootCapacity,
    engineSize,
    bluetooth,
    aux,
    seater,
    navigation,
    parkingSense,
    appleCarPlay,
    isoFix,
    sunRoof,
    pushButton,
    lcd,
    rearCamera,
    imageType,
    image
  } = req.body;
  console.log("🚀 ~ createCar ~ req.body:", req.body)
  const name = brand + " " + model;
  
  const carImagePath = req.files?.carImages[0]?.path;

  if (!carImagePath) {
    throw new ApiError(400, "Car image is required");
  }
  const carImage = await uploadOnCloudinary(carImagePath);
  if (!carImage) {
    throw new ApiError(400, "Car image upload failed");
  }

  const carImages = await CarImages.create({
    imageUrl: carImage.url,
    imageType: imageType,
  })

  const carFeatures = await CarFeature.create({
    transmission,
    cruiseControl,
    engineCapacity,
    luggageBootCapacity,
    engineSize,
    bluetooth,
    aux,
    seater,
    navigation,
    parkingSense,
    appleCarPlay,
    isoFix,
    sunRoof,
    pushButton,
    lcd,
    rearCamera,
  });

  const carPackage = await PackageDetail.create({
    securityDeposit,
    ExcessClaimAmount,
    paymentMethods,
    dailypackage,
    weeklypackage,
    monthlypackage,
  });
  
  const car = await Car.create({
    name,
    brand,
    model,
    interiorColor,
    exteriorColor,
    year,
    category,
    location,
    vehicleType,
    featuredCar,
    status,
    services,
    description,
    insurranceDetails:{
      strandardInsurrance,
      fullInsurrance
    },
    packageDetails: carPackage._id,
    carFeatures: carFeatures._id,
    carImages: carImages._id,
  });

  const createdCar = await Car.findOne(car._id).populate("carFeatures").populate("packageDetails").populate("carImages").select('-_id -__v')
 
  const createdCarforWhatsapp = await Car.findOne(car._id).populate("packageDetails").select('-_id -__v')
 
  const mailbody = `New Car Registered: \n ${createdCar}`;
    
  sendEmailNotification({
    mailbody,
    receiver: "ravirashisingh16@gmail.com",
    subject: "New Car Registered",
  });

  sendWhatsAppmessage({ message: `New Car Created \n ${createdCarforWhatsapp}` });

  res.status(201).json({
    success: true,
    message: "Car created successfully",
    data: createdCar,
  });
});

const getAllCars = asyncHandler(async (req, res) => {
  try{
    const cars = await Car.find({}).populate("carFeatures").populate("packageDetails").populate("carImages");
    res.status(200).json({
      success: true,
      data: cars,
    });
  } catch(error) {
    throw new ApiError(500, "Something went wrong while getting the cars");
  }
});

const getCarById = asyncHandler(async (req, res) => {
  const carId = (req.params.id).toString().trim();
  console.log("🚀 ~ getCarById ~ carId:", carId)
  // if (!ObjectId.isValid(carId)) {
  //   throw new ApiError(400, "Invalid car id");
  // }

  const carIdObjectId =new ObjectId(carId);
  console.log("🚀 ~ getCarById ~ carIdObjectId:", carIdObjectId)
  
  const car = await Car.findOne(carIdObjectId).populate("carFeatures").populate("packageDetails").populate("carImages");
  console.log("🚀 ~ getCarById ~ car:", car)
  if (!car) {
    throw new ApiError(404, "Car not found");
  } // 
  res.status(200).json({
    success: true,
    data: car,
  });
});

const getCarsByBrand = asyncHandler(async (req, res) => {
  const brand = req.params.brand;
  const cars = await Car.find({ brand: brand }).populate("carFeatures").populate("packageDetails").populate("carImages");
  res.status(200).json({
    success: true,
    data: cars,
  });
});

const getCarsByLocation = asyncHandler(async (req, res) => {
  const location = req.params.location;
  const cars = await Car.find({ location: location }).populate("carFeatures").populate("packageDetails").populate("carImages");
  res.status(200).json({
    success: true,
    data: cars,
  });
});

const getCarsByPriceRange = asyncHandler(async (req, res) => {
  const minPrice = req.query.minPrice;
  const maxPrice = req.query.maxPrice;
  const cars = await Car.find({
    $and: [
      { "availablePricing.actualPriceDaily": { $gte: minPrice } },
      { "availablePricing.actualPriceDaily": { $lte: maxPrice } },
    ],
  });
  res.status(200).json({
    success: true,
    data: cars,
  });
});

const getCarsBySegment = asyncHandler(async (req, res) => {
  const segment = req.params.segment;
  const cars = await Car.find({ category: segment }).populate("carFeatures").populate("packageDetails").populate("carImages");
  res.status(200).json({
    success: true,
    data: cars,
  });
});

const updateCarById = asyncHandler(async (req, res) => {
  const carId = req.params.id;
  const updates = req.body;
  const car = await Car.findOneAndUpdate(carId, updates, { new: true });
  if (!car) {
    throw new ApiError(404, "Car not found");
  }
  res.status(200).json({
    success: true,
    message: "Car updated successfully",
    data: car,
  });
});

const deleteCarById = asyncHandler(async (req, res) => {
  const carId = req.params.id;
  const car = await Car.findOneAndDelete(carId);
  if (!car) {
    throw new ApiError(404, "Car not found");
  }
  res.status(200).json({
    success: true,
    message: "Car deleted successfully",
    data: car,
  });
});

export {
  createCar,
  getAllCars,
  getCarById,
  getCarsByBrand,
  getCarsByLocation,
  getCarsByPriceRange,
  getCarsBySegment,
  updateCarById,
  deleteCarById,
};

// 447EJK66XM41XPLEQSZ25KJ8 -- twilio recovery key