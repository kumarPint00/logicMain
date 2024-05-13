import { ApiResponse } from '../utils/ApiResponse.js';
import { ApiError } from '../utils/ApiError.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import PromoCode from '../models/promocode.model.js';

// Create a new promo code
const createPromoCode = asyncHandler(async (req, res) => {
    const { code, discount, expiryDate } = req.body;
    const newPromoCode = await PromoCode.create({ code, discount, expiryDate });
    res.status(201).json(new ApiResponse(201, newPromoCode, 'Promo code created successfully'));
});

// Retrieve all promo codes
const getAllPromoCodes = asyncHandler(async (req, res) => {
    const promoCodes = await PromoCode.find();
    res.status(200).json(new ApiResponse(200, promoCodes, 'Promo codes retrieved successfully'));
});

// Retrieve a promo code by ID
const getPromoCodeById = asyncHandler(async (req, res) => {
    const promoCodeId = req.params.id;
    const promoCode = await PromoCode.findOne(promoCodeId);
    if (!promoCode) {
        throw new ApiError(404, 'Promo code not found');
    }
    res.status(200).json(new ApiResponse(200, promoCode, 'Promo code retrieved successfully'));
});

// Update a promo code by ID
const updatePromoCodeById = asyncHandler(async (req, res) => {
    const promoCodeId = req.params.id;
    const updates = req.body;
    const updatedPromoCode = await PromoCode.findOneAndUpdate(promoCodeId, updates, { new: true });
    if (!updatedPromoCode) {
        throw new ApiError(404, 'Promo code not found');
    }
    res.status(200).json(new ApiResponse(200, updatedPromoCode, 'Promo code updated successfully'));
});

// Delete a promo code by ID
const deletePromoCodeById = asyncHandler(async (req, res) => {
    const promoCodeId = req.params.id;
    const deletedPromoCode = await PromoCode.findOneAndDelete(promoCodeId);
    if (!deletedPromoCode) {
        throw new ApiError(404, 'Promo code not found');
    }
    res.status(200).json(new ApiResponse(200, deletedPromoCode, 'Promo code deleted successfully'));
});

export { createPromoCode, getAllPromoCodes, getPromoCodeById, updatePromoCodeById, deletePromoCodeById };
