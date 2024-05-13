import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import jwt from "jsonwebtoken";
import { CarProvider } from "../models/admin.model.js";

const generateAccessAndRefreshTokens = async (ProviderId) => {
    try {
        const Provider = await Provider.findOne(ProviderId);
        const accessToken = Provider.generateAccessToken();
        const refreshToken = Provider.generateRefreshToken();

        Provider.refreshToken = refreshToken;
        await Provider.save({ validateBeforeSave: false });

        return { accessToken, refreshToken };
    } catch (error) {
        throw new ApiError(500, "Something went wrong while generating refresh and access tokens");
    }
};

const registerProvider = asyncHandler(async (req, res) => {
    const { fullName, email,contactInformation, Providername, password } = req.body;

    if (![fullName, email, contactInformation, Providername, password].every(field => field?.trim())) {
        throw new ApiError(400, "All fields are required");
    }
    

    const existedProvider = await Provider.findOne({ $or: [{ Providername }, { email }] });
    if (existedProvider) {
        throw new ApiError(409, "Provider with email or Providername already exists");
    }

    const avatarLocalPath = req.files?.avatar[0]?.path;
    console.log({avatarLocalPath})
    // let coverImageLocalPath;
    // if (req.files && Array.isArray(req.files.coverImage) && req.files.coverImage.length > 0) {
    //     coverImageLocalPath = req.files.coverImage[0].path;
    // }

    // if (!avatarLocalPath) {
    //     throw new ApiError(400, "Avatar file is required");
    // }

    // const avatar = await uploadOnCloudinary(avatarLocalPath);
    // // const coverImage = await uploadOnCloudinary(coverImageLocalPath);

    // if (!avatar) {
    //     throw new ApiError(400, "Avatar upload failed");
    // }
    // await sendWhatsAppNotification({fullName, email, contactInformation, Providername, password});
    const Provider = await CarProvider.create({
        fullName,
        avatar: avatarLocalPath || "",
        // coverImage: coverImage?.url || "",
        email,
        password,
        contactInformation,
        Providername: Providername.toLowerCase(),
    });

    const createdCarProvider = await CarProvider.findOne(carProvider._id).select("-password -refreshToken");
    if (!createdCarProvider) {
        throw new ApiError(500, "Error while registering the Provider");
    }

    return res.status(201).json(new ApiResponse(200, createdCarProvider, "Provider registered successfully"));
});

const loginProvider = asyncHandler(async (req, res) => {
    const { email, Providername, password } = req.body;

    if (!Providername && !email) {
        throw new ApiError(400, "Providername or email is required");
    }

    const Provider = await Provider.findOne({ $or: [{ Providername }, { email }] });
    if (!Provider) {
        throw new ApiError(404, "Provider does not exist");
    }

    const isPasswordValid = await Provider.isPasswordCorrect(password);
    if (!isPasswordValid) {
        throw new ApiError(401, "Invalid Provider credentials");
    }

    const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(Provider._id);

    const loggedInProvider = await Provider.findOne(Provider._id).select("-password -refreshToken");

    const options = { httpOnly: true, secure: true };

    return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json(new ApiResponse(200, { Provider: loggedInProvider, accessToken, refreshToken }, "Provider logged in successfully"));
});

const logoutProvider = asyncHandler(async (req, res) => {
    await Provider.findOneAndUpdate(req.Provider._id, { $unset: { refreshToken: 1 } }, { new: true });

    const options = { httpOnly: true, secure: true };

    return res
        .status(200)
        .clearCookie("accessToken", options)
        .clearCookie("refreshToken", options)
        .json(new ApiResponse(200, {}, "Provider logged out"));
});

const refreshAccessToken = asyncHandler(async (req, res) => {
    const incomingRefreshToken = req.cookies.refreshToken || req.body.refreshToken;

    if (!incomingRefreshToken) {
        throw new ApiError(401, "Unauthorized request");
    }

    try {
        const decodedToken = jwt.verify(incomingRefreshToken, process.env.REFRESH_TOKEN_SECRET);
        const Provider = await Provider.findOne(decodedToken?._id);

        if (!Provider || incomingRefreshToken !== Provider?.refreshToken) {
            throw new ApiError(401, "Invalid refresh token");
        }

        const options = { httpOnly: true, secure: true };
        const { accessToken, newRefreshToken } = await generateAccessAndRefreshTokens(Provider._id);

        return res
            .status(200)
            .cookie("accessToken", accessToken, options)
            .cookie("refreshToken", newRefreshToken, options)
            .json(new ApiResponse(200, { accessToken, refreshToken: newRefreshToken }, "Access token refreshed"));
    } catch (error) {
        throw new ApiError(401, error?.message || "Invalid refresh token");
    }
});

const changeCurrentPassword = asyncHandler(async (req, res) => {
    const { oldPassword, newPassword } = req.body;
    const Provider = await Provider.findOne(req.Provider?._id);

    const isPasswordCorrect = await Provider.isPasswordCorrect(oldPassword);
    if (!isPasswordCorrect) {
        throw new ApiError(400, "Invalid old password");
    }

    Provider.password = newPassword;
    await Provider.save({ validateBeforeSave: false });

    return res.status(200).json(new ApiResponse(200, {}, "Password changed successfully"));
});

const getCurrentProvider = asyncHandler(async (req, res) => {
    return res.status(200).json(new ApiResponse(200, req.Provider, "Provider fetched successfully"));
});

const updateAccountDetails = asyncHandler(async (req, res) => {
    const { fullName, email } = req.body;

    if (!fullName || !email) {
        throw new ApiError(400, "All fields are required");
    }

    const Provider = await Provider.findOneAndUpdate(req.Provider?._id, { $set: { fullName, email } }, { new: true }).select("-password");
    return res.status(200).json(new ApiResponse(200, Provider, "Account details updated successfully"));
});

const updateProviderAvatar = asyncHandler(async (req, res) => {
    const avatarLocalPath = req.file?.path;

    if (!avatarLocalPath) {
        throw new ApiError(400, "Avatar file is missing");
    }

    const avatar = await uploadOnCloudinary(avatarLocalPath);
    if (!avatar.url) {
        throw new ApiError(400, "Error while uploading avatar");
    }

    const Provider = await Provider.findOneAndUpdate(req.Provider?._id, { $set: { avatar: avatar.url } }, { new: true }).select("-password");
    return res.status(200).json(new ApiResponse(200, Provider, "Avatar image updated successfully"));
});

const getAllProviders = asyncHandler(async (req, res) => {
    const Providers = await Provider.find().select("-password -refreshToken");
    return res.status(200).json(new ApiResponse(200, Providers, "All Providers fetched successfully"));
});

const getProviderById = asyncHandler(async (req, res) => {
    const ProviderId = req.params.ProviderId;
    const Provider = await Provider.findOne(ProviderId).select("-password -refreshToken");
    if (!Provider) {
        throw new ApiError(404, "Provider not found");
    }
    return res.status(200).json(new ApiResponse(200, Provider, "Provider details fetched successfully"));
});


export {
    registerProvider,
    loginProvider,
    logoutProvider,
    refreshAccessToken,
    changeCurrentPassword,
    getCurrentProvider,
    updateAccountDetails,
    updateProviderAvatar,
    getAllProviders,
    getProviderById
};
