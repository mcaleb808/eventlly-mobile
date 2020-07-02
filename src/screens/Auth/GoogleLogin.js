// /* eslint-disable react/jsx-filename-extension */
// import {
//   GoogleSignin,
//   GoogleSigninButton,
//   statusCodes
// } from '@react-native-community/google-signin';

// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import GoogleAuthButton from '../../assets/img/authGoogle.png';
// import login from '../../redux/actions/auth/login';
// import { APP } from '../../constants/routeNames';
// import SocialButton from '../../components/Buttons/SocialButton';

// const GoogleLogin = ({ navigation }) => {
//   const [userInfo, setUserInfo] = useState(null);
//   const [isSigninInProgress, setIsigninInProgress] = useState(false);

//   const dispatch = useDispatch();
//   const { data } = useSelector(state => state.user.login);

//   useEffect(() => {
//     if (data && data.status === 200 && data.user) {
//       navigation.navigate(APP, data.user);
//     }
//   }, [data]);

//   console.log('Google userInfo', userInfo);

//   useEffect(() => {
//     if (userInfo) {
//       login(userInfo)(dispatch);
//     }
//   }, [userInfo]);
//   useEffect(() => {
//     GoogleSignin.configure({
//       iosClientId:
//         '592660168983-9a0bql6lnsvd0ip2cft8riupjm6fv571.apps.googleusercontent.com',
//       webClientId:
//         '592660168983-9a0bql6lnsvd0ip2cft8riupjm6fv571.apps.googleusercontent.com',
//       offlineAccess: false, // if you want to access Google API on behalf of the user FROM YOUR SERVER
//       hostedDomain: '', // specifies a hosted domain restriction
//       loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
//       forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
//       accountName: '' // [Android] specifies an account name on the device that should be used
//     });
//     return () => {};
//   }, []);
//   const checkPlayServices = async () => {
//     try {
//       await GoogleSignin.hasPlayServices({
//         showPlayServicesUpdateDialog: true
//       });
//       // google services are available
//     } catch (err) {}
//   };
//   useEffect(() => {
//     checkPlayServices();
//   }, []);
//   const signIn = async () => {
//     setIsigninInProgress(true);
//     try {
//       await GoogleSignin.hasPlayServices();
//       const info = await GoogleSignin.signIn();
//       setUserInfo(info);
//     } catch (error) {
//       setIsigninInProgress(false);
//       if (error.code === statusCodes.SIGN_IN_CANCELLED) {
//         // user cancelled the login flow
//       } else if (error.code === statusCodes.IN_PROGRESS) {
//         // operation (e.g. sign in) is in progress already
//       } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
//         // play services not available or outdated
//       } else {
//         // some other error happened
//       }
//     }
//   };

//   return (
//     <SocialButton
//       name="Google"
//       source={GoogleAuthButton}
//       color="#FFFFFF"
//       textColor="#518EF8"
//       style={{ width: 192, height: 48 }}
//       size={GoogleSigninButton.Size.Wide}
//       onPress={signIn}
//       disabled={isSigninInProgress}
//     />
//   );
// };

// export default GoogleLogin;
