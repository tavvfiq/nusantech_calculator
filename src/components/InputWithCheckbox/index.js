import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import styles from './styles';

const InputWithCheckbox = ({value, onChange, type, onChecked}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const handleOnChecked = newValue => {
    setToggleCheckBox(newValue);
    if (onChecked) {
      onChecked(newValue);
    }
  };

  const handleOnChange = newValue => {
    if (onChange) {
      onChange(newValue);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          defaultValue="0"
          placeholder="masukkan angka"
          placeholderTextColor="grey"
          keyboardType={type || 'default'}
          value={value || ''}
          onChangeText={handleOnChange}
          editable={toggleCheckBox}
        />
      </View>
      <CheckBox
        tintColors={{false: 'black', true: 'black'}}
        style={styles.checkbox}
        disabled={false}
        value={toggleCheckBox}
        onValueChange={handleOnChecked}
      />
    </View>
  );
};

export default InputWithCheckbox;
