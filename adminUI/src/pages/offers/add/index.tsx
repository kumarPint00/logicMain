'use client';
import { Typography, TextField, Button, Select, MenuItem, InputLabel, FormControl, Box } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import FileUploaderSingle from 'src/views/forms/form-elements/file-uploader/FileUploaderSingle';

// Dummy car data for demonstration
const dummyCars = ['Car 1', 'Car 2', 'Car 3', 'Car 4', 'Car 5'];

const Index = () => {
    const { register, handleSubmit, setValue, watch } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        console.log(`Offer submitted for car ${data.car}: ${data.offerAmount}`);
    };

    return (
        <>
            <Typography variant="h4">Offer Addition</Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    label="Enter Offer Amount"
                    {...register('offerAmount', { required: true, valueAsNumber: true })}
                    type="number"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                />
                <FormControl fullWidth margin="normal">
                    <InputLabel id="car-select-label">Select Car</InputLabel>
                    <Select
                        labelId="car-select-label"
                        id="car-select"
                        {...register('car')}
                        label="Select Car"
                    >
                        {dummyCars.map((car) => (
                            <MenuItem key={car} value={car}>
                                {car}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <TextField
                    label="Banner Description (Optional)"
                    {...register('bannerDescription')}
                    variant="outlined"
                    fullWidth
                    margin="normal"
                />
                <Box component="div" sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
                   <FileUploaderSingle {...register('bannerImage')} />
                </Box>
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Submit Offer
                </Button>
            </form>
        </>
    );
};

export default Index;
