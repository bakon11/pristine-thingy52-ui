import React, { useState, useEffect } from "react";
import moment from "moment";
import { MuiThemeProvider, CssBaseline, Grid } from "@material-ui/core"; //tslint:disable-line
import useDarkMode from "use-dark-mode";
import {thingyHTTPSapi} from "../../api/api"
import { lightTheme, darkTheme } from "../../themes/theme";
import NavBar from "../NavBar/NavBar"
import "./ViewDevice.css";

const ViewDevice: React.FC = () => {
  const darkMode = useDarkMode();
  const theme = darkMode.value ? darkTheme : lightTheme;
  const [temp, setTemp ] = useState<any>();
  const [humid, setHumid ] = useState<any>();
  const [battery, setBattery] = useState<any>();

  const getSensorData = async() =>{
    console.log("getting sensor data");
    
    const batteryResult: any = await thingyHTTPSapi.getSensorData("e5:b6:7f:eb:a0:dd", "battery");
    const batteryDataResult: any = JSON.parse(batteryResult);
    setBattery(batteryDataResult);
    
    const tempResult: any = await thingyHTTPSapi.getSensorData("e5:b6:7f:eb:a0:dd", "temp");
    const tempDataResult: any = JSON.parse(tempResult);
    setTemp(tempDataResult);
    
    const humidResult: any = await thingyHTTPSapi.getSensorData("e5:b6:7f:eb:a0:dd", "humid")
    const humidDataResult: any = JSON.parse(humidResult);
    setHumid(humidDataResult);
  }
  useEffect(()=>{
    getSensorData();
    const refreshSensors = setInterval(() => getSensorData(), 20000);
    return () => clearInterval(refreshSensors);
  }, [])

  return (
    <MuiThemeProvider theme={theme}>
      <NavBar />
      <div>
        <CssBaseline />
        <Grid container alignContent="center" alignItems="center" justify="center" direction="column">
          <div>
              <div>{temp &&  moment.unix(temp[0].date.ms).format("LLLL")}</div>
              <div>Temp: {temp ? (temp[0].sensor * 9/5 + 32).toFixed(2)+"F" : "loading"}</div>
              <hr />
          </div>
          <div>
              <div>{humid &&  moment.unix(humid[0].date.ms).format("LLLL")}</div>
              <div>Humid: {humid ? humid[0].sensor+"%": "loading"}</div>
              <hr />
          </div>
          <div>
              <div>{battery &&  moment.unix(battery[0].date.ms).format("LLLL")}</div>
              <div>Battery: {battery ? battery[0].sensor + "v": "loading" }</div>
              <hr />
          </div>      
        </Grid>
      </div>
    </MuiThemeProvider>
  );
};

export default ViewDevice;
