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
    width: '75%',
  },
  headcontent: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  logout: {
    padding: 10,
    backgroundColor: 'red',
    borderRadius: 10,
  },
  morecontent: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  userlist: {
    flex: 1,
    margin: 1,
    flexDirection: 'row',
    alignContent: 'space-between',
  },
});

export default styles;
