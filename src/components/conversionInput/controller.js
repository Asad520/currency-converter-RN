import styles from './styles';

const useConversionInput = props => {
  const containerStyles = [styles.container];
  const {editable} = props;
  if (!editable) {
    containerStyles.push(styles.containerDisabled);
  }
  return {...props, containerStyles};
};

export default useConversionInput;
