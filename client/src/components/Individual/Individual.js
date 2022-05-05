import { Box, Grid, Hidden, useMediaQuery } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import React from "react";
import ChatBox from "../ChatBox/ChatBox";
import { useSubscribe, useTypingUsers } from "../CustomHooks/CustomHooks";
import UserBar from "../UserBar/UserBar";
import Users from "./Users/Users";

const useStyles = makeStyles((theme) => ({}));
const Individual = (props) => {
  const { users, room } = useSubscribe(props, "individual");
  const { typing } = useTypingUsers(props);

  const theme = useTheme();
  const classes = useStyles();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <>
      <Grid
        container
        width="100%"
        height="100%"
        display="flex"
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
        style={{ padding: "30px 15px" }}
      >
        <Grid
          justifyContent="center"
          item
          style={{ height: matches ? "80%" : "" }}
          container
          xs={12}
          sm={4}
          alignItems="flex-start"
        >
          <Hidden xsDown>
            <Box display="flex" width="100%">
              <Users typingUsers={typing} users={users}></Users>
            </Box>
          </Hidden>

          <UserBar typingUsers={typing} users={users}></UserBar>
        </Grid>
        <Grid
          container
          alignItems={matches ? "center" : "flex-start"}
          justifyContent="center"
          style={{ height: matches ? "80%" : "100%" }}
          item
          xs={12}
          sm={8}
        >
          <ChatBox room={room} currentUser={props.currentUser}></ChatBox>
        </Grid>
      </Grid>
    </>
  );
};

export default Individual;
