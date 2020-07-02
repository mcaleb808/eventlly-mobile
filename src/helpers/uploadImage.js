/* eslint-disable no-shadow */
import { CLOUDINARY_ULR, UPLOAD_PRESET } from 'react-native-dotenv';

const uploadImage = async result => {
  const base64Img = `data:image/jpg;base64,${result.base64}`;
  const apiUrl = CLOUDINARY_ULR;

  const data = {
    file: base64Img,
    upload_preset: UPLOAD_PRESET
  };
  return fetch(apiUrl, {
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      Accept: 'application/json, text/plain, */*'
    },
    method: 'POST'
  })
    .then(async r => {
      console.log(r);
      const data = await r.json();
      return data.secure_url;
    })
    .catch(err => console.log(err));
};

export default uploadImage;
