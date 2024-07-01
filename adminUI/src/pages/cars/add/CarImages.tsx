import React, { useRef, useState } from 'react';
import { Grid, Button, Typography } from '@mui/material';
import { useFormContext } from 'react-hook-form';

interface CarImagesProps {
  setCarImagesData: (image: File) => void;
}

const CarImages: React.FC<CarImagesProps> = ({ setCarImagesData }) => {
  const { register, setValue } = useFormContext();
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const hiddenInputRef = useRef<HTMLInputElement | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    console.log("🚀 ~ handleImageUpload ~ file:", file)
    if (file) {
      const urlImage = URL.createObjectURL(file);
      setPreview(urlImage);
      setImagePreviewUrl(file.name);
      setValue('carImage', file);
      setCarImagesData(file);
    } else {
      setImagePreviewUrl(null);
      setPreview(null);
    }
  };

  const onUpload = () => {
    hiddenInputRef.current?.click();
  };

  const uploadButtonLabel = preview ? "Change image" : "Upload image";

  return (
    <Grid container spacing={5}>
      <Grid item xs={6}>
        {preview ? (
          <img src={preview} style={{ width: '200px', height: '200px' }} alt="preview" />
        ) : (
          <Typography>Preview</Typography>
        )}
      </Grid>
      <Grid item xs={6}>
        <Button variant="contained" color="primary" onClick={onUpload}>
          {uploadButtonLabel}
        </Button>
        <input
          type="file"
          style={{ display: 'none' }}
          {...register('carImage')}
          ref={hiddenInputRef}
          onChange={handleImageUpload}
          name="image"
        />
      </Grid>
    </Grid>
  );
};

export default CarImages;
