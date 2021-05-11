import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    margin: 5,
    flexDirection: 'row',
    height: '8%',
    // backgroundColor: 'pink',
  },
  head: {
    padding: 10,
    justifyContent: 'center',
    width: '85%',
  },
  headcontent: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  more: {
    padding: 10,
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  morecontent: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default styles;
