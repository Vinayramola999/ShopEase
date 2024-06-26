import { Box, Button, Grid, TextField } from "@mui/material";
import React from "react";
import AddressCard from "../AddressCard/AddressCard";
const DeliveryAddressForm = () => {

  const handleSubmit=()=>{
    
    
    

    console.log(  "address" )
  }
  return (
    <div>
      <Grid container spacing={4}>
        <Grid xs={12} lg={5} className="border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll">
          <div className="p-5 py-7 border-b cursor-pointer">
            <AddressCard />
            <Button
              sx={{ mt: 2, bgcolor: "RGB(145 85 253)" }}
              size="large"
              varient="contained"
            >
              {" "}
              Deliver Here
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} lg={7}>
          
          <Box className="border rounded-s-md shadow-md p-5" >

            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
               <Grid item xs={12} sm={6}>

                <TextField required id= "firstName"
                 name="firstName"
                 label="firstName"
                 fullWidth
                 autoComplete="given-name"
                />


               </Grid>
               <Grid item xs={12} sm={6}>

<TextField required id= "lastName"
 name="lastName"
 label="lastName"
 fullWidth
 autoComplete="given-name"
/>


</Grid>

<Grid item xs={12} >

<TextField required id= ""address
 name="address"
 label="address"
 fullWidth
 autoComplete="given-name"
 multiline
 rows={4}
/>


</Grid>

<Grid item xs={12} sm={6}>

<TextField required id= "city"
 name="city"
 label="city"
 fullWidth
 autoComplete="given-name"
/>


</Grid>

<Grid item xs={12} sm={6}>

<TextField required id= "state"
 name="state"
 label="state"
 fullWidth
 autoComplete="given-name"
/>


</Grid>
<Grid item xs={12} sm={6}>

<TextField required id= "zip"
 name="zip"
 label="zip/ Postal code"
 fullWidth
 autoComplete="shipping postal-code"
/>


</Grid>

<Grid item xs={12} sm={6}>

<TextField required id= "phoneNumber"
 name="phoneNumber"
 label="phoneNumber"
 fullWidth
 autoComplete="given-name"
/>


</Grid>

<Grid item xs={12} sm={6}>
<Button
              sx={{  mt: 2, bgcolor: "RGB(145 85 253)" }}
              size="large"
              varient="contained"
              type="submit"
            >
              Deliver Here
</Button>


</Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default DeliveryAddressForm;
