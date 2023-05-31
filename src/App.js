import logo from './logo.svg'
import './App.css'
import { Box, Typography } from '@mui/material'
import headshot from './images/headshot.png'
import {
  baseBlue,
  highlightBlue,
  highlightWhite,
  beige,
  gunmetal
} from './colors'

function App () {
  return (
    <Box display="flex" justifyContent="center">
      <Box
        display='flex'
        flexDirection='row'
        justifyContent='center'
        ml={3}
        mr={3}
        mt={3}
        gap='1.5rem'
        bgcolor={highlightWhite}
        sx={{
          width: '50vw',
          backgroundImage: 'linear-gradient(90deg, #374955 30%, #00BFFF 70%)'
        }}
        border={`4px solid ${highlightWhite}`}
        boxShadow='10'
        borderRadius='180px'
      >
        <img
          src={headshot}
          alt='Faceshot'
          style={{
            height: '12.5rem',
            width: '12.5rem',
            borderRadius: '270px',
            padding: '10px 1px 10px 10px'
          }}
        />
        <Box
          display='flex'
          justifyContent='space-evenly'
          alignItems='flex-end'
          width='100%'
          p={2}
          pr={8}
          textAlign='start'
          flexDirection='column'
          color='white'
        >
          <Typography
            variant='h1'
            fontSize='48px'
            fontWeight='500'
            sx={{
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
              WebkitTextStroke: '1px black',
              WebkitTextFillColor: 'white',
              WebkitTextStrokeWidth: '2px'
            }}
          >
            Mikail Miller
          </Typography>
          <Typography
            variant='h2'
            fontSize='38px'
            fontWeight='500'
            sx={{
              textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
              WebkitTextStroke: '1px black',
              WebkitTextFillColor: 'white',
              WebkitTextStrokeWidth: '1.5px'
            }}
          >
            React & Unity Developer
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default App
