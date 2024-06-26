import * as React from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps=[
    "Placed",
    "Order Confirmed",
    "Shipped",
    "Out For Delivery",
    "Delivered"
]; 


const OrderTraker = ({activeStep}) => {
  return (
    <div className='w-full'>
    
    <Stepper activeStep={activeStep} alternativeLabel> 

    {steps.map((label)=> <Step>
        <StepLabel sx={{ color:"black", fontSize:"44px"}} > </StepLabel>
    </Step>)}
    </Stepper>
    </div>
  )
}

export default OrderTraker