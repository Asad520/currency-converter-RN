import {func, string} from 'prop-types';

export const propTypes = {
  title: string.isRequired,
  onPress: func.isRequired,
};

export const defaultProps = {};
