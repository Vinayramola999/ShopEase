import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTraker from './OrderTraker'
import { Box, Grid } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import  StarBorderIcon  from '@mui/icons-material/StarBorder';


const OrderDetails = () => {
  return (
    <div className='px:5 lg:px-20'>
        <div>
            <h1 className='font-bold text-xl py-7'> Delivery Address</h1>
        <AddressCard/>
        </div>

        <div className='py-20'>
            <OrderTraker activeStep={3}/>
        </div>

        <Grid className='space-y-5' container>
          {[1,1,1,1,1,1].map((item)=>
                    <Grid item container className='shadow-xl rounded-md p-5 border' sx={{alignItems:"center", justifyContent:'space-between'}}>
           

                    <Grid item xs={6} >
         
                     <div className='flex items-center space-x-4'>
                       <img  className='w-[5rem] h-[5rem] object-cover object-top '  src= "https://www.myraymond.com/media/product/XMSS11571-N5/3224236008_XMSS11571-N5%20(1).jpg " alt=" " />
                     </div>
                     <div className='space-y-2 ml-5'>
                       <p className='font-semibold'>Parx Men Medium Green Checks Slim Fit Party Shirt</p>
                       <p className='spacex-x-5 opacity-50 text-xs font-semibold' ><span> color:Red</span><span> Size: M</span> </p>
                       <p> seller: Vinay Ramola</p>
                       <p> $699</p>
         
                     </div>
         
                    </Grid>
         
                    <Grid item>
                     <Box sx={{color:deepPurple[500]}}>
         
                       <StarBorderIcon sx={{fontSize:'2rem'}} className='px-2 text-2xl' />
                        <span> Rate & Review Product</span>
                       
         
                     </Box>
         
                    </Grid>
                   </Grid>)}



        </Grid>
       
    </div>
  )
}

export default OrderDetails