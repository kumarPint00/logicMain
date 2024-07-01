import React, { useState } from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { FormControl, InputLabel, Select, MenuItem, Grid, TextField, Checkbox, FormControlLabel, Box, Typography } from '@mui/material';
import { colors } from 'src/lib/brandAmodels';

const CarSpecs: React.FC = () => {
  const { control, register } = useFormContext();
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedColorInterior, setSelectedColorInterior] = useState('');
  const [selectedColorExterior, setSelectedColorExterior] = useState('');
  const [cruiseControl, setCruiseControl] = useState(false);

  const handleColorChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedColor(event.target.value as string);
  };

  const handleColorChangeInterior = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedColorInterior(event.target.value as string);
  }

  const handleColorChangeExterior = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedColorExterior(event.target.value as string);
  }

  return (
    <>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={3}>
          <FormControl fullWidth>
            <InputLabel id="colour-label">Available Colours</InputLabel>
            <Controller
              name="colour"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  labelId="colour-label"
                  id="colour-select"
                  value={selectedColor}
                  label="colour"
                  onChange={(e) => {
                    handleColorChange(e);
                    field.onChange(e);
                  }}
                >
                  <MenuItem value="">Select colour</MenuItem>
                  {colors.map((color) => (
                    <MenuItem key={color} value={color} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Box display="flex">
                        <Box sx={{ backgroundColor: color, width: 20, height: 20 }} />
                        <Typography variant="body2" sx={{ ml: 1, color: color }}>
                          {color}
                        </Typography>
                      </Box>
                    </MenuItem>
                  ))}
                </Select>
              )}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField fullWidth label='Car Features' placeholder='Car Features' {...register('carFeatures')} />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField fullWidth label='GCC Specs' placeholder='GCC Specs' {...register('gccSpecs')} />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField fullWidth label='Transmission' placeholder='Transmission' {...register('transmission')} />
        </Grid>
        <Grid item xs={12} sm={3}>
          <FormControlLabel
            control={
              <Checkbox
                checked={cruiseControl}
                {...register('cruiseControl')}
                onChange={(e) => {
                  setCruiseControl(e.target.checked);
                }}
              />
            }
            label="Cruise controls"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField fullWidth label='Fuel Type' placeholder='Fuel Type' {...register('FuelType')} />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField fullWidth label='Engine Capacity' placeholder='Engine Capacity' {...register('engineCapacity')} />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField fullWidth label='Boot Capacity' placeholder='Boot Capacity' {...register('bootCapacity')} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel id="colour-label-interior">Interior Colors</InputLabel>
            <Controller
              name="colourInterior"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  labelId="colour-label-interior"
                  id="colour-select-interior"
                  value={selectedColorInterior}
                  label="colourInterior"
                  onChange={(e) => {
                    handleColorChangeInterior(e);
                    field.onChange(e);
                  }}
                >
                  <MenuItem value="">Select colour</MenuItem>
                  {colors.map((color) => (
                    <MenuItem key={color} value={color} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Box display="flex">
                        <Box sx={{ backgroundColor: color, width: 20, height: 20 }} />
                        <Typography variant="body2" sx={{ ml: 1, color: color }}>
                          {color}
                        </Typography>
                      </Box>
                    </MenuItem>
                  ))}
                </Select>
              )}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel id="colour-label-exterior">Exterior Colors</InputLabel>
            <Controller
              name="colourExterior"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  labelId="colour-label-exterior"
                  id="colour-select-exterior"
                  value={selectedColorExterior}
                  label="colourExterior"
                  onChange={(e) => {
                    handleColorChangeExterior(e);
                    field.onChange(e);
                  }}
                >
                  <MenuItem value="">Select colour</MenuItem>
                  {colors.map((color) => (
                    <MenuItem key={color} value={color} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Box display="flex">
                        <Box sx={{ backgroundColor: color, width: 20, height: 20 }} />
                        <Typography variant="body2" sx={{ ml: 1, color: color }}>
                          {color}
                        </Typography>
                      </Box>
                    </MenuItem>
                  ))}
                </Select>
              )}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label='Category' placeholder='Category' {...register('category')} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label='Location' placeholder='Location' {...register('location')} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label='Vehicle Type' placeholder='Vehicle Type' {...register('vehicleType')} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label='Services' placeholder='Services' {...register('services')} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label='Description' placeholder='Description' {...register('description')} />
        </Grid>
      </Grid>
    </>
  );
};

export default CarSpecs;
