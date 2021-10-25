import React from 'react';
import {TouchableOpacity, Image, Text} from 'react-native';
import {defaultProps, propTypes} from './props';
import styles from './styles';

export const Button = props => {
  const {onPress, text} = props;
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Image
        source={require('../../../assets/images/reverse.png')}
        style={styles.buttonIcon}
        resizeMode="contain"
      />
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
