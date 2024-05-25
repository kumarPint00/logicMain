import { useEffect, useState } from 'react'
import axios from 'axios'
import { Grid, Card, CardContent, CardMedia, Typography, Box, IconButton } from '@mui/material'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import BookingForm from './BookingForm'
import CarDetailsDialog from './CarDetailsDialogBox'

const NewlyAddedCars = () => {
  const [newCars, setNewCars] = useState([])
  const [selectedCar, setSelectedCar] = useState(null)
  const [open, setOpen] = useState(false)
  const [bookingData, setBookingData] = useState(null)

  useEffect(() => {
    const fetchNewCars = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/v1/admin/getAllCars')
        setNewCars(response.data.data)
      } catch (error) {
        console.error('Error fetching new cars:', error)
      }
    }

    fetchNewCars()
  }, [])

  const handleCardClick = car => {
    setSelectedCar(car)
  }

  const handleDialogClose = () => {
    setSelectedCar(null)
  }

  const NextArrow = ({ onClick }) => (
    <IconButton
      sx={{
        position: 'absolute',
        top: '50%',
        right: '0',
        transform: 'translate(0, -50%)',
        zIndex: 2,
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.9)'
        }
      }}
      onClick={onClick}
    >
      <ArrowForwardIosIcon />
    </IconButton>
  )

  const PrevArrow = ({ onClick }) => (
    <IconButton
      sx={{
        position: 'absolute',
        top: '50%',
        left: '0',
        transform: 'translate(0, -50%)',
        zIndex: 2,
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.9)'
        }
      }}
      onClick={onClick}
    >
      <ArrowBackIosIcon />
    </IconButton>
  )

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: '0',
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // 3 seconds
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: false,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerMode: false
        }
      }
    ]
  }

  return (
    <Box sx={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
      <Typography variant='h4' sx={{ textAlign: 'center', marginBottom: '20px' }}>
        Newly Added Cars
      </Typography>
      <Box sx={{ position: 'relative' }}>
        <Slider {...settings}>
          {newCars.map(car => (
            <Box key={car._id} sx={{ padding: '10px' }}>
              <Card
                sx={{
                  maxWidth: 345,
                  boxShadow: 3,
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'scale(1.1)',
                    boxShadow: 6
                  }
                }}
                onClick={() => handleCardClick(car)}
              >
                <CardMedia
                  component='img'
                  height='140'
                  image={car?.carImages?.imageUrl || '/defaultCarImage.jpg'} // Fallback image
                  alt={`${car.brand} ${car.model}`}
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='div'>
                    {car.brand} {car.model}
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    Year: {car.year}
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    Price per day: ${car.chargePerDay}
                  </Typography>
                </CardContent>
                <BookingForm car={car} />
              </Card>
            </Box>
          ))}
        </Slider>

        <CarDetailsDialog car={selectedCar} open={Boolean(selectedCar)} onClose={handleDialogClose} />
      </Box>
    </Box>
  )
}

export default NewlyAddedCars
