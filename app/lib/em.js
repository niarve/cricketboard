import Dimensions from 'Dimensions';

// Get Device Dimensions
const x = Dimensions.get('window').width;
const y = Dimensions.get('window').height;

// Calculating ratio from iPhone breakpoints
const ratioX = x < 375 ? (x < 320 ? 0.75 : 0.875) : 1 ;
const ratioY = y < 568 ? (y < 480 ? 0.75 : 0.875) : 1 ;

// We set our base font size value
const base_unit = 16;
const unit = base_unit * ratioX;


/*
 * This is my implementation of em for React Native
 * based on https://medium.com/@elieslama/responsive-design-in-react-native-876ea9cd72a8
 *
 * for normal react-native sizing please see chart below
 *      value | em
 *       100  | em(4)
 *       75   | em(3)
 *       50   | em(2.5)
 *       30   | em(2)
 *       20   | em(1.5)
 *       10   | em(1)
 *
 */

export function em(value) {
  return unit * value;
}
