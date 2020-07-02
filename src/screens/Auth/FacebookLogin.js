// /* eslint-disable react/jsx-filename-extension */
// import React, { useState, useEffect } from 'react';
// import { AccessToken, LoginManager } from 'react-native-fbsdk';
// import Axios from 'axios';
// import { useDispatch, useSelector } from 'react-redux';
// import SocialButton from '../../components/Buttons/SocialButton';

// import FaceBookAuthButton from '../../assets/img/authFacebook.png';
// import login from '../../redux/actions/auth/login';
// import { APP } from '../../constants/routeNames';

// const FacebookLogin = ({ navigation }) => {
//   const dispatch = useDispatch();

//   const { data: authData } = useSelector(state => state.user.login);

//   useEffect(() => {
//     if (
//       authData &&
//       authData.status &&
//       authData.status === 200 &&
//       authData.user
//     ) {
//       navigation.navigate(APP, authData.user);
//     }
//   }, [authData]);

//   const [profile, setProfile] = useState(null);
//   const [userAccessToken, setUserAccessToken] = useState(null);
//   const getPublicProfile = async () => {
//     const data = await Axios.get(
//       `https://graph.facebook.com/me?fields=name,gender,email,picture&access_token=${userAccessToken}`
//     );
//     setProfile(data.data);
//   };
//   useEffect(() => {
//     if (userAccessToken) {
//       getPublicProfile();
//     }
//   }, [userAccessToken]);

//   console.log('facebook profile', profile);

//   useEffect(() => {
//     if (profile) {
//       login(profile, '/auth/social/facebook')(dispatch);
//     }
//   }, [profile]);

//   const loginWithFacebook = () => {
//     LoginManager.logInWithPermissions(['public_profile,email']).then(
//       result => {
//         if (result.isCancelled) {
//         } else {
//           AccessToken.getCurrentAccessToken().then(data => {
//             setUserAccessToken(data.accessToken.toString());
//           });
//         }
//       },
//       error => {}
//     );
//   };
//   return (
//     <SocialButton
//       name="Facebook"
//       source={FaceBookAuthButton}
//       color="#475993"
//       textColor="#FFFFFF"
//       onPress={loginWithFacebook}
//     />
//   );
// };
// export default FacebookLogin;
