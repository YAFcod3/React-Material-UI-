import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { Fragment } from "react";





const Rightbar = () => {
  return (
    <Box
      // bgcolor='lightcoral'
      flex={2}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Box position="fixed" width={300}>
        {/* 1 ONLY FRIENDS*/}
        <Typography variant="h6" fontWeight={100}>
          Only friends
        </Typography>
        <AvatarGroup max={7}>
          <Avatar alt="Remy Sharp" src="img/profile.jpg" />
          <Avatar alt="Travis Howard" src="img/profile.jpg" />
          <Avatar alt="Cindy Baker" src="img/profile.jpg" />

          <Avatar alt="Agnes Walker" src="img/profile.jpg" />

          <Avatar alt="Trevor Henderson" src="img/profile.jpg" />

          <Avatar alt="Trevor Henderson" src="img/profile.jpg" />

          <Avatar alt="Trevor Henderson" src="img/profile.jpg" />

          <Avatar alt="Trevor Henderson" src="img/profile.jpg" />
          <Avatar alt="Trevor Henderson" src="img/profile.jpg" />
        </AvatarGroup>

        {/* 2  LATEST PHOTOS*/}

        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={150} mt={2} gap={5}>
          {/* 1 */}
          <ImageListItem>
            <img src="img/profile.jpg" alt="" />
          </ImageListItem>
          {/* 2 */}
          <ImageListItem>
            <img src="img/profile.jpg" alt="" />
          </ImageListItem>
          {/* 3 */}
          <ImageListItem>
            <img src="img/profile.jpg" alt="" />
          </ImageListItem>
        </ImageList>







        {/* 3 Latest conversations */}

        <Typography variant="h6" fontWeight={100} mt={2}>
          Latest conversations
        </Typography>

        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            {/* 1 */}
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="img/profile.jpg" />
            </ListItemAvatar>

            <ListItemText
              primary="Brunch this weekend?"
              secondary={
              
                <Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Ali Connors
                </Typography>
                {" — I'll be in your neighborhood doing errands this…"}
              </Fragment>

               
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />

          {/* 2 */}
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="img/profile.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                
                <Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  to Scott, Alex, Jennifer
                </Typography>
                {" — Wish I could come, but I'm out of town this…"}
              </Fragment>
                
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />

              {/* 3 */}
          {/* <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="img/profile.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                
                <Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Sandra Adams
                </Typography>
                {' — Do you have Paris recommendations? Have you ever…'}
              </Fragment>
                 
              }
            />
          </ListItem> */}



        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
