import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'white',
  },
  head: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#00154F',
  },
  input: {
    width: '70%',
    margin: 10,
  },
  nameinput: {
    borderRadius: 25,
    borderWidth: 1,
    paddingLeft: 20,
    borderColor: '#D3CCCC',
  },
  singnupbutton: {
    backgroundColor: '#ED335F',
    padding: 18,
    borderRadius: 30,
    width: '30%',
    alignItems: 'center',
  },
  buttontext: {
    color: 'white',
  },
  logintext: {
    color: 'black',
    marginTop: 10,
    marginBottom: 10,
  },
});

export default styles;
