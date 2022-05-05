import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { useHistory, withRouter } from "react-router-dom";
import logo from "./images/logo.png";

const useStyles = makeStyles((theme) => ({
  logo: {
    width: "100px",
    cursor: "pointer",
  },
}));

const Navbar = () => {
  const history = useHistory();
  const classes = useStyles();
  return (
    <Box
      position="absolute"
      top="0"
      width="100%"
      zIndex="3"
      bgcolor="#512905"
      padding="5px 15px"
    >
      <img
        onClick={() => {
          history.push("/");
        }}
        className={classes.logo}
        src={logo}
        alt=""
      />
    </Box>
  );
};

export default withRouter(Navbar);
