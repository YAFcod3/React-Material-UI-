import Navbar from "./components/Navbar.jsx";
import Feed from "./components/Feed.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Rightbar from "./components/Rightbar.jsx";
import Add from "./components/Add.jsx";

import {Stack, Box, createTheme,ThemeProvider } from "@mui/material";
import { useState } from "react";





function App() {


  const [mode,setMode]=useState('light')

  const darkTheme=createTheme({
    palette:{
    mode:mode,
  }
  })



  return (
    <ThemeProvider theme={darkTheme}>
    
    <Box bgcolor={"background.default"} color={"text.primary"}>
     <Navbar/>
      {/* stack unidimensional, grid bidimensional */}
      <Stack direction='row' spacing={2} justifyContent='space-evenly'>
        <Sidebar setMode={setMode} mode={mode} />
        <Feed/>
        <Rightbar/>
      </Stack>
      <Add/>

    </Box>
    </ThemeProvider>
  );
}

export default App;
