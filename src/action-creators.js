import * as actionTypes from './reducers/action-types'

export default function(dispatch) {
  return {
    setElementaryCARule: rule => {
      dispatch({ type: actionTypes.SET_ELEMENTARY_CA_RULE, payload: rule })
    },

    setRefreshElementaryCASketch: refreshSketch => {
      dispatch({
        type: actionTypes.SET_REFRESH_ELEMENTARY_CA_SKETCH,
        payload: refreshSketch,
      })
    },
  }
}
