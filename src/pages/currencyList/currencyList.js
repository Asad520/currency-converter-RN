import React from 'react';
import {StatusBar, FlatList, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import currencies from '../../utils/currencies.json';
import {RowItem} from '../../components/rowItem';
import {RowSeparator} from '../../components/rowSeparator';
import {colors} from '../../utils/constants';
import styles from './styles';
import useCurrencyList from './controller';

export const CurrencyList = props => {
  const {
    isBaseCurrency,
    baseCurrency,
    quoteCurrency,
    setBaseCurrency,
    setQuoteCurrency,
    navigation,
    insets,
  } = useCurrencyList(props);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <FlatList
        data={currencies}
        renderItem={({item}) => {
          let selected = false;

          if (isBaseCurrency && item === baseCurrency) {
            selected = true;
          } else if (!isBaseCurrency && item === quoteCurrency) {
            selected = true;
          }

          return (
            <RowItem
              title={item}
              onPress={() => {
                if (isBaseCurrency) {
                  setBaseCurrency(item);
                } else {
                  setQuoteCurrency(item);
                }
                navigation.pop();
              }}
              rightIcon={
                selected && (
                  <View style={styles.icon}>
                    <Entypo name="check" size={20} color={colors.white} />
                  </View>
                )
              }
            />
          );
        }}
        keyExtractor={item => item}
        ItemSeparatorComponent={() => <RowSeparator />}
        ListFooterComponent={() => (
          <View style={{paddingBottom: insets.bottom}} />
        )}
      />
    </View>
  );
};
