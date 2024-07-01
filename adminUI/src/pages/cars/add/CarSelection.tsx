import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { FormControl, InputLabel, Select, MenuItem, Grid } from '@mui/material'
import { brandsAndModels } from 'src/lib/brandAmodels'

const CarSelection = () => {
  const { control, watch, setValue } = useFormContext();

  const selectedBrand = watch('brand', '');
  const selectedModel = watch('model', '');
  const selectedVersion = watch('version', '');
  const selectedYear = watch('year', '');

  const filteredModels = brandsAndModels.find(brand => brand.brand === selectedBrand)?.models || [];
  const versions = ['Version 1', 'Version 2', 'Version 3'];
  const years = Array.from({ length: 50 }, (_, i) => 2023 - i);

  const handleBrandChange = (event) => {
    setValue('brand', event.target.value);
    setValue('model', '');
  };

  return (
    <Grid container spacing={5}>
      <Grid item xs={6} sm={3}>
        <FormControl fullWidth>
          <InputLabel id='brand-label'>Brand</InputLabel>
          <Controller
            name="brand"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                labelId='brand-label'
                id='brand-select'
                label='Brand'
                onChange={handleBrandChange}
              >
                <MenuItem value=''>Select Brand</MenuItem>
                {brandsAndModels.map((brandData) => (
                  <MenuItem key={brandData.brand} value={brandData.brand}>
                    {brandData.brand} 
                  </MenuItem>
                ))}
              </Select>
            )}
          />
        </FormControl>
      </Grid>
      <Grid item xs={6} sm={3}>
        <FormControl fullWidth>
          <InputLabel id='model-label'>Model</InputLabel>
          <Controller
            name="model"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                labelId='model-label'
                id='model-select'
                label='Model'
              >
                <MenuItem value=''>Select Model</MenuItem>
                {filteredModels.map((model) => (
                  <MenuItem key={model} value={model}>
                    {model}
                  </MenuItem>
                ))}
              </Select>
            )}
          />
        </FormControl>
      </Grid>
      <Grid item xs={6} sm={3}>
        <FormControl fullWidth>
          <InputLabel id='version-label'>Version</InputLabel>
          <Controller
            name="version"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                labelId='version-label'
                id='version-select'
                label='Version'
              >
                <MenuItem value=''>Select Version</MenuItem>
                {versions.map((version) => (
                  <MenuItem key={version} value={version}>
                    {version}
                  </MenuItem>
                ))}
              </Select>
            )}
          />
        </FormControl>
      </Grid>
      <Grid item xs={6} sm={3}>
        <FormControl fullWidth>
          <InputLabel id='year-label'>Year</InputLabel>
          <Controller
            name="year"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                labelId='year-label'
                id='year-select'
                label='Year'
              >
                <MenuItem value=''>Select Year</MenuItem>
                {years.map((year) => (
                  <MenuItem key={year} value={year}>
                    {year}
                  </MenuItem>
                ))}
              </Select>
            )}
          />
        </FormControl>
      </Grid>
    </Grid>
  )
}

export default CarSelection;
