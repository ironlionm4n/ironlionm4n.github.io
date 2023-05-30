import logo from './logo.svg'
import './App.css'
import { Box, Typography } from '@mui/material'
import headshot from './images/headshot.png'

function App () {
  return (
    <Box>
      <img src={headshot} alt='Faceshot' />
      <Typography>Mikail Miller</Typography>
      <Typography>Hello World</Typography>
    </Box>
  )
}

export default App
