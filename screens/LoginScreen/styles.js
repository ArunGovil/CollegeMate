import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  head: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#00154F',
  },
  input: {
    padding: 30,
    width: '80%',
  },
  emailinput: {
    padding: 12,
    borderRadius: 30,
    borderWidth: 1,
    paddingLeft: 20,
    marginBottom: 20,
    borderColor: '#D3CCCC',
  },
  passwordinput: {
    padding: 12,
    borderRadius: 30,
    borderWidth: 1,
    paddingLeft: 20,
    borderColor: '#D3CCCC',
  },
  loginbutton: {
    backgroundColor: '#ED335F',
    padding: 18,
    marginBottom: 20,
    borderRadius: 30,
    width: '30%',
    alignItems: 'center',
  },
  buttontext: {
    color: 'white',
  },
  signuptext: {
    color: '#00154F',
  },
});

export default styles;
