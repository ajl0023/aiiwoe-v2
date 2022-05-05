import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect } from "react";
import { cupObj } from "../../../images/cups/cups";

const useStyles = makeStyles((theme) => ({
  cup: {
    width: "60px",
  },
  typingBubble: {
    ...theme.typingBubble,
  },
}));
const Users = (props) => {
  useEffect(() => {}, []);
  const classes = useStyles();
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      height="100%"
      width="100%"
    >
      <Box bgcolor="rgba(255, 255, 255, 0.5)">
        {props.users.map((user, i) => {
          return (
            <Box
              key={user.id}
              color="white"
              padding="5px 15px"
              display="flex"
              gridGap="15px"
              width="100%"
              alignItems="center"
              borderBottom={
                i !== props.users.length - 1 ? "1px solid black" : ""
              }
            >
              <Box position="relative" key={user.id}>
                <Box
                  display={props.typingUsers[user.id] ? "flex" : "none"}
                  className={classes.typingBubble}
                >
                  <div></div>
                  <div></div>
                  <div></div>
                </Box>
                <img
                  key={user.name}
                  className={classes.cup}
                  src={cupObj[user.name].default}
                  alt=""
                />
              </Box>
              <Typography>{user.name}</Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Users;
