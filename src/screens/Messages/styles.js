import { StyleSheet, Dimensions } from 'react-native';
import themes from '../../assets/themes';
import { paragraph } from '../../components/shared/styles';

const { width } = Dimensions.get('screen');

const { colors } = themes;

export default StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    height: 60,
    width: (width * 92) / 100,
    borderBottomColor: colors.disabled,
    borderBottomWidth: 0.5
  },
  centerSubtitle: {
    ...paragraph,
    textTransform: 'capitalize'
  },
  centerContainer: {
    width: '83%',
    height: '100%',
    justifyContent: 'space-evenly',
    color: colors.secondaryBorder,
    alignItems: 'flex-start'
  },
  titleContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 14,
    textTransform: 'capitalize'
  },
  timestamp: {
    fontSize: 8,
    lineHeight: 10,
    fontWeight: '500'
  },
  messageContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between'
  }
});
