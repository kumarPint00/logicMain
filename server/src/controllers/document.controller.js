import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import Document from "../models/document.model.js";
import multer from "multer";
import cloudinary from "cloudinary";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

// Create Document
const createDocument = asyncHandler(async (req, res) => {
  try {
    if (!req.files?.documentImages) {
      throw new ApiError(400, "Please upload a document");
    }

    const documentImagePath = req.files?.documentImages[0]?.path;

    if (!documentImagePath) {
      throw new ApiError(400, "document image is required");
    }
    const documentImage = await uploadOnCloudinary(documentImagePath);
    if (!documentImage) {
      throw new ApiError(400, "document image upload failed");
    }
    const { name, type, size } = req.body;
    // const result = await uploadOnCloudinary(req.file.path);
    const document = await Document.create({
      name: req.files?.documentImages[0]?.originalname,
      type: req.files?.documentImages[0]?.mimetype,
      size: req.files?.documentImages[0]?.size,
      url: documentImage.url,
      // uploadedBy: req.user._id, // Assuming user ID is available in req.user
    });

    res.status(201).json({
      success: true,
      data: document,
    });
  } catch (error) {
    throw new ApiError(500, "Failed to create document");
  }
});

// Get All Documents
const getAllDocuments = asyncHandler(async (req, res) => {
  try {
    const documents = await Document.find();
    res.status(200).json({
      success: true,
      data: documents,
    });
  } catch (error) {
    throw new ApiError(500, "Failed to fetch documents");
  }
});

// Get Document by ID
const getDocumentById = asyncHandler(async (req, res) => {
  try {
    const documentId = req.params.id;
    const document = await Document.findOne(documentId);
    if (!document) {
      throw new ApiError(404, "Document not found");
    }
    res.status(200).json({
      success: true,
      data: document,
    });
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    throw new ApiError(500, "Failed to fetch document");
  }
});

// Update Document by ID (Assuming no need to update the document itself, only metadata)
const updateDocumentById = asyncHandler(async (req, res) => {
  // try {
  const documentId = req.body.id;
  console.log({ documentId });
  const updates = req.body;
  const document = await Document.findById(documentId);
  if (!document) {
    throw new ApiError(404, "Document not found");
  }

  // Handle document upload
  if (req.files?.documentImages) {
    const documentImagePath = req.files.documentImages[0].path;
    console.log({ documentImagePath });
    const documentImage = await uploadOnCloudinary(documentImagePath);
    if (!documentImage) {
      throw new ApiError(400, "Failed to upload document image");
    }
    // Update document details
    document.name = req.files.documentImages[0].originalname;
    document.type = req.files.documentImages[0].mimetype;
    document.size = req.files.documentImages[0].size;
    document.url = documentImage.url;
  }

  // Update other document details
  for (let key in updates) {
    document[key] = updates[key];
  }

  // Save the updated document
  await document.save();

  res.status(200).json({
    success: true,
    data: document,
    message: "Document updated successfully",
  });
  // } catch (error) {
  //     throw new ApiError(500, 'Failed to update document');
  // }
});

// Delete Document by ID
const deleteDocumentById = asyncHandler(async (req, res) => {
  try {
    const documentId = req.params.id;
    const document = await Document.findOneAndDelete({ _id: documentId });
    if (!document) {
      throw new ApiError(404, "Document not found");
    }
    res.status(200).json({
      success: true,
      data: document,
    });
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    throw new ApiError(500, "Failed to delete document");
  }
});

export {
  createDocument,
  getAllDocuments,
  getDocumentById,
  updateDocumentById,
  deleteDocumentById,
};
