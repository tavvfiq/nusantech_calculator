import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  textInputContainer: {
    flexGrow: 5,
    borderWidth: 2,
  },
  checkbox: {
    borderColor: 'red',
    alignSelf: 'center',
    marginLeft: 20,
  },
  textInput: {
    color: 'black',
    height: 50,
  },
});

export default styles;
