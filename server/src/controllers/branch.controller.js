import { ApiResponse } from '../utils/ApiResponse.js';
import { ApiError } from '../utils/ApiError.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import Branch from '../models/branch.model.js';

// Create a new branch
const createBranch = asyncHandler(async (req, res) => {
    const { name, location, contact } = req.body;
    const newBranch = await Branch.create({ name, location, contact });
    res.status(201).json(new ApiResponse(201, newBranch, 'Branch created successfully'));
});

// Retrieve all branches
const getAllBranches = asyncHandler(async (req, res) => {
    const branches = await Branch.find();
    res.status(200).json(new ApiResponse(200, branches, 'Branches retrieved successfully'));
});

// Retrieve a branch by ID
const getBranchById = asyncHandler(async (req, res) => {
    const branchId = req.params.id;
    const branch = await Branch.findOne(branchId);
    if (!branch) {
        throw new ApiError(404, 'Branch not found');
    }
    res.status(200).json(new ApiResponse(200, branch, 'Branch retrieved successfully'));
});

// Update a branch by ID
const updateBranchById = asyncHandler(async (req, res) => {
    const branchId = req.params.id;
    const updates = req.body;
    const updatedBranch = await Branch.findOneAndUpdate(branchId, updates, { new: true });
    if (!updatedBranch) {
        throw new ApiError(404, 'Branch not found');
    }
    res.status(200).json(new ApiResponse(200, updatedBranch, 'Branch updated successfully'));
});

// Delete a branch by ID
const deleteBranchById = asyncHandler(async (req, res) => {
    const branchId = req.params.id;
    const deletedBranch = await Branch.findOneAndDelete(branchId);
    if (!deletedBranch) {
        throw new ApiError(404, 'Branch not found');
    }
    res.status(200).json(new ApiResponse(200, deletedBranch, 'Branch deleted successfully'));
});

export { createBranch, getAllBranches, getBranchById, updateBranchById, deleteBranchById };
