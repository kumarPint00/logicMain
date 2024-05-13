import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiError } from '../utils/ApiError.js';
import { BookingDetails, BookingHistory } from '../models/booking.model.js';

// CRUD operations for Booking Details

// Create Booking Details
const createBookingDetails = asyncHandler(async (req, res) => {
    try {
        const bookingDetails = await BookingDetails.create(req.body);
        res.status(201).json({
            success: true,
            data: bookingDetails,
        });
    } catch (error) {
        throw new ApiError(500, 'Failed to create booking details');
    }
});

// Get All Booking Details
const getAllBookingDetails = asyncHandler(async (req, res) => {
    try {
        const bookingDetails = await BookingDetails.find();
        res.status(200).json({
            success: true,
            data: bookingDetails,
        });
    } catch (error) {
        throw new ApiError(500, 'Failed to fetch booking details');
    }
});

// Get Booking Details by ID
const getBookingDetailsById = asyncHandler(async (req, res) => {
    try {
        const bookingDetailsId = req.params.id;
        const bookingDetails = await BookingDetails.findOne(bookingDetailsId);
        if (!bookingDetails) {
            throw new ApiError(404, 'Booking details not found');
        }
        res.status(200).json({
            success: true,
            data: bookingDetails,
        });
    } catch (error) {
        if (error instanceof ApiError) {
            throw error;
        }
        throw new ApiError(500, 'Failed to fetch booking details');
    }
});

// Update Booking Details
const updateBookingDetails = asyncHandler(async (req, res) => {
    try {
        const bookingDetailsId = req.params.id;
        const updates = req.body;
        const bookingDetails = await BookingDetails.findOneAndUpdate(bookingDetailsId, updates, { new: true });
        if (!bookingDetails) {
            throw new ApiError(404, 'Booking details not found');
        }
        res.status(200).json({
            success: true,
            data: bookingDetails,
        });
    } catch (error) {
        if (error instanceof ApiError) {
            throw error;
        }
        throw new ApiError(500, 'Failed to update booking details');
    }
});

// Delete Booking Details
const deleteBookingDetails = asyncHandler(async (req, res) => {
    try {
        const bookingDetailsId = req.params.id;
        const bookingDetails = await BookingDetails.findOneAndDelete(bookingDetailsId);
        if (!bookingDetails) {
            throw new ApiError(404, 'Booking details not found');
        }
        res.status(200).json({
            success: true,
            data: bookingDetails,
        });
    } catch (error) {
        if (error instanceof ApiError) {
            throw error;
        }
        throw new ApiError(500, 'Failed to delete booking details');
    }
});

// CRUD operations for Booking History

// Create Booking History
const createBookingHistory = asyncHandler(async (req, res) => {
    try {
        const bookingHistory = await BookingHistory.create(req.body);
        res.status(201).json({
            success: true,
            data: bookingHistory,
        });
    } catch (error) {
        throw new ApiError(500, 'Failed to create booking history');
    }
});

// Get All Booking History
const getAllBookingHistory = asyncHandler(async (req, res) => {
    try {
        const bookingHistory = await BookingHistory.find();
        res.status(200).json({
            success: true,
            data: bookingHistory,
        });
    } catch (error) {
        throw new ApiError(500, 'Failed to fetch booking history');
    }
});

// Get Booking History by ID
const getBookingHistoryById = asyncHandler(async (req, res) => {
    try {
        const bookingHistoryId = req.params.id;
        const bookingHistory = await BookingHistory.findOne(bookingHistoryId);
        if (!bookingHistory) {
            throw new ApiError(404, 'Booking history not found');
        }
        res.status(200).json({
            success: true,
            data: bookingHistory,
        });
    } catch (error) {
        if (error instanceof ApiError) {
            throw error;
        }
        throw new ApiError(500, 'Failed to fetch booking history');
    }
});

// Update Booking History
const updateBookingHistory = asyncHandler(async (req, res) => {
    try {
        const bookingHistoryId = req.params.id;
        const updates = req.body;
        const bookingHistory = await BookingHistory.findOneAndUpdate(bookingHistoryId, updates, { new: true });
        if (!bookingHistory) {
            throw new ApiError(404, 'Booking history not found');
        }
        res.status(200).json({
            success: true,
            data: bookingHistory,
        });
    } catch (error) {
        if (error instanceof ApiError) {
            throw error;
        }
        throw new ApiError(500, 'Failed to update booking history');
    }
});

// Delete Booking History
const deleteBookingHistory = asyncHandler(async (req, res) => {
    try {
        const bookingHistoryId = req.params.id;
        const bookingHistory = await BookingHistory.findOneAndDelete(bookingHistoryId);
        if (!bookingHistory) {
            throw new ApiError(404, 'Booking history not found');
        }
        res.status(200).json({
            success: true,
            data: bookingHistory,
        });
    } catch (error) {
        if (error instanceof ApiError) {
            throw error;
        }
        throw new ApiError(500, 'Failed to delete booking history');
    }
});

export {
    createBookingDetails,
    getAllBookingDetails,
    getBookingDetailsById,
    updateBookingDetails,
    deleteBookingDetails,
    createBookingHistory,
    getAllBookingHistory,
    getBookingHistoryById,
    updateBookingHistory,
    deleteBookingHistory,
};
