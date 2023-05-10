import Ract from 'react';
import {Radio} from '@material-ui/core';
import { withStyles} from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

const  GreenRadio = withStyles({ 
    root: {
      color: green[400],
      '&$checked': {
        color: green[600],
      },
      display: "none"
    },
    checked: {},
  })((props) => <Radio color="default" {...props} />);


export default GreenRadio;