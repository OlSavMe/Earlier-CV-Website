import React from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Home from "@material-ui/icons/Home";
import PermMediaIcon from "@material-ui/icons/PermMedia";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import SchoolIcon from "@material-ui/icons/School";
import AppBar from "@material-ui/core/AppBar";
import { Link } from "react-router-dom";
import ".././styles/NavigationStyles.scss";

export default function BottomNav() {
  const appBarStyle = {
    backgroundColor: "#ffffff00",
  };
  const [value, setValue] = React.useState(0);

  return (
    <AppBar style={appBarStyle} className="bottom-navigation">
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => setValue(newValue)}
      >
        <BottomNavigationAction
          to="/"
          // value="home"
          component={Link}
          label="Home"
          icon={<Home />}
        />
        <BottomNavigationAction
          to="/career"
          // value="career"
          component={Link}
          label="Career"
          icon={<ThumbUpIcon />}
        />
        <BottomNavigationAction
          to="/portfolio"
          // value="portfolio"
          component={Link}
          label="Portfolio"
          icon={<PermMediaIcon />}
        />
        <BottomNavigationAction
          to="/edu"
          // value="edu"
          component={Link}
          label="Education"
          icon={<SchoolIcon />}
        />
      </BottomNavigation>
    </AppBar>
  );
}
