import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import styles from './styles';

const OperatorButton = ({title, onPress}) => {
  const handleOnPress = () => {
    if (onPress) {
      onPress();
    }
  };
  return (
    <TouchableOpacity style={styles.container} onPress={handleOnPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default OperatorButton;
