import React from 'react'
import { Box, Button } from '@mui/material'
import { gunmetal } from '../colors'

const Navbar = () => {
  const buttonStyle = {
    width: '27%'
  }

  return (
    <Box
      display='flex'
      bgcolor={gunmetal}
      width='33vw'
      height='45%'
      justifyContent='space-evenly'
      p={2}
      gap="8px"
    >
      <Button variant='contained' href='#about' sx={buttonStyle}>
        About Me
      </Button>
      <Button variant='contained' href='#unity' sx={buttonStyle}>
        Unity
      </Button>
      <Button variant='contained' href='#react' sx={buttonStyle}>
        React
      </Button>
    </Box>
  )
}

export default Navbar
