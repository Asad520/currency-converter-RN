import React, {useContext} from 'react';
import {FlatList, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Entypo from 'react-native-vector-icons/Entypo';
import {RowItem} from '../../components/rowItem';
import {RowSeparator} from '../../components/rowSeparator';
import {colors} from '../../utils/constants';
import {ConversionContext} from '../../utils/context';
import currencies from '../../utils/currencies.json';
import styles from './styles';

const useCurrencyList = props => {
  const {route, navigation} = props;
  const insets = useSafeAreaInsets();
  const {baseCurrency, quoteCurrency, setBaseCurrency, setQuoteCurrency} =
    useContext(ConversionContext);

  const params = route.params || {};
  const {isBaseCurrency} = params;

  const renderCurrencies = () => (
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
  );

  return {
    ...props,
    insets,
    baseCurrency,
    quoteCurrency,
    setBaseCurrency,
    setQuoteCurrency,
    isBaseCurrency,
    renderCurrencies,
  };
};

export default useCurrencyList;
