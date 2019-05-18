import {
  SET_ELEMENTARY_CA_RULE,
  SET_REFRESH_ELEMENTARY_CA_SKETCH,
} from './action-types'

const initialState = {
  rule: '',
  refreshSketch: () => {},
}

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case SET_ELEMENTARY_CA_RULE:
      return {
        ...state,
        rule: payload,
      }
    case SET_REFRESH_ELEMENTARY_CA_SKETCH: {
      return {
        ...state,
        refreshSketch: payload,
      }
    }
    default:
      return state
  }
}
