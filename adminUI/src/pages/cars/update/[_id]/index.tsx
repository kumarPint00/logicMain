// ** React Imports
import { SyntheticEvent, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router'; 

// ** MUI Imports
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Accordion from '@mui/material/Accordion';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import AccordionSummary from '@mui/material/AccordionSummary';
import {
  AccordionDetails,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Checkbox,
  FormControlLabel,
  Avatar,
} from '@mui/material';

// ** Icons Imports
import ChevronDown from 'mdi-material-ui/ChevronDown';

// ** Styles Import
import 'react-credit-cards/es/styles-compiled.css';

// Styled component for the Box wrappers in Delivery Options' accordion

import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import axios from 'axios';
import { FormControl } from '@mui/material';
import { brandsAndModels, colors } from 'src/lib/brandAmodels';
import data from 'src/@fake-db/components/data';

const CarUpdate = () => {
  const router = useRouter(); 
  const carId  = router.query._id;
  const { register, handleSubmit, setValue } = useForm();
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedVersion, setSelectedVersion] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedColorInterior, setSelectedColorInterior] = useState('');
  const [selectedColorExterior, setSelectedColorExterior] = useState('');
  const [preview, setPreview] = useState(null);
  const [cruiseControl, setCruiseControl] = useState(false);
  const hiddenInputRef = useRef();
  const [carDetails, setCarDetails] = useState(null);
  console.log("🚀 ~ CarUpdate ~ carDetails:", carDetails)
  
  useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/v1/admin/getCarById/${carId}`);
        setCarDetails(response.data.data);
        console.log("🚀 ~ fetchCarDetails ~ response:", response)
        setFormValues(response.data.data);
      } catch (error) {
        console.error('Error fetching car details:', error);
      }
    };

    fetchCarDetails();
  }, [carId]);

  const setFormValues = (data:any) => {
    setSelectedBrand(data.brand);
    setSelectedModel(data.model);
    setSelectedVersion(data.version);
    setSelectedYear(data.year);
    setSelectedColorExterior(data.colourExterior);
    setSelectedColorInterior(data.colourInterior);
    setSelectedColor(data.colour);
    setValue('colour', data.colour);
    setValue('carFeatures', data.carFeatures);
    setValue('gccSpecs', data.gccSpecs);
    setValue('transmission', data.transmission);
    setValue('cruiseControl', data.cruiseControl);
    setValue('FuelType', data.FuelType);
    setValue('engineCapacity', data.engineCapacity);
    setValue('bootCapacity', data.bootCapacity);
    setValue('colourInterior', data.colourInterior);
    setValue('colourExterior', data.colourExterior);
    setValue('category', data.category);
    setValue('location', data.location);
    setValue('vehicleType', data.vehicleType);
    setValue('services', data.services);
    setValue('description', data.description);
    setValue('chargePerDay', data.chargePerDay);
    setValue('allowedNumberOfKMs', data.allowedNumberOfKMs);
    setValue('availableForDailyRental', data.availableForDailyRental);
    setValue('chargePerWeek', data.chargePerWeek);
    setValue('availableForWeeklyRental', data.availableForWeeklyRental);
    setValue('extraMileageCost', data.extraMileageCost);
    setValue('cdwInsurancePerDay', data.cdwInsurancePerDay);
    setValue('securityDeposit', data.securityDeposit);
    setValue('excessClaimAmount', data.excessClaimAmount);
    setValue('deliveryAndPickUpCharges', data.deliveryAndPickUpCharges);
    setValue('specialNoteForCustomers', data.specialNoteForCustomers);
    setValue('oneMonthCharge', data.oneMonthCharge);
    setValue('threeMonthCharge', data.threeMonthCharge);
    setValue('sixMonthCharge', data.sixMonthCharge);
    setValue('NineMonthCharge', data.NineMonthCharge);
    setPreview(data.imageUrl);
    setImagePreviewUrl(data.imageUrl);
  };


  const handleImageUpload = (event) => {
    const file = event.target.files;
    const urlImage = URL.createObjectURL(file[0]);
    if (file) {
      setPreview(urlImage);
      setImagePreviewUrl(file[0]);
    } else {
      setImagePreviewUrl('');
    }
  };

  const onUpload = () => {
    hiddenInputRef.current.click();
  };

  const uploadButtonLabel = preview ? 'Change image' : 'Upload image';

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      Object.keys(data).forEach((key) => {
        if (key !== 'image') {
          formData.append(key, data[key]);
        }
      });
      formData.append('carImages', imagePreviewUrl); // Ensure the file is appended correctly
      formData.append('cruiseControl', cruiseControl);

      const response = await axios.put(`http://localhost:8000/api/v1/admin/updateCarById/${carId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      toast.success('Car updated successfully!', {
        position: 'bottom-right',
      });

      console.log(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const [expanded, setExpanded] = useState('panel1');

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleBrandChange = (event) => {
    setSelectedBrand(event.target.value);
  };

  const handleModelChange = (event) => {
    setSelectedModel(event.target.value);
  };

  const handleVersionChange = (event) => {
    setSelectedVersion(event.target.value);
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  const handleColorChangeInterior = (event) => {
    setSelectedColorInterior(event.target.value);
  };

  const handleColorChangeExterior = (event) => {
    setSelectedColorExterior(event.target.value);
  };

  const filteredModels = brandsAndModels.find((brand) => brand.brand === selectedBrand)?.models || [];
  const versions = ['Version 1', 'Version 2', 'Version 3']; // Example versions, adjust as needed
  const years = Array.from({ length: 50 }, (_, i) => 2023 - i); // Generates years from 2023 to 1973

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ChevronDown />}
          id="form-layouts-collapsible-header-1"
          aria-controls="form-layouts-collapsible-content-1"
        >
          <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
            SELECT CAR
          </Typography>
        </AccordionSummary>
        <Divider sx={{ m: 0 }} />
        <AccordionDetails>
          <Grid container spacing={5}>
            <Grid item xs={6} sm={3}>
              <FormControl fullWidth>
                <InputLabel id="brand-label">Brand</InputLabel>
                <Select
                  labelId="brand-label"
                  id="brand-select"
                  setValue={data.brand}
                  value={selectedBrand}
                  label="Brand"
                  {...register('brand')}
                  onChange={handleBrandChange}
                >
                  <MenuItem value="">Select Brand</MenuItem>
                  {brandsAndModels.map((brandData) => (
                    <MenuItem key={brandData.brand} value={brandData.brand}>
                      {brandData.brand}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6} sm={3}>
              <FormControl fullWidth>
                <InputLabel id="model-label">Model</InputLabel>
                <Select
                  labelId="model-label"
                  id="model-select"
                  value={selectedModel}
                  label="model"
                  {...register('model')}
                  onChange={handleModelChange}
                >
                  <MenuItem value="">Select model</MenuItem>
                  {filteredModels.map((model) => (
                    <MenuItem key={model} value={model}>
                      {model}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6} sm={3}>
              <FormControl fullWidth>
                <InputLabel id="version-label">Version</InputLabel>
                <Select
                  labelId="version-label"
                  id="version-select"
                  value={selectedVersion}
                  label="Version"
                  {...register('version')}
                  onChange={handleVersionChange}
                >
                  <MenuItem value="">Select Version</MenuItem>
                  {versions.map((version) => (
                    <MenuItem key={version} value={version}>
                      {version}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6} sm={3}>
              <FormControl fullWidth>
                <InputLabel id="year-label">Year</InputLabel>
                <Select
                  labelId="year-label"
                  id="year-select"
                  value={selectedYear}
                  label="Year"
                  {...register('year')}
                  onChange={handleYearChange}
                >
                  <MenuItem value="">Select Year</MenuItem>
                  {years.map((year) => (
                    <MenuItem key={year} value={year}>
                      {year}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          id="form-layouts-collapsible-header-2"
          aria-controls="form-layouts-collapsible-content-2"
          expandIcon={<ChevronDown />}
        >
          <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
            CAR INFO
          </Typography>
        </AccordionSummary>
        <Divider sx={{ m: 0 }} />
        <AccordionDetails>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                multiline
                label="Car Features"
                {...register('carFeatures')}
                placeholder="Car Features"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <InputLabel id="colour-label">Colour</InputLabel>
                <Select
                  labelId="colour-label"
                  id="colour-select"
                  value={selectedColor}
                  label="Colour"
                  {...register('colour')}
                  onChange={handleColorChange}
                >
                  {colors.map((color) => (
                    <MenuItem key={color} value={color}>
                      {color}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={cruiseControl}
                    {...register('cruiseControl')}
                    onChange={(e) => setCruiseControl(e.target.checked)}
                  />
                }
                label="Cruise Control"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                multiline
                label="Fuel Type"
                {...register('FuelType')}
                placeholder="Fuel Type"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                multiline
                label="Engine Capacity"
                {...register('engineCapacity')}
                placeholder="Engine Capacity"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                multiline
                label="Boot Capacity"
                {...register('bootCapacity')}
                placeholder="Boot Capacity"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <InputLabel id="interior-colour-label">Interior Colour</InputLabel>
                <Select
                  labelId="interior-colour-label"
                  id="interior-colour-select"
                  value={selectedColorInterior}
                  label="Interior Colour"
                  {...register('colourInterior')}
                  onChange={handleColorChangeInterior}
                >
                  {colors.map((color) => (
                    <MenuItem key={color} value={color}>
                      {color}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <InputLabel id="exterior-colour-label">Exterior Colour</InputLabel>
                <Select
                  labelId="exterior-colour-label"
                  id="exterior-colour-select"
                  value={selectedColorExterior}
                  label="Exterior Colour"
                  {...register('colourExterior')}
                  onChange={handleColorChangeExterior}
                >
                  {colors.map((color) => (
                    <MenuItem key={color} value={color}>
                      {color}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          id="form-layouts-collapsible-header-3"
          aria-controls="form-layouts-collapsible-content-3"
          expandIcon={<ChevronDown />}
        >
          <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
            RENTAL INFO
          </Typography>
        </AccordionSummary>
        <Divider sx={{ m: 0 }} />
        <AccordionDetails>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                multiline
                label="Charge Per Day"
                {...register('chargePerDay')}
                placeholder="Charge Per Day"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                multiline
                label="Allowed Number Of KMs"
                {...register('allowedNumberOfKMs')}
                placeholder="Allowed Number Of KMs"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                multiline
                label="Charge Per Week"
                {...register('chargePerWeek')}
                placeholder="Charge Per Week"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                multiline
                label="Extra Mileage Cost"
                {...register('extraMileageCost')}
                placeholder="Extra Mileage Cost"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                multiline
                label="CDW Insurance Per Day"
                {...register('cdwInsurancePerDay')}
                placeholder="CDW Insurance Per Day"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                multiline
                label="Security Deposit"
                {...register('securityDeposit')}
                placeholder="Security Deposit"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                multiline
                label="Excess Claim Amount"
                {...register('excessClaimAmount')}
                placeholder="Excess Claim Amount"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                multiline
                label="Delivery And Pick-Up Charges"
                {...register('deliveryAndPickUpCharges')}
                placeholder="Delivery And Pick-Up Charges"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                multiline
                label="Special Note For Customers"
                {...register('specialNoteForCustomers')}
                placeholder="Special Note For Customers"
              />
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          id="form-layouts-collapsible-header-4"
          aria-controls="form-layouts-collapsible-content-4"
          expandIcon={<ChevronDown />}
        >
          <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
            RENTAL INFO
          </Typography>
        </AccordionSummary>
        <Divider sx={{ m: 0 }} />
        <AccordionDetails>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                multiline
                label="One Month Charge"
                {...register('oneMonthCharge')}
                placeholder="One Month Charge"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                multiline
                label="Three Month Charge"
                {...register('threeMonthCharge')}
                placeholder="Three Month Charge"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                multiline
                label="Six Month Charge"
                {...register('sixMonthCharge')}
                placeholder="Six Month Charge"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                multiline
                label="Nine Month Charge"
                {...register('NineMonthCharge')}
                placeholder="Nine Month Charge"
              />
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
          id="form-layouts-collapsible-header-5"
          aria-controls="form-layouts-collapsible-content-5"
          expandIcon={<ChevronDown />}
        >
          <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
            IMAGE UPLOAD
          </Typography>
        </AccordionSummary>
        <Divider sx={{ m: 0 }} />
        <AccordionDetails>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <input
                type="file"
                accept="image/*"
                id="image"
                name="image"
                onChange={handleImageUpload}
                style={{ display: 'none' }}
                ref={hiddenInputRef}
              />
              <Box display="flex" alignItems="center">
                <Button variant="contained" component="span" onClick={onUpload}>
                  {uploadButtonLabel}
                </Button>
                <Box ml={2}>
                  {preview && <Avatar alt="Car Preview" src={preview} sx={{ width: 64, height: 64 }} />}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Box mt={3}>
        <Button type="submit" variant="contained" color="primary">
          Update Car
        </Button>
      </Box>
    </form>
  );

}

export default CarUpdate;

