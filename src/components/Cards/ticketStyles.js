import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: 'white'
  },
  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'relative',
    marginBottom: 20,
    paddingRight: 14,
    height: 50,
    width: '50%',
    backgroundColor: '#E74C3C'
  },
  leftCircle: {
    position: 'absolute',
    height: 20,
    width: 20,
    top: '30%',
    left: -9,
    borderRadius: 50,
    backgroundColor: 'white'
  },
  rightCircle: {
    position: 'absolute',
    height: 20,
    width: 20,
    top: '30%',
    right: -9,
    borderRadius: 50,
    backgroundColor: 'white'
  },
  dashedMain: {
    position: 'absolute',
    height: '100%',
    right: '23%',
    width: 1,
    borderRadius: 1,
    borderWidth: 1,
    borderColor: 'white',
    borderStyle: 'dashed',
    zIndex: 0
  },
  dashed: {
    position: 'relative',
    height: '100%',
    width: 1,
    backgroundColor: '#E74C3C',
    zIndex: 1
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#2256B0',
    height: 24,
    width: 24,
    marginLeft: 15,
    borderRadius: 5
  },
  iconText: {
    color: '#2256B0',
    fontSize: 20,
    lineHeight: 24
  }
});

export default styles;
