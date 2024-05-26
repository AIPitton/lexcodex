/**
 * @format
 */

import { AppRegistry } from 'react-native'
import App from './App'
import { name as appName } from './app.json'
import { store, persistor } from './src/app/store'
import { Provider } from 'react-redux'
import React from 'react'
import { PersistGate } from 'redux-persist/integration/react'

AppRegistry.registerComponent(appName, () => () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
))
