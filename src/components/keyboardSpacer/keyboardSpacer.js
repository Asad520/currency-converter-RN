import React from 'react';
import {View} from 'react-native';
import useKeyboardSpacer from './controller';
import styles from './styles';
import {defaultProps, propTypes} from './props';

export const KeyboardSpacer = props => {
  const {keyboardSpace, style} = useKeyboardSpacer(props);

  return <View style={[styles.container, {height: keyboardSpace}, style]} />;
};

KeyboardSpacer.propTypes = propTypes;
KeyboardSpacer.defaultProps = defaultProps;
