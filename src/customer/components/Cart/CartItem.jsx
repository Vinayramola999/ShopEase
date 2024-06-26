
import { Button, IconButton } from '@mui/material'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
const CartItem = () => {
  return (
    <div className='p-5 shadow-lg border rounded-md'>
      
      <div className='flex items-center'>

        <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]' >
        <img className='w-full h-full object-cover object-top' src="https://www.myraymond.com/media/product/PMVY00240-O7/PMVY00240-O7%20(1).webp"
        alt=" "/>
        </div>
       

       <div className='ml-5 space-y-1'>
        
        <p className='font-semibold'>Men Brown Slim Fit Checks Polyester Blend Waist Coat </p>
        <p className='opacity-70'> Size: L,Brown</p>
        <p className='opacity-70 mt-2'>Seller: Vinay Ramola</p>
        <div className="flex space-x-5 items-center  text-grey-900 mt-10 pt-6">

             
<p className="font-semibold">$199</p>

<p className="opacity-50 line-through">$211</p>
<p className="text-green-600 font">5% 0ff</p>
</div>

       </div>

      
      </div>
      <div className='lg:flex items-center lg:space-x-10 pt-4'>
         <div className='flex items-center space-x-2'>
            
            <IconButton >
              <RemoveCircleOutlineIcon/>
            </IconButton>

           
            <span className='py-1 px-7 border rounded-sm'>3</span>
                    
            <IconButton sx={{color:"RGB(145 85 253)"}}>
              <AddCircleOutlineIcon/>
            </IconButton>
          
         </div>

         <div>
          <Button sx={{color:"RGB(145 85 253)"}}>remove</Button>
         </div>

       </div>
    </div>
  )
}

export default CartItem