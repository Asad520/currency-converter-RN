import {bool, func, string} from 'prop-types';

export const propTypes = {
  text: string.isRequired,
  value: string.isRequired,
  onButtonPress: func.isRequired,
  onChangeText: func,
  editable: bool,
  keyboardType: string,
};

export const defaultProps = {
  editable: true,
  keyboardType: 'numeric',
};
