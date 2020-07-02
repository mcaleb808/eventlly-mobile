import * as Font from 'expo-font';

export const cacheFonts = async fonts => {
  const loaded = await Font.loadAsync({
    ...fonts
  });
  return loaded;
};
