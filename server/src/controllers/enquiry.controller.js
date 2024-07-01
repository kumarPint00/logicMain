import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import Enquiry from "../models/carEnquiry.model.js";
import { sendEmailNotification } from "../utils/notification.service.js";
import { sendWhatsAppmessage } from "../utils/sms.service.js";
import mongoose from "mongoose";

// Create an enquiry
const createEnquiry = asyncHandler(async (req, res) => {
  try {
    const enquiryBody = req.body;
    const updatedBody = { ...enquiryBody, bookingCreated: new Date() };
    const enquiry = await Enquiry.create(updatedBody);
    if (!enquiry) {
      throw new ApiError(500, "Failed to create enquiry");
    }

    const updatedquiry = await Enquiry.findOne(enquiry._id).select('-_id -__v')
    const mailbody = `New enquiry received: \n ${updatedquiry}`;
    
    
    // Send email notification to admin
    sendEmailNotification({
      mailbody,
      receiver: "ravirashisingh16@gmail.com",
      subject: "New Car Enquiry Received",
    });

    // Send WhatsApp notification to admin
    sendWhatsAppmessage({ message: `New Car Enquiry Received \n ${updatedquiry}` });

    res
      .status(201)
      .json(new ApiResponse(201, enquiry, "Enquiry created successfully"));
  } catch (error) {
    throw new ApiError(500, error.message || "Internal Server Error");
  }
});

// Retrieve all enquiries
const getAllEnquiries = asyncHandler(async (req, res) => {
  try {
    const enquiries = await Enquiry.find();
    res
      .status(200)
      .json(
        new ApiResponse(200, enquiries, "Enquiries retrieved successfully")
      );
  } catch (error) {
    throw new ApiError(500, error.message || "Internal Server Error");
  }
});

// Retrieve a single enquiry by ID
const getEnquiryById = asyncHandler(async (req, res) => {
  try {
    const enquiryId = req.params.id;
    const enquiry = await Enquiry.findOne(enquiryId);
    if (!enquiry) {
      throw new ApiError(404, "Enquiry not found");
    }
    res
      .status(200)
      .json(new ApiResponse(200, enquiry, "Enquiry retrieved successfully"));
  } catch (error) {
    throw new ApiError(500, error.message || "Internal Server Error");
  }
});

// Update an existing enquiry
const updateEnquiry = asyncHandler(async (req, res) => {
  try {
    const enquiryId = req.params.id;
    const objID = new mongoose.Types.ObjectId(enquiryId);
    const updates = req.body;
    const updatedBody = { ...updates, bookingUpdated: new Date() };
    const enquiry = await Enquiry.findOneAndUpdate(
      objID,
      updatedBody,
      { new: true }
    );
    if (!enquiry) {
      throw new ApiError(404, "Enquiry not found");
    }
    res
      .status(200)
      .json(new ApiResponse(200, enquiry, "Enquiry updated successfully"));
  } catch (error) {
    throw new ApiError(500, error.message || "Internal Server Error");
  }
});

const getAllAcceptedEnquiries = asyncHandler(async (req, res) => {
  try {
    const enquiries = await Enquiry.find({ enquiryStatus: true });
    res
      .status(200)
      .json(
        new ApiResponse(200, enquiries, "Enquiries retrieved successfully")
      );

}
catch (error) {
    throw new ApiError(500, error.message || "Internal Server Error");
  }
});

const getAllRejectedEnquiries = asyncHandler(async (req, res) => {
  try {
    const enquiries = await Enquiry.find({ enquiryStatus: false });
    res
      .status(200)
      .json(
        new ApiResponse(200, enquiries, "Enquiries retrieved successfully")
      );
}
catch (error) {
    throw new ApiError(500, error.message || "Internal Server Error");
  }
});
// Delete an existing enquiry
const deleteEnquiry = asyncHandler(async (req, res) => {
  try {
    const enquiryId = req.params.id;
    const enquiry = await Enquiry.findOneAndDelete(enquiryId);
    if (!enquiry) {
      throw new ApiError(404, "Enquiry not found");
    }
    res
      .status(200)
      .json(new ApiResponse(200, enquiry, "Enquiry deleted successfully"));
  } catch (error) {
    throw new ApiError(500, error.message || "Internal Server Error");
  }
});

export {
  createEnquiry,
  getAllEnquiries,
  getEnquiryById,
  updateEnquiry,
  deleteEnquiry,
  getAllAcceptedEnquiries,
  getAllRejectedEnquiries
};
