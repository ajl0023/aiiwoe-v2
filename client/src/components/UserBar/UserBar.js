import { Box, useMediaQuery } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import { cupObj } from "../../images/cups/cups";
import { getSocket } from "../../socketInstance";
const useStyles = makeStyles((theme) => ({
  cup: {
    flexShrink: "0.5",
  },
  chatTable: {
    borderRadius: "50%",
    width: "200px",
    height: "200px",
    background: "red",
  },
  typingBubble: {
    ...theme.typingBubble,
  },
}));
const UserBar = (props) => {
  const [currentUser, setCurrentUser] = useState();
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  useEffect(() => {}, []);
  const classes = useStyles();
  const selectUser = (user) => {
    setCurrentUser(user);
  };

  return (
    <Box width="100%" display={matches ? "none" : "flex"} gridGap="15px">
      {props.users.map((user) => {
        return (
          <React.Fragment key={user.data}>
            <Box
              width="10%"
              display="flex"
              position="relative"
              flexDirection="column"
            >
              <Box
                display={
                  props.typingUsers[user.id] && user.id !== getSocket.id
                    ? "flex"
                    : "none"
                }
                className={classes.typingBubble}
              >
                <div></div>
                <div></div>
                <div></div>
              </Box>
              <img
                className={classes.cup}
                src={cupObj[user.name].default}
                alt=""
              />
            </Box>
          </React.Fragment>
        );
      })}
    </Box>
  );
};

export default UserBar;
