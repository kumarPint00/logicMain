import Location from '../models/location.model.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { ApiError } from '../utils/ApiError.js';
import { asyncHandler } from '../utils/asyncHandler.js';

// @desc    Create a new location
// @route   POST /api/locations
// @access  Public
const createLocation = asyncHandler(async (req, res) => {
    const { name, address, city, state, country, zipCode } = req.body;
    
    const location = await Location.create({
        name,
        address,
        city,
        state,
        country,
        zipCode
    });

    res.status(201).json(new ApiResponse(201, location, 'Location created successfully'));
});

// @desc    Get all locations
// @route   GET /api/locations
// @access  Public
const getAllLocations = asyncHandler(async (req, res) => {
    const locations = await Location.find();
    res.status(200).json(new ApiResponse(200, locations, 'Locations retrieved successfully'));
});

// @desc    Get a location by ID
// @route   GET /api/locations/:id
// @access  Public
const getLocationById = asyncHandler(async (req, res) => {
    const locationId = req.params.id;
    const location = await Location.findOne(locationId);
    if (!location) {
        throw new ApiError(404, 'Location not found');
    }
    res.status(200).json(new ApiResponse(200, location, 'Location retrieved successfully'));
});

// @desc    Update a location by ID
// @route   PUT /api/locations/:id
// @access  Public
const updateLocationById = asyncHandler(async (req, res) => {
    const locationId = req.params.id;
    const updates = req.body;
    const location = await Location.findOneAndUpdate(locationId, updates, { new: true });
    if (!location) {
        throw new ApiError(404, 'Location not found');
    }
    res.status(200).json(new ApiResponse(200, location, 'Location updated successfully'));
});

// @desc    Delete a location by ID
// @route   DELETE /api/locations/:id
// @access  Public
const deleteLocationById = asyncHandler(async (req, res) => {
    const locationId = req.params.id;
    const location = await Location.findOneAndDelete(locationId);
    if (!location) {
        throw new ApiError(404, 'Location not found');
    }
    res.status(200).json(new ApiResponse(200, location, 'Location deleted successfully'));
});

export { createLocation, getAllLocations, getLocationById, updateLocationById, deleteLocationById };
