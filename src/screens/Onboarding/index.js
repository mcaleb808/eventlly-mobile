/* eslint-disable react/jsx-filename-extension */
import React, { useState, useRef } from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  StatusBar,
  Text,
  StyleSheet,
  Dimensions
} from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import { Title, Paragraph, withTheme } from 'react-native-paper';
import PropTypes from 'prop-types';
import Img1 from '../../assets/img/mangirl.png';
import Img2 from '../../assets/img/gitl_man.png';
import Container from '../../components/Containers';
import { AUTH, GET_STARTED, SIGNUP } from '../../constants/routeNames';

const OnboardingScreen = ({
  navigation,
  theme: {
    colors: { primary, darkBlue, darkText, white }
  }
}) => {
  const style = StyleSheet.create({
    wrapperOuter: {
      flex: 1,
      position: 'absolute',
      backgroundColor: white,
      top: 0
    },
    wrapper: {
      flex: 1,
      width: Dimensions.get('window').width,
      alignItems: 'flex-start',
      justifyContent: 'center',
      padding: 0,
      backgroundColor: white
    },
    image: {
      width: '100%',
      height: '60%',
      marginBottom: 12
    },
    title: {
      fontSize: 20,
      color: darkBlue,
      fontWeight: 'bold',
      marginBottom: 11
    },
    text: {
      fontSize: 18,
      lineHeight: 21,
      color: darkText
    },
    textsWrapper: {
      paddingHorizontal: 21
    },
    action: {
      width: '100%',
      paddingHorizontal: 21,
      position: 'absolute',
      bottom: 0,
      paddingVertical: 10,
      marginBottom: 21 * 2,
      justifyContent: 'flex-end'
    },
    pager: {
      width: Dimensions.get('window').width,
      height: '78.5%',
      padding: 0,
      margin: 0,
      position: 'absolute',
      top: 0
    },
    dots: {
      height: 20 * 1.1,
      paddingTop: 0,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    },
    dot: {
      height: 12 * 1.2,
      width: 12 * 1.2,
      backgroundColor: white,
      borderRadius: 21 / 4,
      borderWidth: 1,
      borderColor: primary,
      marginHorizontal: 4
    },
    active: {
      backgroundColor: primary,
      borderColor: primary,
      borderWidth: 4
    }
  });
  const pagerRef = useRef(null);
  const [page, setPage] = useState(0);
  const slides = [
    {
      title: 'Find Events',
      text:
        'Get to know the buzz around your favorite cities based on your preference',
      image: Img1,
      key: 0
    },
    {
      title: 'Get Great Ticket Deals',
      text:
        'Conveniently book that seat with ease so you do not struggle with the whole ticket purchasing fuss at event entrance',
      image: Img2,
      key: 1
    }
  ];
  return (
    <Container style={style.wrapper}>
      <StatusBar hidden />
      <ViewPager
        ref={pagerRef}
        style={style.pager}
        onPageSelected={e => setPage(e.nativeEvent.position)}
        initialPage={0}>
        {slides.map(slide => (
          <View key={slide.key} style={style.slide}>
            <Image
              style={style.image}
              source={slide.image}
              resizeMode="cover"
            />
            <View style={style.textsWrapper}>
              <Title style={style.title}>{slide.title}</Title>
              <Paragraph style={style.text}>{slide.text}</Paragraph>
            </View>
          </View>
        ))}
      </ViewPager>
      <Container style={style.action}>
        {page !== 2 ? (
          <Container
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 24
            }}>
            <TouchableOpacity
              onPress={() =>
                page === 1
                  ? pagerRef.current.setPage(page - 1)
                  : navigation.navigate(AUTH)
              }>
              <Text
                style={{
                  fontWeight: '500',
                  color: darkBlue,
                  fontSize: 17 * 1.2
                }}>
                {page === 1 ? 'Previous' : 'Skip'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                page === slides.length - 1
                  ? navigation.navigate(GET_STARTED)
                  : pagerRef.current.setPage(page + 1)
              }>
              <Text
                style={{
                  fontWeight: '500',
                  color: primary,
                  fontSize: 17 * 1.2
                }}>
                {page === slides.length - 1 ? 'Finish' : 'Next'}
              </Text>
            </TouchableOpacity>
          </Container>
        ) : null}

        <View style={style.dots}>
          {slides.map((slide, index) => (
            <View
              key={slide.key}
              style={[style.dot, index === page ? style.active : {}]}
            />
          ))}
        </View>
      </Container>
    </Container>
  );
};
OnboardingScreen.propTypes = {
  navigation: PropTypes.oneOfType([PropTypes.object]).isRequired,
  theme: PropTypes.oneOfType([PropTypes.object]).isRequired
};
export default withTheme(OnboardingScreen);
