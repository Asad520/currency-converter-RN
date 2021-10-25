import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {propTypes, defaultProps} from './props';
import styles from './styles';

export const RowItem = ({title, onPress, rightIcon}) => (
  <TouchableOpacity onPress={onPress} style={styles.row}>
    <Text style={styles.title}>{title}</Text>
    {rightIcon}
  </TouchableOpacity>
);

RowItem.propTypes = propTypes;
RowItem.defaultProps = defaultProps;
