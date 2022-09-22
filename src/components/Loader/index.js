import React from 'react';
import AnimatedLoader from 'react-native-animated-loader';
import { styles } from './styles';

const Loader = ({ visible }) => {
  return (
    <AnimatedLoader
      visible={visible}
      source={require('../../assets/images/loader/loader.json')}
      animationStyle={styles.loader}
      speed={1}
      />
  );
};

export default Loader