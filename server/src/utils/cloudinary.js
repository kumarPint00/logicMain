import { v2 as cloudinary  } from "cloudinary";

import fs from "fs";

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });
cloudinary.config({
  cloud_name: 'dxugybfqn',
  api_key: '433682319898571',
  api_secret: 'wSCEHETlGre52RCI-JHgCA03SQY',
});
// console.log("cloudinary", cloudinary)

export const uploadOnCloudinary = async (localFilePath) => {
  try {
    console.log({ localFilePath });
    if (!localFilePath) return null;

    // Upload the file on Cloudinary
    // const response = await cloudinary.uploader
    // .upload(localFilePath, 
    //   {resource_type: "image", folder: "uploads", transformation: {width: 500, height: 500, crop: "fill"}, public_id: "uploads/mysubfolder/my_dog",
    //   overwrite: true, notification_url: "https://mysite.example.com/notify_endpoint"})
    // .then(result=>console.log(result));

    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    // Log success message and delete the locally saved file
    console.log("file is uploaded on Cloudinary ", response.url);
    // fs.unlinkSync(localFilePath);
    
    return response;
  } catch (error) {
    // Remove the locally saved temporary file as the upload operation failed
    fs.unlinkSync(localFilePath);
    return null;
  }
};
