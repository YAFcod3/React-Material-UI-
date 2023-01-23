import styled from "@emotion/styled";
import { BusinessCenter ,Mail,Notifications} from "@mui/icons-material";
import { AppBar, Toolbar, Typography,Box, InputBase, Badge, Avatar, Menu, MenuItem } from "@mui/material";

import { useState } from "react";




const StyledToolbar=styled(Toolbar)({
  display:"flex",
  justifyContent:"space-between"
});

const Search=styled("div")(({theme})=>({
   backgroundColor:"white",
   padding:'0 10px',
   borderRadius:theme.shape.borderRadius,
   width:'40%',

}));
const Icons=styled(Box)(({theme})=>({
  display:'none',
  alignItems:'center',
  gap:"20px",
  [theme.breakpoints.up("sm")]:{
    display:"flex"
  }
}));

const UserBox=styled(Box)(({theme})=>({
  display:'flex',
  alignItems:'center',
  gap:"10px",
  [theme.breakpoints.up("sm")]:{
    display:"none"
  }

}));












const Navbar = () => {

  const [open ,setOpen]=useState(false)


 

  return (

    <AppBar position="sticky">
      {/* 1 */}
      <StyledToolbar>
        <Typography variant="h6" sx={{display:{xs:"none",sm:"block"}}}>La Maleta</Typography>
        <BusinessCenter sx={{display:{xs:"block",sm:"none"}}}/>



      {/* 2 */}
      <Search>
        <InputBase placeholder='search...'/>
    
      </Search>




      {/* 3 */}
      <Icons>
        {/*  mails */}
        <Badge badgeContent={4}  color="error">
          <Mail
           />
        </Badge>
        {/* notificaciones */}
        <Badge badgeContent={2}  color="error">
          <Notifications
           />
        </Badge>
        {/* avatar vista > tablet */}
        <Avatar onClick={(e)=>setOpen(true)}
        sx={{width:30, height:30}} alt="Remy Sharp" src='/img/profile.jpg' />
        
       
      </Icons>
        {/* avatar vista movil */}
      <UserBox onClick={(e)=>setOpen(true)}>
        <Avatar sx={{width:30, height:30}} alt="Remy Sharp" src='/img/profile.jpg' />
        <Typography variant="span">John</Typography>
       </UserBox>


      </StyledToolbar>

      {/* menu profile */}
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        // anchorEl={anchorEl}
        
        open={open}
         onClose={e=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
        {/* <MenuItem onClick={handleClose}>Logout</MenuItem> */}

      </Menu>
    </AppBar>
    );
}
 
export default Navbar;