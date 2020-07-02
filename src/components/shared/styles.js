import React from 'react';
import { View, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/Feather';
import themes from '../../assets/themes';

const { colors } = themes;
export const textChip = {
  lineHeight: 12,
  fontSize: 10,
  borderRadius: 5,
  borderWidth: 0.5,
  paddingHorizontal: 7,
  paddingVertical: 4,
  textTransform: 'capitalize'
};

export const outlinedContainer = {
  alignItems: 'center',
  borderRadius: 5,
  borderColor: colors.disabled,
  borderWidth: 0.5
};

export const paragraph = {
  lineHeight: 14,
  fontSize: 12,
  fontWeight: 'normal'
};

export const mediumText = {
  textAlign: 'center',
  fontWeight: '600',
  lineHeight: 17,
  fontSize: 14
};

export const navHeader = {
  headerStyle: { backgroundColor: colors.primary },
  headerTintColor: colors.accent,
  title: null,
  headerRight: () => (
    <View
      style={{
        flexDirection: 'row',
        width: '150%',
        justifyContent: 'space-between',
        marginRight: 15
      }}>
      <MaterialCommunityIcons
        size={25}
        color="#D3D3D3"
        name="heart"
        // onPress={navigation.toggleDrawer}
      />
      <MaterialCommunityIcons
        size={25}
        color="#D3D3D3"
        name="share-2"
        // onPress={navigation.toggleDrawer}
      />
      <MaterialCommunityIcons
        size={25}
        color="#D3D3D3"
        name="calendar"
        // onPress={navigation.toggleDrawer}
      />
    </View>
  )
};

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white'
  },
  input: {
    height: 50,
    backgroundColor: 'white',
    paddingHorizontal: 0
  },
  title: {
    lineHeight: 24,
    fontSize: 20,
    fontWeight: '800'
  },
  linkText: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row'
  },
  tabTitle: { ...mediumText },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0
  },
  confirmButton: { ...mediumText },
  listContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 70,
    ...outlinedContainer
  },
  leftContainer: {
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingLeft: 10
  },
  leftTitle: {
    ...paragraph,
    textTransform: 'uppercase',
    color: colors.secondaryBorder
  },
  leftSubtitle: {
    lineHeight: 17,
    fontSize: 14,
    fontWeight: '600',
    color: colors.secondaryBorder
  },
  centerContainer: {
    height: '100%',
    justifyContent: 'space-evenly',
    color: colors.secondaryBorder,
    alignItems: 'flex-start'
  },
  centerTitle: {
    lineHeight: 21,
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'capitalize'
  },
  centerSubtitle: {
    ...paragraph,
    textTransform: 'capitalize'
  },

  helperText: {
    marginTop: -20,
    marginLeft: -10
  },
  rightContainer: {
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  rightTop: {
    ...textChip,
    alignSelf: 'flex-end',
    fontWeight: 'normal',
    color: colors.secondaryBorder,
    borderColor: colors.secondaryBorder
  },
  tickets: {
    alignSelf: 'flex-end',
    lineHeight: 12,
    fontSize: 10,
    fontWeight: 'normal',
    color: colors.secondaryBorder,
    paddingHorizontal: 7,
    paddingVertical: 4,
    textTransform: 'capitalize'
  },
  rightBottom: {
    lineHeight: 12,
    fontSize: 10,
    fontWeight: 'normal',
    marginBottom: 12,
    marginRight: 10,
    textTransform: 'capitalize',
    color: colors.primary
  },
  footer: {
    paddingVertical: 20,
    borderTopWidth: 1,
    borderColor: colors.disabled
  }
});
