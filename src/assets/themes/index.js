import { Dimensions } from 'react-native';
import { DefaultTheme, configureFonts } from 'react-native-paper';

const { width, height } = Dimensions.get('screen');

export const genColor = (opacity = 1) => ({
  primary: `rgba(34, 86, 176, ${opacity})`,
  accent: `rgba(255, 255, 255, ${opacity})`,
  text: `rgba(29, 57, 77, ${opacity})`,
  primaryDark: `rgba(0, 46, 128, ${opacity})`,
  accentDark: `rgba(204, 204, 204, ${opacity})`,
  error: `rgba(186, 0, 13, ${opacity})`,
  secondaryBorder: `rgba(241, 67, 54, ${opacity})`,
  darkText: `rgba(29, 57, 77,${opacity})`,
  darkBlue: '#1D394D',
  white: '#FFFFFF',
  chartPurple: '#8884d8',
  chartGreen: '#82ca9d',
  chartYellow: '#ffc658',
  red: '#E74C3C'
});

const fontConfig = {
  default: {
    regular: {
      fontFamily: 'SFProText',
      fontWeight: 'normal'
    },
    medium: {
      fontFamily: 'SFProTextMedium',
      fontWeight: 'normal'
    }
  }
};

export default {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: genColor().primary,
    primaryDark: genColor().primaryDark,
    primaryLight: genColor(0.4).primaryDark,
    text: genColor().text,
    accent: genColor().accent,
    background: genColor().accent,
    surface: genColor().accent,
    disabled: genColor(0.2).text,
    border: genColor(0.4).text,
    placeholder: genColor(0.2).text,
    backdrop: genColor().accentDark,
    error: genColor().error,
    secondaryBorder: genColor().secondaryBorder,
    chartPurple: genColor().chartPurple,
    chartGreen: genColor().chartGreen,
    chartYellow: genColor().chartYellow,
    redPrimary: genColor().red,
    redLight: genColor(0.2).red
  },
  fonts: configureFonts(fontConfig),
  roundness: 5,
  dimensions: (percentile = 100) => ({
    width: (width * percentile) / 100,
    height: (height * percentile) / 100
  })
};
