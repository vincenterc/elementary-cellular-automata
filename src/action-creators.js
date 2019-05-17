import * as actionTypes from './reducers/action-types'

export default function(dispatch) {
  return {
    setElementaryCARule: rule => {
      dispatch({ type: actionTypes.SET_ELEMENTARY_CA_RULE, payload: rule })
    },
  }
}
