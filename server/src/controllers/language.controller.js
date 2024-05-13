import { ApiResponse } from '../utils/ApiResponse.js';
import { ApiError } from '../utils/ApiError.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import Language from '../models/language.model.js';

// Create a new language
const createLanguage = asyncHandler(async (req, res) => {
    const { name, code } = req.body;
    const newLanguage = await Language.create({ name, code });
    res.status(201).json(new ApiResponse(201, newLanguage, 'Language created successfully'));
});

// Retrieve all languages
const getAllLanguages = asyncHandler(async (req, res) => {
    const languages = await Language.find();
    res.status(200).json(new ApiResponse(200, languages, 'Languages retrieved successfully'));
});

// Retrieve a language by ID
const getLanguageById = asyncHandler(async (req, res) => {
    const languageId = req.params.id;
    const language = await Language.findOne(languageId);
    if (!language) {
        throw new ApiError(404, 'Language not found');
    }
    res.status(200).json(new ApiResponse(200, language, 'Language retrieved successfully'));
});

// Update a language by ID
const updateLanguageById = asyncHandler(async (req, res) => {
    const languageId = req.params.id;
    const updates = req.body;
    const updatedLanguage = await Language.findOneAndUpdate(languageId, updates, { new: true });
    if (!updatedLanguage) {
        throw new ApiError(404, 'Language not found');
    }
    res.status(200).json(new ApiResponse(200, updatedLanguage, 'Language updated successfully'));
});

// Delete a language by ID
const deleteLanguageById = asyncHandler(async (req, res) => {
    const languageId = req.params.id;
    const deletedLanguage = await Language.findOneAndDelete(languageId);
    if (!deletedLanguage) {
        throw new ApiError(404, 'Language not found');
    }
    res.status(200).json(new ApiResponse(200, deletedLanguage, 'Language deleted successfully'));
});

export { createLanguage, getAllLanguages, getLanguageById, updateLanguageById, deleteLanguageById };
