import { ApiResponse } from '../utils/ApiResponse.js';
import { ApiError } from '../utils/ApiError.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import Wallet from '../models/wallet.model.js';

// Create a new wallet
const createWallet = asyncHandler(async (req, res) => {
    const { userId, balance } = req.body;
    const newWallet = await Wallet.create({ userId, balance });
    res.status(201).json(new ApiResponse(201, newWallet, 'Wallet created successfully'));
});

// Retrieve all wallets
const getAllWallets = asyncHandler(async (req, res) => {
    const wallets = await Wallet.find();
    res.status(200).json(new ApiResponse(200, wallets, 'Wallets retrieved successfully'));
});

// Retrieve a wallet by user ID
const getWalletByUserId = asyncHandler(async (req, res) => {
    const userId = req.params.userId;
    const wallet = await Wallet.findOne({ userId });
    if (!wallet) {
        throw new ApiError(404, 'Wallet not found');
    }
    res.status(200).json(new ApiResponse(200, wallet, 'Wallet retrieved successfully'));
});

// Update a wallet by user ID
const updateWalletByUserId = asyncHandler(async (req, res) => {
    const userId = req.params.userId;
    const updates = req.body;
    const updatedWallet = await Wallet.findOneAndUpdate({ userId }, updates, { new: true });
    if (!updatedWallet) {
        throw new ApiError(404, 'Wallet not found');
    }
    res.status(200).json(new ApiResponse(200, updatedWallet, 'Wallet updated successfully'));
});

const deleteWalletByUserId = asyncHandler(async (req, res) => {
    const userId = req.params.userId;
    const updates = req.body;
    const updatedWallet = await Wallet.findOneAndUpdate({ userId }, updates, { new: true });
    if (!updatedWallet) {
        throw new ApiError(404, 'Wallet not found');
    }
    res.status(200).json(new ApiResponse(200, updatedWallet, 'Wallet updated successfully'));
});

export { createWallet, getAllWallets, getWalletByUserId, updateWalletByUserId,deleteWalletByUserId };
