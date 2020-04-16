import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import PinDropIcon from '@material-ui/icons/PinDrop';
import Home from '@material-ui/icons/Home';
import PermMediaIcon from '@material-ui/icons/PermMedia';
import PeopleIcon from '@material-ui/icons/People';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import SchoolIcon from '@material-ui/icons/School';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import AppBar from '@material-ui/core/AppBar';
import { Link } from 'react-router-dom';
// import { makeStyles } from '@material-ui/core/styles';
import './BottomNavigationStyle.js';
import { useStyles } from './BottomNavigationStyle.js';

// const useStyles = makeStyles({
//     root: {
//         backgroundColor: '#ffffff00',
//         color: '#FFFFFF'

//     },
//     selected: {
//         color: '#FFFFFF'
//     },
// });


export default function BottomNav() {
    const classes = useStyles();
    const appBarStyle = {
        top: 0,
        backgroundColor: '#ffffff00',
        // color: '#FFFFFF',
    };
    // const navStyle = {
    //     backgroundColor: '#ffffff00',
    //     color: '#FFFFFF',

    // };
    // const iconStyle = {
    //     color: '#FFFFFF',

    // };
    const [value, setValue] = React.useState(0);

    return (
        <AppBar position="relative" style={appBarStyle} className="bottom-navigation">
            <BottomNavigation
                // style={navStyle}
                showLabels
                className={classes.root}
                value={value}
                onChange={(event, newValue) => setValue(newValue)}>
                <BottomNavigationAction
                    // className={classes.selected}
                    // style={iconStyle}
                    to="/"
                    component={Link}
                    label="Home"
                    className={classes.buttons}
                    icon={<Home />}
                />
                <BottomNavigationAction
                    // className={classes.selected}
                    // style={iconStyle}
                    to="/edu"
                    component={Link}
                    label="Career"
                    className={classes.buttons}
                    icon={<ThumbUpIcon />}
                />
                <BottomNavigationAction
                    // className={classes.selected}
                    // style={iconStyle}
                    to="/portfolio"
                    component={Link}
                    label="Portfolio"
                    className={classes.buttons}
                    icon={<PermMediaIcon />}
                />
                <BottomNavigationAction
                    // className={classes.selected}
                    // style={iconStyle}
                    to="/edu"
                    component={Link}
                    label="Education"
                    className={classes.buttons}
                    icon={<SchoolIcon />}
                />
            </BottomNavigation>
        </AppBar>
    );
}
