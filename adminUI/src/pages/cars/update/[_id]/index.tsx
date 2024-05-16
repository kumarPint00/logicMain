// ** React Imports
import { SyntheticEvent, useRef, useState , useEffect} from 'react'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Accordion from '@mui/material/Accordion'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import AccordionSummary from '@mui/material/AccordionSummary'
import { AccordionDetails, InputLabel, Select, MenuItem, Box, Checkbox, FormControlLabel, Avatar } from '@mui/material'

// ** Third Party Imports

// ** Icons Imports
import ChevronDown from 'mdi-material-ui/ChevronDown'

// ** Styles Import
import 'react-credit-cards/es/styles-compiled.css'

// Styled component for the Box wrappers in Delivery Options' accordion

import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast'
import axios from 'axios'
import { FormControl } from '@mui/material'
import { brandsAndModels, colors } from 'src/lib/brandAmodels'
import FileUploaderMultiple from './ImageGrid'

const ViewCarAddition = ({ params }: any) => {
  const { register, handleSubmit } = useForm();
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

  const [carData, setCarData] = useState({});
  console.log("🚀 ~ ViewCarAddition ~ carData:", params)
  const { _id } = params?.params;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/v1/admin/getCarById/${id}`);
        setCarData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [id]);


  const hiddenInputRef = useRef();

  const handleImageUpload = (event) => {
    const file = event.target.files;
    const urlImage = URL.createObjectURL(file[0]);
        console.log("🚀 ~ handleImageUpload ~ file:", file)
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

  const uploadButtonLabel = preview? "Change image" : "Upload image";



  // Correctly handling file uploads by appending the file directly to FormData
const onSubmit = async (data: any) => {
  console.log("🚀 ~ onSubmit ~ data:", data)

  try {
    const formData = new FormData();
    Object.keys(data).forEach(key => {
      if (key!== 'image') {
        formData.append(key, data[key]);
      }
    });
    formData.append('carImages', imagePreviewUrl); // Ensure the file is appended correctly
    formData.append('cruiseControl', cruiseControl);

    const response = await axios.post('http://localhost:8000/api/v1/admin/getCarById/_id', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    toast.success('Car created successfully!', {
      position: 'bottom-right',
    });

    console.log(response.data);
  } catch (error) {
    console.error('Error:', error);
  }
};


  const [expanded, setExpanded] = useState('panel1')

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }
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
  }
  const handleColorChangeExterior = (event) => {
    setSelectedColorExterior(event.target.value);
  }
  const filteredModels = brandsAndModels.find(brand => brand.brand === selectedBrand)?.models || [];
  const versions = ['Version 1', 'Version 2', 'Version 3']; // Example versions, adjust as needed
  const years = Array.from({ length: 50 }, (_, i) => 2023 - i); // Generates years from 2023 to 1973


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ChevronDown />}
          id='form-layouts-collapsible-header-1'
          aria-controls='form-layouts-collapsible-content-1'
        >
          <Typography variant='subtitle1' sx={{ fontWeight: 500 }}>
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
                  label="version"
                  {...register('version')}
                  onChange={handleVersionChange}
                >
                  <MenuItem value="">Select version</MenuItem>
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
                  label="year"
                  {...register('year')}
                  onChange={handleYearChange}
                >
                  <MenuItem value="">Select year</MenuItem>
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
          expandIcon={<ChevronDown />}
          id='form-layouts-collapsible-header-2'
          aria-controls='form-layouts-collapsible-content-2'
        >
          <Typography variant='subtitle1' sx={{ fontWeight: 500 }}>
            CAR SPECS
          </Typography>
        </AccordionSummary>
        <Divider sx={{ m: 0 }} />
        <AccordionDetails>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={3}>
              <FormControl fullWidth>
                <InputLabel id="colour-label">Available Colours</InputLabel>
                <Select
                  labelId="colour-label"
                  id="colour-select"
                  value={selectedColor}
                  label="colour"
                  {...register('colour')}
                  onChange={handleColorChange}
                >
                  <MenuItem value="">Select colour</MenuItem>
                  {colors.map((color) => (
                    <MenuItem key={color} value={color} sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                    }}>
                      <Box display="flex">
                        <Box sx={{ backgroundColor: color, width: 20, height: 20, }} />
                        <Typography variant="body2" sx={{ ml: 1, color: color }}>
                          {color}
                        </Typography>

                      </Box>

                    </MenuItem>
                  ))}
                </Select>
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
      checked={true}
      onChange={(e) => {
        if (e.target.checked) {
          setCruiseControl(true);
        } else {
          setCruiseControl(false);
        }
      }}
    />
  }
  label="Cruise controls"
/>
              {/* <Checkbox label='Cruise controls' placeholder='Cruise controls' {...register('cruiseControl')} /> */}
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField fullWidth label='Fuel Type' placeholder='Fuel Type' {...register('FuelType')} />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField fullWidth label='Engine Capacity' placeholder='Engine Capacity' {...register('engineCapacity')} />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField fullWidth label='Boot Capactiy' placeholder='Boot Capactiy' {...register('bootCapacity')} />
            </Grid>
            <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
                <InputLabel id="colour-label-interior">Interior Colors</InputLabel>
                <Select
                  labelId="colour-label-interior"
                  id="colour-select-interior"
                  value={selectedColorInterior}
                  label="colourInterior"
                  {...register('colourInterior')}
                  onChange={handleColorChangeInterior}
                >
                  <MenuItem value="">Select colour</MenuItem>
                  {colors.map((color) => (
                    <MenuItem key={color} value={color} sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                    }}>
                      <Box display="flex">
                        <Box sx={{ backgroundColor: color, width: 20, height: 20, }} />
                        <Typography variant="body2" sx={{ ml: 1, color: color }}>
                          {color}
                        </Typography>

                      </Box>

                    </MenuItem>
                  ))}
                </Select>
              </FormControl>             </Grid>
            <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
                <InputLabel id="colour-label-exterior">Exterior Colors</InputLabel>
                <Select
                  labelId="colour-label-exterior"
                  id="colour-select-exterior"
                  value={selectedColorExterior}
                  label="colourExterior"
                  {...register('colourExterior')}
                  onChange={handleColorChangeExterior}
                >
                  <MenuItem value="">Select colour</MenuItem>
                  {colors.map((color) => (
                    <MenuItem key={color} value={color} sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                    }}>
                      <Box display="flex">
                        <Box sx={{ backgroundColor: color, width: 20, height: 20, }} />
                        <Typography variant="body2" sx={{ ml: 1, color: color }}>
                          {color}
                        </Typography>

                      </Box>

                    </MenuItem>
                  ))}
                </Select>
              </FormControl>              </Grid>
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
        </AccordionDetails>
        <Divider sx={{ m: 0 }} />
      </Accordion>

      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ChevronDown />}
          id='form-layouts-collapsible-header-2'
          aria-controls='form-layouts-collapsible-content-2'
        >
          <Typography variant='subtitle1' sx={{ fontWeight: 500 }}>
            CAR PRICING
          </Typography>
        </AccordionSummary>
        <Divider sx={{ m: 0 }} />
        <AccordionDetails>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ChevronDown />}
                  id='variant-sizes-collapsible-header'
                  aria-controls='variant-sizes-collapsible-content'
                >
                  <Typography variant='subtitle1' sx={{ fontWeight: 500 }}>
                    Daily Charges
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid container spacing={5}>
                    <Grid item xs={12} sm={3}>
                      <TextField fullWidth label='Charge Per Day' placeholder='chargePerDay' {...register('chargePerDay')} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth label='Allowed Number of KMs' placeholder='allowedNumberOfKMs' {...register('allowedNumberOfKMs')} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth label='Available For Daily Rental' placeholder='availableForDailyRental' {...register('availableForDailyRental')} />
                    </Grid>

                  </Grid>
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ChevronDown />}
                  id='variant-sizes-collapsible-header'
                  aria-controls='variant-sizes-collapsible-content'
                >
                  <Typography variant='subtitle1' sx={{ fontWeight: 500 }}>
                    Weekly Charges
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid container spacing={5}>
                    <Grid item xs={12} sm={3}>
                      <TextField fullWidth label='Charge Per Week' placeholder='chargePerWeek' {...register('chargePerWeek')} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth label='Allowed Number of KMs' placeholder='allowedNumberOfKMs' {...register('allowedNumberOfKMs')} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth label='Available For Weekly Rental' placeholder='availableForWeeklyRental' {...register('availableForWeeklyRental')} />
                    </Grid>
                  </Grid>
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField fullWidth label='Extra Mileage Cost' placeholder='extraMileageCost' {...register('extraMileageCost')} />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField fullWidth label='CDW Insurrance Per Day' placeholder='cdwInsurancePerDay' {...register('cdwInsurancePerDay')} />
            </Grid>
          </Grid>
        </AccordionDetails>
        <Divider sx={{ m: 0 }} />
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ChevronDown />}
          id='form-layouts-collapsible-header-2'
          aria-controls='form-layouts-collapsible-content-2'
        >
          <Typography variant='subtitle1' sx={{ fontWeight: 500 }}>
            RENTAL TERMS
          </Typography>
        </AccordionSummary>
        <Divider sx={{ m: 0 }} />
        <AccordionDetails>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={3}>
              <TextField fullWidth label='Security Deposit' placeholder='Security Deposit' {...register('securityDeposit')} />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField fullWidth label='Excess Claim Amount' placeholder='Excess Claim Amount' {...register('excessClaimAmount')} />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField fullWidth label='Delivery & Pick-up Charges' placeholder='Delivery & Pick-up Charges' {...register('deliveryAndPickUpCharges')} />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField fullWidth label='Special Note for Customers' placeholder='Special Note for Customers' {...register('specialNoteForCustomers')} />
            </Grid>

          </Grid>
        </AccordionDetails>
        <Divider sx={{ m: 0 }} />
      </Accordion>

      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
          expandIcon={<ChevronDown />}
          id='form-layouts-collapsible-header-2'
          aria-controls='form-layouts-collapsible-content-2'
        >
          <Typography variant='subtitle1' sx={{ fontWeight: 500 }}>
            MONTHLY PRICING
          </Typography>
        </AccordionSummary>
        <Divider sx={{ m: 0 }} />
        <AccordionDetails>
          <Grid container spacing={5}>


            <Grid item xs={12} sm={6}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ChevronDown />}
                  id='variant-sizes-collapsible-header'
                  aria-controls='variant-sizes-collapsible-content'
                >
                  <Typography variant='subtitle1' sx={{ fontWeight: 500 }}>
                    1 Month Charge
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid container spacing={5}>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth label='One Month Charge' placeholder='oneMonthCharge' {...register('oneMonthCharge')} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth label='Allowed Number of KMs' placeholder='allowedNumberOfKMs' {...register('allowedNumberOfKMs')} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth label='Charges After Free KMs' placeholder='chargesAfterFreeKMs' {...register('chargesAfterFreeKMs')} />
                    </Grid>
                  </Grid>
                </AccordionDetails>
              </Accordion>            </Grid>
            <Grid item xs={12} sm={6}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ChevronDown />}
                  id='variant-sizes-collapsible-header'
                  aria-controls='variant-sizes-collapsible-content'
                >
                  <Typography variant='subtitle1' sx={{ fontWeight: 500 }}>
                    3 Month Charge
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid container spacing={5}>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth label='Three Month Charge' placeholder='threeMonthCharge' {...register('threeMonthCharge')} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth label='Allowed Number of KMs' placeholder='allowedNumberOfKMs' {...register('allowedNumberOfKMs')} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth label='Charges After Free KMs' placeholder='chargesAfterFreeKMs' {...register('chargesAfterFreeKMs')} />
                    </Grid>
                  </Grid>
                </AccordionDetails>
              </Accordion>            </Grid>
            <Grid item xs={12} sm={6}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ChevronDown />}
                  id='variant-sizes-collapsible-header'
                  aria-controls='variant-sizes-collapsible-content'
                >
                  <Typography variant='subtitle1' sx={{ fontWeight: 500 }}>
                    6 Month Charge
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid container spacing={5}>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth label='Six Month Charge' placeholder='sixMonthCharge' {...register('sixMonthCharge')} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth label='Allowed Number of KMs' placeholder='allowedNumberOfKMs' {...register('allowedNumberOfKMs')} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth label='Charges After Free KMs' placeholder='chargesAfterFreeKMs' {...register('chargesAfterFreeKMs')} />
                    </Grid>
                  </Grid>
                </AccordionDetails>
              </Accordion>            </Grid>
            <Grid item xs={12} sm={6}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ChevronDown />}
                  id='variant-sizes-collapsible-header'
                  aria-controls='variant-sizes-collapsible-content'
                >
                  <Typography variant='subtitle1' sx={{ fontWeight: 500 }}>
                    9 Month Charge
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid container spacing={5}>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth label='Nine Month Charge' placeholder='NineMonthCharge' {...register('NineMonthCharge')} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth label='Allowed Number of KMs' placeholder='allowedNumberOfKMs' {...register('allowedNumberOfKMs')} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth label='Charges After Free KMs' placeholder='chargesAfterFreeKMs' {...register('chargesAfterFreeKMs')} />
                    </Grid>
                  </Grid>
                </AccordionDetails>
              </Accordion>            </Grid>
          </Grid>
        </AccordionDetails>
        <Divider sx={{ m: 0 }} />
      </Accordion>

      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary
          expandIcon={<ChevronDown />}
          id='form-layouts-collapsible-header-6'
          aria-controls='form-layouts-collapsible-content-6'
        >
          <Typography variant='subtitle1' sx={{ fontWeight: 500 }}>
            ADD IMAGES
          </Typography>
        </AccordionSummary>
        <Divider sx={{ m: 0 }} />
        <AccordionDetails>
          <Grid container spacing={5}>

            <Grid item xs={6}>
            {  preview ? (
                <>
                <img src={preview}
            style={{ width: '200px', height: '200px' }}
            alt="preview" />
                </>
            ) : (
              <Typography> Preview </Typography>
            )}
            </Grid>
                        <Grid item xs={6}>
                        <Button variant="contained" color="primary" onClick={onUpload}>
            {uploadButtonLabel}
          </Button>

              <input
            type="file"
            name="image"
            style={{ display: 'none' }}
            onChange={handleImageUpload}
            ref={hiddenInputRef}
          />
                        </Grid>
      
          </Grid>
        </AccordionDetails>
      </Accordion>

      <AccordionDetails>
        <Button size='large' type='submit' variant='contained' sx={{ mr: 4 }}>
          Add Car
        </Button>
        <Button size='large' variant='outlined'>
          Cancel
        </Button>
      </AccordionDetails>
    </form>
  );
};

export default ViewCarAddition;