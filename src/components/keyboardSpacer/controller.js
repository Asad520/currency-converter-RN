import {useEffect, useState} from 'react';
import {Dimensions, Keyboard, Platform} from 'react-native';

const useKeyboardSpacer = props => {
  const {onToggle} = props;
  const [keyboardSpace, setKeyboardSpace] = useState(0);

  useEffect(() => {
    const updateKeyboardSpace = event => {
      if (!event.endCoordinates) {
        return;
      }

      const screenHeight = Dimensions.get('window').height;
      const newKeyboardSpace = screenHeight - event.endCoordinates.screenY;
      setKeyboardSpace(newKeyboardSpace);
      onToggle(true, newKeyboardSpace);
    };
    const showEvent =
      Platform.OS === 'android' ? 'keyboardDidShow' : 'keyboardWillShow';
    const showListener = Keyboard.addListener(showEvent, updateKeyboardSpace);

    const resetKeyboardSpace = () => {
      setKeyboardSpace(0);
      onToggle(false, 0);
    };
    const hideEvt =
      Platform.OS === 'android' ? 'keyboardDidHide' : 'keyboardWillHide';
    const hideListener = Keyboard.addListener(hideEvt, resetKeyboardSpace);

    return () => {
      showListener.remove();
      hideListener.remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {...props, keyboardSpace};
};

export default useKeyboardSpacer;
