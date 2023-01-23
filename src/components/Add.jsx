import { Avatar, Box, Fab, Modal, TextField, Tooltip, Typography,Stack, ButtonGroup, Button } from "@mui/material";
import { Add as AddIcon ,DateRange,EmojiEmotions, Image, PersonAdd, VideoCameraBack} from "@mui/icons-material";
import { useState } from "react";
import styled from "@emotion/styled";


const StyleModal=styled(Modal)({
  display:'flex',
  justifyContent:'center',
  alignItems:'center'
})

const UserBox=styled(Box)({
  display:'flex',
  alignItems:'center',
  gap:'10px',
  marginBottom:'20px'
});






const Add = () => {



  const [open,setOpen]=useState(false)



  






  return (
    <>




      {/* BOTON */}
      <Tooltip onClick={e=>setOpen(true)}
        title="Add"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50%)", md: 30 },
        }}
      >
        <Fab color="error" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>




      {/* MODAL */}

     
      <StyleModal
        open={open}
        onClose={e=>setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >


        <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5}>




         <Typography variant="h6" color='gray' textAlign='center'>
          Create Post
         </Typography>

         <UserBox >
          <Avatar sx={{width:30, height:30}} alt="Remy Sharp" src='/img/profile.jpg' />
          <Typography fontWeight={500} variant="span">John Doe</Typography>
         </UserBox>

         <TextField
          sx={{width:'100%'}}
          id="standard-multiline-static"
          
          multiline
          rows={3}
          placeholder="What's on your mind"
          variant="standard"
        />

        <Stack direction='row' gap={1} mt={2} mb={3}>
          <EmojiEmotions color="primary"/>
          <Image color="secondary"/>
          <VideoCameraBack color="success"/>
          <PersonAdd color="error"/>


        </Stack>

        <ButtonGroup fullWidth  variant="contained" aria-label="outlined primary button group">
            <Button >Post</Button>
            <Button sx={{width:'100px'}}><DateRange/></Button>
       </ButtonGroup>




        </Box>
      </StyleModal>
    </>
  );
};

export default Add;
