import {useState, useContext} from 'react';
import {ConversionContext} from '../../utils/context';

const useHome = props => {
  const {baseCurrency, quoteCurrency, swapCurrencies, date, rates, isLoading} =
    useContext(ConversionContext);
  const [currencyInput, setCurrencyInput] = useState('100');
  const [scrollEnabled, setScrollEnabled] = useState(false);

  const conversionRate = rates[quoteCurrency];

  return {
    ...props,
    scrollEnabled,
    isLoading,
    baseCurrency,
    currencyInput,
    setCurrencyInput,
    quoteCurrency,
    conversionRate,
    date,
    swapCurrencies,
    setScrollEnabled,
  };
};

export default useHome;
