import { SET_ELEMENTARY_CA_STATE } from './action-types'

const initialState = {
  rule: '',
  refreshSketch: () => {},
}

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case SET_ELEMENTARY_CA_STATE:
      return {
        ...state,
        ...payload,
      }
    default:
      return state
  }
}