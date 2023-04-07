import React from 'react'
import { TextField, Button, Typography, Grid } from '@mui/material'
import styled from 'styled-components'
const RegisterForm = () => {
  const StyledContainer = styled.div`
    border-style: solid;
    width: 450px;
    height: 500px;
    border-radius: 24px;
    padding: 20px;
    align-items: center;
  `
  const StyledForm = styled.div`
  margin: 5px;
  `
  return (
    <StyledContainer>
      <StyledForm>
        <TextField sx={{ paddingRight: '5px' }} label='Email Address' />
        <TextField  label='Password' />
      </StyledForm>
    </StyledContainer>
  )
}

export default RegisterForm
