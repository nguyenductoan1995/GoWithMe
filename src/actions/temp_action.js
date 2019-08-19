import * as types from './type'

export const getTemp = ({ payload }, callback = () => {}) => ({
  type: types.GET_REQUEST,
  payload: { payload },
  callback,
})

export const verify = ({ payload }, callback = () => {}) => ({
  type: types.GET_REQUEST,
  payload: { payload },
  callback,
})

export const setBackground = payload => ({
  type: types.SET_BACKGROUND,
  payload,
})
