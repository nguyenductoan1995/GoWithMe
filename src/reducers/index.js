import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import tempReducer from './temp_reducer'

const persistConfig = {
  key: 'root',
  storage,
}
const rootReducer = combineReducers({
  tempStore: persistReducer(persistConfig, tempReducer),
})

export default rootReducer
