import logo from './logo.svg'
import './App.css'
import { Box, Typography } from '@mui/material'
import headshot from './images/headshot.png'
import { baseBlue, highlightBlue, highlightWhite, beige } from './colors'


function App () {


  return (
    <Box bgcolor={baseBlue} height='100vh' width='100vw'>
      <Box >
        <Box
          display='flex'
          flexDirection='row'
          justifyContent='space-evenly'
          p={3}
          ml={3}
          mr={3}
          gap='1.5rem'
          bgcolor={highlightBlue}
        >
          <img
            src={headshot}
            alt='Faceshot'
            style={{ height: '15rem', width: '15rem', borderRadius: '270px' }}
          />
          <Box
            display='flex'
            justifyContent='space-evenly'
            alignItems='center'
            width='100%'
            p={4}
          >
            <Typography variant='h1' fontSize='48px'>
              Mikail Miller
            </Typography>
            <Typography variant='h1' fontSize='32px'>
              React & Unity Developer
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default App
