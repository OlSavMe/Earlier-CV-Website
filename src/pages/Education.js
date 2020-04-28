import React from "react";
import '../styles/EducationStyles.scss';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import InsertLinkIcon from '@material-ui/icons/InsertLink';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(16),
        // flexBasis: '33.33%',
        flexShrink: '50%',
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(18),
        color: theme.palette.text.secondary,
        paddingLeft: '5%',
    },
}));



export default function Education() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <div className='edu'>

            <div className='container'>
                <h1>Haaga Helia UAS 2017-2020 (257 cr GPA 4.08)</h1>
                <h3>Software Development Path</h3>
                <div className={classes.root}>
                    <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <Typography className={classes.heading}>Froont End Development, 5cr</Typography>
                            <Typography className={classes.secondaryHeading}><a href="http://www.haaga-helia.fi/en/opinto-opas/opintojaksokuvaukset/SWD4TF022">{<InsertLinkIcon />} </a></Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
                                The set of needed tools and their relevance
                                Mastering HTML, CSS, JavaScript, browser developer tools, e.g. JavaScript debugger and JavaScript console
                                Verification and error-tracking
                                Document Object Model, Browser Object Model and their relationship and linkages with JS,
                                The JS "environment". That is JavaScript objects and functions loaded into browser memory. JavaScript libraries. (Using jQuery as an example)
                                Understanding how much can be done at the front-end without back-end. Even a Single-Page Application (SPA)
                                Request-Response model. Understanding http GET and POST requests. Understanding how the browser communicates with the web server.
                                Understanding how to connect to the back-end. Understanding how to specify and use back-end services in the front-end.
                                Creating different kind of front-ends that use the given ready-made back-end services
                                AJAX request-response model.
                                JSON as AJAX response format
                                (XML as AJAX response format)
                                jQuery, Bootstrap
                                Responsive web pages with Media Queries.
                                "CSS3”. E.g. using variables in style rules
                                “HTML5”: E.g. Drag-and-drop, local store, geolocation, canvas and charts
                                A small selection of JS front-end frameworks (Angular, ReactJS?) walked through
                                Understanding of which areas student doesn’t know at the end.
          </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2bh-content"
                            id="panel2bh-header"
                        >
                            <Typography className={classes.heading}>Users</Typography>
                            <Typography className={classes.secondaryHeading}>
                                You are currently not an owner
          </Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
                                Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar
                                diam eros in elit. Pellentesque convallis laoreet laoreet.
          </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3bh-content"
                            id="panel3bh-header"
                        >
                            <Typography className={classes.heading}>Mobile App Development Using React Native, 3 cr</Typography>
                            <Typography className={classes.secondaryHeading}>
                                <a href="http://opinto-opas.metropolia.fi/en/tarjontakorit/en/54819">link</a>
                            </Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
                                This course provides an introduction to mobile application development using React Native. The concepts covered by the course include: React, React Native, Expo and Snack; component, prop, state, style, layout, image, text input, touch handling, HTTP, and deployment. The overall goal of the course is to familiarize students with basic React Native concepts and development skills.
                                Objectives of the course are:
                                
          </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel4bh-content"
                            id="panel4bh-header"
                        >
                            <Typography className={classes.heading}></Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
                                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
                                vitae egestas augue. Duis vel est augue.
          </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </div>
                <h3>ICT Infrastructure Path</h3>
                <div className={classes.root}>
                    <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <Typography className={classes.heading}>Froont End Development</Typography>
                            <Typography className={classes.secondaryHeading}><a href="http://www.haaga-helia.fi/en/opinto-opas/opintojaksokuvaukset/SWD4TF022">link</a></Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
                                The set of needed tools and their relevance
                                Mastering HTML, CSS, JavaScript, browser developer tools, e.g. JavaScript debugger and JavaScript console
                                Verification and error-tracking
                                Document Object Model, Browser Object Model and their relationship and linkages with JS,
                                The JS "environment". That is JavaScript objects and functions loaded into browser memory. JavaScript libraries. (Using jQuery as an example)
                                Understanding how much can be done at the front-end without back-end. Even a Single-Page Application (SPA)
                                Request-Response model. Understanding http GET and POST requests. Understanding how the browser communicates with the web server.
                                Understanding how to connect to the back-end. Understanding how to specify and use back-end services in the front-end.
                                Creating different kind of front-ends that use the given ready-made back-end services
                                AJAX request-response model.
                                JSON as AJAX response format
                                (XML as AJAX response format)
                                jQuery, Bootstrap
                                Responsive web pages with Media Queries.
                                "CSS3”. E.g. using variables in style rules
                                “HTML5”: E.g. Drag-and-drop, local store, geolocation, canvas and charts
                                A small selection of JS front-end frameworks (Angular, ReactJS?) walked through
                                Understanding of which areas student doesn’t know at the end.
          </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2bh-content"
                            id="panel2bh-header"
                        >
                            <Typography className={classes.heading}>Users</Typography>
                            <Typography className={classes.secondaryHeading}>
                                You are currently not an owner
          </Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
                                Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar
                                diam eros in elit. Pellentesque convallis laoreet laoreet.
          </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3bh-content"
                            id="panel3bh-header"
                        >
                            <Typography className={classes.heading}>Advanced settings</Typography>
                            <Typography className={classes.secondaryHeading}>
                                Filtering has been entirely disabled for whole web server
          </Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
                                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
                                vitae egestas augue. Duis vel est augue.
          </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel4bh-content"
                            id="panel4bh-header"
                        >
                            <Typography className={classes.heading}>Personal data</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
                                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
                                vitae egestas augue. Duis vel est augue.
          </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </div>
                <h3>Digital Services and BI Path</h3>
                <div className={classes.root}>
                    <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <Typography className={classes.heading}>Froont End Development</Typography>
                            <Typography className={classes.secondaryHeading}><a href="http://www.haaga-helia.fi/en/opinto-opas/opintojaksokuvaukset/SWD4TF022">link</a></Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
                                The set of needed tools and their relevance
                                Mastering HTML, CSS, JavaScript, browser developer tools, e.g. JavaScript debugger and JavaScript console
                                Verification and error-tracking
                                Document Object Model, Browser Object Model and their relationship and linkages with JS,
                                The JS "environment". That is JavaScript objects and functions loaded into browser memory. JavaScript libraries. (Using jQuery as an example)
                                Understanding how much can be done at the front-end without back-end. Even a Single-Page Application (SPA)
                                Request-Response model. Understanding http GET and POST requests. Understanding how the browser communicates with the web server.
                                Understanding how to connect to the back-end. Understanding how to specify and use back-end services in the front-end.
                                Creating different kind of front-ends that use the given ready-made back-end services
                                AJAX request-response model.
                                JSON as AJAX response format
                                (XML as AJAX response format)
                                jQuery, Bootstrap
                                Responsive web pages with Media Queries.
                                "CSS3”. E.g. using variables in style rules
                                “HTML5”: E.g. Drag-and-drop, local store, geolocation, canvas and charts
                                A small selection of JS front-end frameworks (Angular, ReactJS?) walked through
                                Understanding of which areas student doesn’t know at the end.
          </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2bh-content"
                            id="panel2bh-header"
                        >
                            <Typography className={classes.heading}>Users</Typography>
                            <Typography className={classes.secondaryHeading}>
                                You are currently not an owner
          </Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
                                Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar
                                diam eros in elit. Pellentesque convallis laoreet laoreet.
          </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3bh-content"
                            id="panel3bh-header"
                        >
                            <Typography className={classes.heading}>Advanced settings</Typography>
                            <Typography className={classes.secondaryHeading}>
                                Filtering has been entirely disabled for whole web server
          </Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
                                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
                                vitae egestas augue. Duis vel est augue.
          </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel4bh-content"
                            id="panel4bh-header"
                        >
                            <Typography className={classes.heading}>Personal data</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
                                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
                                vitae egestas augue. Duis vel est augue.
          </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </div>

            </div>
        </div >

    );
}
