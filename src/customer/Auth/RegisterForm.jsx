import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; // Importing useDispatch and useSelector
//import { getUser, register } from ''; // Importing getUser and register actions
import Grid from '@mui/material/Grid';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'; 
import  {register, getUser} from "../../State/Auth/Action"


const RegisterForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt");
    const { auth } = useSelector(store => store); // Assuming you have a 'store' slice in your Redux state

    useEffect(() => {
        if (jwt) {
            dispatch(getUser(jwt));
        }
    }, [jwt, auth.jwt]) // Adding dispatch to the dependencies array
        
       


    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const userData = {
            firstName: data.get("firstName"),
            lastName: data.get("lastName"),
            email: data.get("email"),
            password: data.get("password")
        };
        dispatch(register(userData));
        console.log("userData", userData);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id='firstName'
                            name='firstName'
                            label='First Name'
                            fullWidth
                            autoComplete='given-name'
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id='lastName'
                            name='lastName'
                            label='Last Name'
                            fullWidth
                            autoComplete='given-name'
                        />
                    </Grid>
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
                        <Button
                            className='bg-[#9155fd] w-full'
                            type='submit'
                            variant='contained' // Corrected 'varient' to 'variant'
                            size='large'
                            sx={{ padding: ".8rem 0", bgcolor: "#9155fd" }}
                        >
                            Register
                        </Button>
                    </Grid>
                </Grid>
            </form>
            <div className='flex justify-center flex-col items-center'>
                <div className='py-3 flex item-center'>
                    <p>If you already have an account?</p>
                    <Button onClick={() => navigate("/login")} className='ml-5' size='small'>Login</Button>
                </div>
            </div>
        </div>
    );
};

export default RegisterForm;
