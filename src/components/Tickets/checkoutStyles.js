import { StyleSheet } from 'react-native';
import themes from '../../assets/themes';

const { colors } = themes;

export default StyleSheet.create({
  total: {
    width: '100%',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'rgba(29, 57, 77, 0.2)'
  },
  tickets: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15
  },
  title: {
    color: colors.primary,
    fontSize: 16,
    lineHeight: 19,
    fontWeight: 'bold'
  },
  subTitle: {
    fontSize: 12,
    lineHeight: 14,
    fontWeight: '500'
  },
  amount: {
    fontSize: 14,
    lineHeight: 17,
    color: '#1D394D'
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderTopWidth: 0.5,
    borderColor: 'rgba(29, 57, 77, 0.2)'
  },
  promo: {
    paddingVertical: 20,
    color: '#E74C3C',
    fontSize: 12,
    lineHeight: 14,
    fontWeight: 'bold',
    textAlign: 'right'
  },
  payments: {
    width: '100%',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'rgba(29, 57, 77, 0.2)',
    paddingVertical: 15
  },
  methods: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 15
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20
  }
});
