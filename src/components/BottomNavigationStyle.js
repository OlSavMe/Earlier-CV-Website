import { makeStyles } from '@material-ui/core/styles';
import {
  backgroundColorDark,
  colorWhite
} from '../styles/centralStyles';

export const useStyles = makeStyles(theme => ({

  // Styling for bottom navigatinon
  root: {
    backgroundColor: backgroundColorDark,
    color: colorWhite
  },
  buttons: {
    color: colorWhite
  },
  link: {
    color: 'white',
  }
}));