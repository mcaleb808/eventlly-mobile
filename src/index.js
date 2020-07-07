import React from 'react';
import { Provider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import { Linking } from 'expo';
import store from './redux/store';
import AppContainer from './routes';
import themes from './assets/themes';

export default () => {
  const prefix = Linking.makeUrl('/');
  console.log(prefix);
  return (
    <Provider store={store}>
      <PaperProvider theme={themes}>
        <AppContainer uriPrefix={prefix} />
      </PaperProvider>
    </Provider>
  );
};
