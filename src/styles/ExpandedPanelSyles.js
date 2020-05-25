import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(20),
    flexShrink: "50%",
    fontFamily: "Belleza",
    textDecoration: "none",
    transition: "all 600ms",
    "&:hover": {
      fontSize: theme.typography.pxToRem(23),
    },
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(18),
    color: theme.palette.text.secondary,
    paddingLeft: "1%",
    fontFamily: "Belleza",
  },
}));
