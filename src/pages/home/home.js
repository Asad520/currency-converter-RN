import React from 'react';
import {
  View,
  StatusBar,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {format} from 'date-fns';
import Entypo from 'react-native-vector-icons/Entypo';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ConversionInput} from '../../components/conversionInput';
import {Button} from '../../components/button';
import {KeyboardSpacer} from '../../components/keyboardSpacer';
import {colors} from '../../utils/constants';
import useHome from './controller';
import styles from './styles';

export const Home = props => {
  const {
    navigation,
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
  } = useHome(props);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.blue} />
      <ScrollView scrollEnabled={scrollEnabled}>
        <SafeAreaView style={styles.header}>
          <TouchableOpacity onPress={() => navigation.push('Options')}>
            <Entypo name="cog" size={32} color={colors.white} />
          </TouchableOpacity>
        </SafeAreaView>

        <View style={styles.content}>
          <View style={styles.logoContainer}>
            <Image
              source={require('../../../assets/images/background.png')}
              style={styles.logoBackground}
              resizeMode="contain"
            />
            <Image
              source={require('../../../assets/images/logo.png')}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.textHeader}>Currency Converter</Text>
          {isLoading ? (
            <ActivityIndicator color={colors.white} size="large" />
          ) : (
            <>
              <View style={styles.inputContainer}>
                <ConversionInput
                  text={baseCurrency}
                  value={currencyInput}
                  onButtonPress={() =>
                    navigation.push('CurrencyList', {
                      title: 'Base Currency',
                      isBaseCurrency: true,
                    })
                  }
                  keyboardType="numeric"
                  onChangeText={text => setCurrencyInput(text)}
                />
                <ConversionInput
                  text={quoteCurrency}
                  value={
                    currencyInput &&
                    `${(parseFloat(currencyInput) * conversionRate).toFixed(2)}`
                  }
                  editable={false}
                  onButtonPress={() =>
                    navigation.push('CurrencyList', {
                      title: 'Quote Currency',
                      isBaseCurrency: false,
                    })
                  }
                />
              </View>
              <Text style={styles.text}>
                {`1 ${baseCurrency} = ${conversionRate} ${quoteCurrency} as of ${
                  date && format(new Date(date), 'MMM do, yyyy')
                }`}
              </Text>
              <Button
                text="Reverse Currencies"
                onPress={() => swapCurrencies()}
              />
            </>
          )}
          <KeyboardSpacer onToggle={visible => setScrollEnabled(visible)} />
        </View>
      </ScrollView>
    </View>
  );
};
