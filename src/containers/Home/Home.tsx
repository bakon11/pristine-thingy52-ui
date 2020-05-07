import React from "react";
import { MuiThemeProvider, Typography, CssBaseline, Grid } from "@material-ui/core"; //tslint:disable-line
import useDarkMode from "use-dark-mode";
import { lightTheme, darkTheme } from "../../themes/theme";
import NavBar from "../NavBar/NavBar"
import "./Home.css";

const Home: React.FC = () => {
  const darkMode = useDarkMode();
  const theme = darkMode.value ? darkTheme : lightTheme;

  return (
    <MuiThemeProvider theme={theme}>
      <NavBar />
      <div>
        <CssBaseline />
        <Grid container alignContent="center" alignItems="center" justify="center" direction="column">
          <div style={{padding: "10px"}}>
            <Typography>
              Welcome to the Monitor
            </Typography>
            <hr/>
            <Typography>
              Please us the menu to either scan for your thingy devices and add them to the app or to view stats for a already added device.
            </Typography>
          </div>
          <div>
          </div>
        </Grid>
      </div>
    </MuiThemeProvider>
  );
};

export default Home;
