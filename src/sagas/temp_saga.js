import { put, takeLatest, takeEvery, call } from 'redux-saga/effects'
import axios from 'axios'
import request from 'config/request'
import { GET_REQUEST, GET_SUCCESS, GET_FAILURE } from 'actions/type'

import { getOTPAPI } from '../config/api'

function* syncGetOTP(action) {
  const {
    payload,
    callback,
  } = action
  try {
    const res = yield call(request, {
      method: 'put', // put - post - get
      url: getOTPAPI(),
      data: payload, // {get-> params} , { post - pus -> data}
    })
    // if have token => set token
    axios.defaults.headers.common.Authorization = `Bearer ${res.data.meta.jwt}`
    //
    yield put({ GET_SUCCESS, payload: res.data })
    callback({ success: true })
  } catch (err) {
    callback({ success: false, errorMessage: err.message })
    yield put({ GET_FAILURE })
  }
}

export default function* authWatcher() {
  yield takeLatest(GET_REQUEST, syncGetOTP)
}
