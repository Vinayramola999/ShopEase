import {  AdjustOutlined } from '@mui/icons-material'
import { Grid } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const OrderCard = () => {

  const navigate=useNavigate();
  
  return (
    <div onClick={()=>navigate("/orderDetails")} className='p-5 shadow-md shadow-black hover:shadow-2x1 border'>

        <Grid container spacing={2} sx={{justifyContent:" space-between"}}>
    
       <Grid item xs={6}>
        <div className='flex cursor-pointer'>
            <img className='w-[5-rem] h-[5rem] object-cover object-top ' src="https://www.myraymond.com/media/product/PCSA02933-B8/PCSA02933-B8%20(1).webp" alt=' '/>

            <div className='ml-5 space-y-2'>

                <p className=''>Park Avenue Men Blue Checks Slim Fit Cotton Shirt </p>
                <p className='opacity-50 text-xs font-semibold'> Size:M</p>
                <p className='opacity-50 text-xs font-semibold'> color: Blue</p>
            </div>
        </div>

       </Grid>

       <Grid item xs={2} >
        <p> $399</p>

       </Grid>
       <Grid item xs={4}>
      {true && <div>
         
        <p>
            <AdjustOutlined sx={{width:"15px",height:"15px"}} className='text-green-600 mr-2 text-sm'/>
            <span>
                Delivered On March 08
            </span>
        </p>
        <p className='text-xs'>
            Your Item Has Been Delivered
        </p>
      </div>}
   
        {false &&
        <p>
            
            <span>
            Expected Delivery On March 08
            </span>
        
        </p>}

       </Grid>
        </Grid>
    </div>
  )
}

export default OrderCard