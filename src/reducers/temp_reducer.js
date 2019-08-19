import * as types from 'actions/type'

const INITIAL_STATE = {
  isLoading: false,
  place: null,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_REQUEST:
      return { ...state, place: INITIAL_STATE.palce, isLoading: true }
    case types.SET_BACKGROUND: {
      const { uri } = action.payload
      return { ...state, place: { uri }, isLoading: false } }
    case types.GET_FAILURE:
      return { ...state, palce: INITIAL_STATE.foods, isLoading: false }
    default:
      return { ...state, isLoading: false }
  }
}
