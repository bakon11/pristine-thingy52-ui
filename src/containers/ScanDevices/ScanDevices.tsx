import React, {useEffect, useState} from "react";
import { MuiThemeProvider, Typography, CssBaseline, Grid } from "@material-ui/core"; //tslint:disable-line
import useDarkMode from "use-dark-mode";
import { lightTheme, darkTheme } from "../../themes/theme";
import NavBar from "../NavBar/NavBar"
import {thingyHTTPSapi} from "../../api/api"
import "./ScanDevices.css";

const ScanDevices: React.FC = () => {
  const darkMode = useDarkMode();
  const theme = darkMode.value ? darkTheme : lightTheme;
  const [foundDevices, setFoundDevices ] = useState<any>();

  const startScanDevices = async() =>{
    console.log("---Scanning---");
    const scanResult: any = await thingyHTTPSapi.startScan();
    console.log(scanResult);
    setFoundDevices(scanResult);
  };

  useEffect(()=>{
    startScanDevices();
  }, [])

  return (
    <MuiThemeProvider theme={theme}>
      <NavBar />
      <div>
        <CssBaseline />
        <Grid container alignContent="center" alignItems="center" justify="center" direction="column">
          <div><Typography>Please select your thingy device/s</Typography></div>
          <div>
            {foundDevices ? foundDevices.map((devices: any)=>(
            <div style={{margin:"5px"}}>
                <button style={{minWidth:"300px"}}>
                    <div>Name: {devices && devices.name}</div>
                    <div>Mac: {devices && devices.address}</div>
                </button>
            </div>        
            )):"---Scanning---"}
          </div>
        </Grid>
      </div>
    </MuiThemeProvider>
  );
};

export default ScanDevices;
