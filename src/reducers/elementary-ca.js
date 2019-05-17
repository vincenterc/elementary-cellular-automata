import { SET_ELEMENTARY_CA_RULE } from './action-types'

const initialState = {
  rule: '',
}

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case SET_ELEMENTARY_CA_RULE:
      return {
        ...state,
        rule: payload,
      }
    default:
      return state
  }
}
