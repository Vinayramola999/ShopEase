import React from 'react';
//import { Grid, TextField } from '@material-ui/core';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'; 
import { login } from '../../State/Auth/Action';
import { useDispatch } from 'react-redux'; 


const LoginForm = () => {
  const dispatch =useDispatch();
    const navigate=useNavigate();


    
  const handleSubmit = (event) => {
    // Add your form submission logic here
    event.preventDefault(); // Prevents the default form submission behavior
  const data=new FormData(event.currentTarget);
  const userData={
  
    email:data.get("email"),
    password:data.get("password")
  }
   dispatch(login(userData))
  console.log("userData",userData)
  


};

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          
          <Grid item xs={12} sm={12}>
            <TextField
              required
              id='email'
              name='email'
              label='Email'
              fullWidth
              autoComplete='email'
            />
          </Grid>

          <Grid item xs={12} sm={12}>
            <TextField
              required
              id='password'
              name='password'
              label='Password'
              fullWidth
              autoComplete='password'
            />
          </Grid>
          <Grid item xs={12}>
            <Button className='bg-[#9155fd] w-full'
            type='submit'
            varient='contained'
            size='large'
            sx={{padding:".8rem 0",bgcolor:"#9155fd"}}
            
            
            >
            Login

            </Button>

          </Grid>

          
        </Grid>
      </form>
      <div className='flex justify-center flex-col items-center'>
      <div className='py-3 flex item-center'>
<p>if you don't have  a account ?</p>
<Button onClick={()=>navigate("/register")} className='ml-5'size='small'>Register</Button>
</div>
</div>

    
    </div>
  );
};

export default LoginForm;
