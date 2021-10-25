import React from 'react';
import {View, TouchableOpacity, Text, TextInput} from 'react-native';
import useConversionInput from './controller';
import {propTypes, defaultProps} from './props';
import styles from './styles';

export const ConversionInput = props => {
  const {containerStyles, text, onButtonPress} = useConversionInput(props);

  return (
    <View style={containerStyles}>
      <TouchableOpacity style={styles.button} onPress={onButtonPress}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
      <TextInput style={styles.input} {...props} />
    </View>
  );
};

ConversionInput.propTypes = propTypes;
ConversionInput.defaultProps = defaultProps;
