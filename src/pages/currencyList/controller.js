import {useContext} from 'react';
import {useSafeArea} from 'react-native-safe-area-context';
import {ConversionContext} from '../../utils/context';

const useCurrencyList = props => {
  const {route} = props;
  const insets = useSafeArea();
  const {baseCurrency, quoteCurrency, setBaseCurrency, setQuoteCurrency} =
    useContext(ConversionContext);

  const params = route.params || {};
  const {isBaseCurrency} = params;

  return {
    ...props,
    insets,
    baseCurrency,
    quoteCurrency,
    setBaseCurrency,
    setQuoteCurrency,
    isBaseCurrency,
  };
};

export default useCurrencyList;
