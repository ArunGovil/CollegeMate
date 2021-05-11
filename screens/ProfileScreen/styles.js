import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
  },
  header: {
    padding: 5,
    height: '8%',
  },
  head: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  profilecontainer: {
    margin: 5,
    padding: 10,
    flexDirection: 'row',
    borderRadius: 60,
  },
  photocontainer: {
    backgroundColor: '#ED335F',
    width: 120,
    height: 120,
    borderRadius: 360,
    alignItems: 'center',
    justifyContent: 'center',
  },
  photo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  detailscontainer: {
    width: '70%',
    padding: 15,
    justifyContent: 'center',
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  batch: {
    fontSize: 20,
  },
  edit: {
    margin: 5,
    alignItems: 'center',
    backgroundColor: '#ED335F',
    padding: 10,
  },
  edittext: {
    color: 'white',
    fontSize: 20,
  },
});

export default styles;
