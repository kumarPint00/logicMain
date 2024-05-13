import { ApiResponse } from '../utils/ApiResponse.js';
import { ApiError } from '../utils/ApiError.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import Address from '../models/address.model.js';

// Create a new address
const createAddress = asyncHandler(async (req, res) => {
    const {  street, city, state, country, zipCode } = req.body;
    
    const newAddress = await Address.create({  street, city, state, country, zipCode });
    res.status(201).json(new ApiResponse(201, newAddress, 'Address created successfully'));
});

// Retrieve an address by ID
const getAddressById = asyncHandler(async (req, res) => {
    const addressId = req.params.id;
    const address = await Address.findOne(addressId);
    if (!address) {
        throw new ApiError(404, 'Address not found');
    }
    res.status(200).json(new ApiResponse(200, address, 'Address retrieved successfully'));
});

const getAllAddress = asyncHandler(async (req, res) => {
    const address = await Address.find();
    if (!address) {
        throw new ApiError(404, 'Address not found');
    }
    res.status(200).json(new ApiResponse(200, address, 'Address retrieved successfully'));
});


// Update an address by ID
const updateAddressById = asyncHandler(async (req, res) => {
    const addressId = req.params.id;
    const updates = req.body;
    const updatedAddress = await Address.findOneAndUpdate(addressId, updates, { new: true });
    if (!updatedAddress) {
        throw new ApiError(404, 'Address not found');
    }
    res.status(200).json(new ApiResponse(200, updatedAddress, 'Address updated successfully'));
});

// Delete an address by ID
const deleteAddressById = asyncHandler(async (req, res) => {
    const addressId = req.params.id;
    const deletedAddress = await Address.findOneAndDelete(addressId);
    if (!deletedAddress) {
        throw new ApiError(404, 'Address not found');
    }
    res.status(200).json(new ApiResponse(200, deletedAddress, 'Address deleted successfully'));
});

export { createAddress, getAddressById,getAllAddress, updateAddressById, deleteAddressById };
