import { createStore, applyMiddleware } from 'redux'
import Reactotron from 'reactotron-react-native'
import createSagaMiddleware from 'redux-saga'
import 'config/ReactotronConfig'
import { persistStore } from 'redux-persist'
import reducers from '../reducers'
import rootSagas from '../sagas'

/* eslint-disable no-underscore-dangle */

const sagaMiddleware = createSagaMiddleware()

let storeInit
// eslint-disable-next-line no-undef
if (__DEV__) {
  // eslint-disable-line
  if (typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function') {
    storeInit = Reactotron.createStore(
      reducers,
      {},
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(sagaMiddleware)),
    )
  } else {
    storeInit = Reactotron.createStore(reducers, {}, applyMiddleware(sagaMiddleware))
  }
} else {
  storeInit = createStore(reducers, {}, applyMiddleware(sagaMiddleware))
}

sagaMiddleware.run(rootSagas)
export const persistor = persistStore(storeInit)
export const store = storeInit
