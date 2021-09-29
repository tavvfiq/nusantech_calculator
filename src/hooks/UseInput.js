import {useState} from 'react';

export default function UseInput(initialValue, options = {}) {
  const [value, setValue] = useState(initialValue);
  const reset = () => {
    setValue(initialValue);
  };
  const bind = {
    value,
    onChange: e => {
      if (options.onlyNumber) {
        let val = e.target.value;
        if (Number(val) || e.target.value === '') {
          setValue(e.target.value);
        }
      } else {
        setValue(e.target.value);
      }
    },
  };

  return [value, bind, reset];
}
