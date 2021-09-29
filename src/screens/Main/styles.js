import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: 'white',
    height: Dimensions.get('window').height,
  },
  operatorWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '85%',
  },
  separator: {
    width: '85%',
    height: 2,
    marginTop: 20,
    backgroundColor: 'black',
  },
  resultWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '85%',
    marginTop: 20,
  },
  text: {
    fontSize: 28,
  },
});

export default styles;
