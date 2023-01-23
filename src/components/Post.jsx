import {Favorite,FavoriteBorder,MoreVert,Share} from "@mui/icons-material";
import { Avatar, Card, CardActions, CardContent, CardMedia, IconButton, Typography,CardHeader, Checkbox } from "@mui/material";



const Post = () => {




  return ( 


    <Card sx={{margin:5}} >

    {/* header */}
    <CardHeader
    avatar={
      
      <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
        R
      </Avatar>
    }
    action={
      <IconButton aria-label="settings">
        <MoreVert />
      </IconButton>
    }
    title="Shrimp and Chorizo Paella"
    subheader="September 14, 2016"
  />



  {/* media */}
  <CardMedia
    component="img"
    height="194"
    image="/img/profile.jpg"
    alt="Paella dish"
  />

   
  {/* content */}
  <CardContent>
    <Typography variant="body2" 
    color="text.secondary"
    >
      This impressive paella is a perfect party dish and a fun meal to cook
      together with your guests. Add 1 cup of frozen peas along with the mussels,
      if you like.
    </Typography>
  </CardContent>


  {/* action */}
  <CardActions disableSpacing>
    <IconButton aria-label="add to favorites">
    <Checkbox  icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:'red'}}/>} />
    </IconButton>
    <IconButton aria-label="share">
      <Share/>
    </IconButton>
 
  </CardActions>

 
</Card>



   );
}
 
export default Post;