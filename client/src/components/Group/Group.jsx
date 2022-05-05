import { Box, Grid, useMediaQuery } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import React from "react";
import ChatBox from "../ChatBox/ChatBox";
import ChatTable from "../ChatTable/ChatTable";
import { useSubscribe, useTypingUsers } from "../CustomHooks/CustomHooks";
import UserBar from "../UserBar/UserBar";
const useStyles = makeStyles((theme) => ({
  chatTable: {
    borderRadius: "50%",
    width: "200px",
    height: "200px",
    background: "red",
  },
}));
const Group = (props) => {
  const { users, room } = useSubscribe(props, "group");
  const { typing } = useTypingUsers(props);
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const classes = useStyles();
  return (
    <>
      <Box
        width="100%"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        padding="30px 15px"
      >
        <Grid
          style={{ height: "100%" }}
          spacing={1}
          container
          alignItems="center"
        >
          <Grid xs={12} sm={6} item>
            <ChatTable
              typingUsers={typing}
              clientId={props.clientId}
              users={users}
            ></ChatTable>

            <UserBar typingUsers={typing} users={users}></UserBar>
          </Grid>
          <Grid
            container
            alignItems={matches ? "center" : "flex-start"}
            justifyContent="center"
            style={{ height: matches ? "80%" : "100%" }}
            xs={12}
            sm={6}
            item
          >
            <ChatBox
              room={room}
              clientId={props.clientId}
              currentUser={props.currentUser}
            ></ChatBox>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Group;
