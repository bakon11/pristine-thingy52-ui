import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar,IconButton, Grid, Button } from "@material-ui/core"; //tslint:disable-line
import useDarkMode from "use-dark-mode";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import "./NavBar.css";

const NavBar: React.FC = () => {
  const darkMode = useDarkMode();

  return (
    <AppBar position="sticky" color="default" elevation={0}>
      <Toolbar>
        <Grid container alignContent="center" alignItems="center" justify="space-between">
          <Grid item style={{padding: "10px"}}>
            <Link to="/Home"><Button>Home</Button></Link>
            <Link to="/ScanDevices"><Button>Scan</Button></Link>
            <Link to="/ViewDevice"><Button>Device 1</Button></Link>
            <IconButton onClick={darkMode.toggle}>
              {darkMode.value ? <Brightness3Icon /> : <WbSunnyIcon />}
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
