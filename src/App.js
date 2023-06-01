import logo from './logo.svg'
import './App.css'
import { Box, Typography, Button } from '@mui/material'
import headshot from './images/headshot.png'
import {
  baseBlue,
  highlightBlue,
  highlightWhite,
  beige,
  gunmetal
} from './colors'
import Navbar from './images/Navbar'

function App () {
  return (
    <Box>
      <Box display='flex' alignItems='center'>
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
            width: '55vw',
            backgroundImage: 'linear-gradient(90deg, #00BFFF 30%, #374955 70%)'
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
              margin: '4px 1px 4px 8px',
              border: `3px solid ${highlightWhite}`
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
              fontSize='4rem'
              fontWeight='500'
              sx={{
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                WebkitTextStroke: '2px black',
                WebkitTextFillColor: 'white'
              }}
            >
              Mikail Miller
            </Typography>
            <Typography
              variant='h2'
              fontSize='3rem'
              fontWeight='500'
              sx={{
                textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                WebkitTextStroke: '2px black',
                WebkitTextFillColor: 'white'
              }}
            >
              React & Unity Developer
            </Typography>
          </Box>
        </Box>
        <Navbar />
      </Box>
      <Box width="100%" height="100" display="flex" flexDirection="column" gap="900px">
        <Box id='about'>About Me</Box>
        <Box id='unity'>Unity</Box>
        <Box id='react'>React</Box>
      </Box>
    </Box>
  )
}

export default App
