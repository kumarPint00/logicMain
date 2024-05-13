  import { FC } from 'react';
import { useForm } from 'react-hook-form';
import {
  Button,
  CardActions,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem, Select, TextField
} from '@mui/material';
import axios from 'axios';
import toast from 'react-hot-toast';

  interface indexProps {
    text?: string;
  }


  const index: FC<indexProps> = props => {
    const { register, handleSubmit, watch, control } = useForm();

    const onSubmit = async (data) => {
      try {
        const response = await axios.post('http://localhost:9758/api/category/createCategory', data);
        toast.success('Category created successfully!', {
          position: 'bottom-right',
          autoClose: 3000,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        console.log(response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };



    const onCancel = () => {
      console.log('Cancel button clicked');
    };

    return (
      <>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Name' placeholder='Leonard' {...register('name')} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id='form-layouts-tabs-select-label'>Category</InputLabel>
                <Select
                  label='Category'
                  defaultValue=''
                  id='form-layouts-tabs-select'
                  labelId='form-layouts-tabs-select-label'
                  {...register('categoryID')}
                >
                  <MenuItem value='1'>Category 1</MenuItem>
                  <MenuItem value='2'>Category 2</MenuItem>
                  <MenuItem value='3'>Category 3</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Key' placeholder='Key' {...register('key')} />
            </Grid>
            <Divider sx={{ m: 0 }} />
            <CardActions>
              <Button size='large' type='submit' sx={{ mr: 2 }} variant='contained'>
                Submit
              </Button>
              <Button size='large' variant='outlined' color='secondary' onClick={onCancel}>
                Cancel
              </Button>
            </CardActions>
          </Grid>
        </form>
      </>
    );
  };

  export default index;
