import React from 'react'
import {
  TextField,
  Button,
  Grid,
  CssBaseline,
  Typography,
  Link
} from '@mui/material'
import styled from 'styled-components'
const LoginForm = () => {
  const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    text-align: center;
    padding:180px;
  `
  const StyledGrid = styled.div`
    /* border-style: solid; */
    border-radius: 25px;
    width: 500px;
    /* height:300px; */
    padding: 20px;
    align-items: center;
  `
  return (
    <StyledWrapper>
      <StyledGrid container component='main'>
        <CssBaseline />
        {/* LOGIN USER */}
        <Grid item xs={false} sm={4} md={7} />
        <Grid item xs={12} sm={8} md={5} elevation={6} square>
          <Typography component='h1' variant='h5' sx={{ paddingTop: '0px' }}>
            Login Here
          </Typography>
          <form>
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              autoComplete='email'
              autoFocus
            />
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              autoComplete='current-password'
            />
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              sx={{ width: '200px', marginTop: '10px' }}
            >
              Sign In
            </Button>
          </form>
          <h4>
            Not yet registered? <Link underline="hover">Click here</Link>
          </h4>
        </Grid>
      </StyledGrid>
    </StyledWrapper>
  )
}

export default LoginForm
