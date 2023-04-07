import React from 'react'
import { TextField, Button, Typography, Grid } from '@mui/material'
import styled from 'styled-components'
const RegisterForm = () => {
  const StyledContainer = styled.div`
    border-style: solid;
    width: 500px;
    height: 500px;
    border-radius: 24px;
    /* padding: 20px; */
    align-items:center;
  `
  return (
    <StyledContainer>
        <TextField sx={{ padding: '10px' }} label='Email Address' />
        <TextField sx={{ padding: '10px' }} label='Password' />
    </StyledContainer>
  )
}

export default RegisterForm
