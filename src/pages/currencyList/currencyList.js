import React from 'react';
import {StatusBar, View} from 'react-native';
import {colors} from '../../utils/constants';
import styles from './styles';
import useCurrencyList from './controller';

export const CurrencyList = props => {
  const {renderCurrencies} = useCurrencyList(props);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      {renderCurrencies()}
    </View>
  );
};
