import React from 'react'
import { Text } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './src/store';

import MainStack from './src/stacks/MainStack';

export default () => {

  return(

    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
            <MainStack/>
        </NavigationContainer>
      </PersistGate>
    </Provider>

  )

}