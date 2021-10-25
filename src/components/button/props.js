import {func, string} from 'prop-types';

export const propTypes = {
  onPress: func.isRequired,
  text: string.isRequired,
};

export const defaultProps = {};
