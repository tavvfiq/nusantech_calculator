import React, {useState} from 'react';
import {View, Text, ScrollView, ToastAndroid} from 'react-native';
import InputWithCheckbox from '../../components/InputWithCheckbox';
import OperatorButton from '../../components/OperatorButton';

import styles from './styles';

const operators = ['+', '-', 'x', '/'];

const Main = () => {
  const [inputs, setInputs] = useState([]);
  const [result, setResult] = useState(0);

  const registerInput = index => {
    const idx = inputs.findIndex(item => item.id === index);
    const temp = [...inputs];
    if (idx < 0) {
      temp.push({id: index, value: '', enabled: false});
      setInputs(temp);
    }
  };

  const handleInputChange = index => newValue => {
    const temp = [...inputs];
    temp[index].value = newValue;
    setInputs(temp);
  };

  const handleInputChecked = index => checked => {
    const temp = [...inputs];
    temp[index].enabled = checked;
    setInputs(temp);
  };

  const showToast = message => {
    ToastAndroid.showWithGravity(
      message,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
    );
  };

  const calculate = operator => () => {
    const filtered = inputs.filter(item => item.enabled);
    if (filtered.length <= 1) {
      showToast('input harus lebih dari satu');
      return;
    }
    let sum = parseInt(filtered[0].value, 10);
    for (let i = 1; i < filtered.length; i++) {
      const val = parseInt(filtered[i].value, 10);
      if (operator === '+') {
        sum += val;
      } else if (operator === '-') {
        sum -= val;
      } else if (operator === 'x') {
        sum *= val;
      } else if (operator === '/') {
        if (val === 0) {
          showToast('penyebut tidak boleh nol');
          return;
        }
        sum /= val;
      }
    }
    setResult(sum);
  };

  const numOfInputs = new Array(3).fill(0);
  return (
    <ScrollView>
      <View style={styles.container}>
        {numOfInputs.map((_, index) => {
          registerInput(index);
          return (
            <InputWithCheckbox
              key={index}
              value={inputs[index]?.value || ''}
              type="numeric"
              onChange={handleInputChange(index)}
              onChecked={handleInputChecked(index)}
            />
          );
        })}
        <View style={styles.operatorWrapper}>
          {operators.map((operator, index) => (
            <OperatorButton
              key={index}
              title={operator}
              onPress={calculate(operator)}
            />
          ))}
        </View>
        <View style={styles.separator} />
        <View style={styles.resultWrapper}>
          <Text style={styles.text}>Hasil:</Text>
          <Text style={styles.text}>{Math.round(result * 100) / 100}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Main;
