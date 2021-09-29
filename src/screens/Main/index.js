import React, {useState} from 'react';
import {View, Text, ScrollView, Dimensions} from 'react-native';
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

  const handleOnChange = index => newValue => {
    const temp = [...inputs];
    temp[index].value = newValue;
    setInputs(temp);
  };

  const handleOnCheck = index => checked => {
    const temp = [...inputs];
    temp[index].enabled = checked;
    setInputs(temp);
  };

  const calculate = operator => () => {
    const filtered = inputs.filter((item, index) => item.enabled);
    let sum = parseInt(filtered[0].value, 10);
    switch (operator) {
      case '+':
        for (let i = 1; i < filtered.length; i++) {
          const val = parseInt(filtered[i].value, 10);
          sum += val;
        }
        setResult(sum);
        break;
      case '-':
        for (let i = 1; i < filtered.length; i++) {
          const val = parseInt(filtered[i].value, 10);
          sum -= val;
        }
        setResult(sum);
        break;
      case 'x':
        for (let i = 1; i < filtered.length; i++) {
          const val = parseInt(filtered[i].value, 10);
          sum *= val;
        }
        setResult(sum);
        break;
      case '/':
        for (let i = 1; i < filtered.length; i++) {
          const val = parseInt(filtered[i].value, 10);
          if (val === 0) {
            break;
          }
          sum /= val;
        }
        setResult(sum);
        break;
    }
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
              onChange={handleOnChange(index)}
              onChecked={handleOnCheck(index)}
            />
          );
        })}

        <View style={styles.operatorWrapper}>
          {operators.map((item, index) => (
            <OperatorButton
              key={index}
              title={item}
              onPress={calculate(item)}
            />
          ))}
        </View>
        <View style={styles.separator} />
        <View style={styles.resultWrapper}>
          <Text style={styles.text}>Hasil:</Text>
          <Text style={styles.text}>{result}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Main;
