import * as actionTypes from "../action/handleAuth";

const initialState = {
  loading: false,
  error: false,
  token: null,
  userId: null,
  userNickname: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case actionTypes.AUTH_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        token: action.token,
        userId: action.userId,
        userNickname: action.userNickname,
      };
    case actionTypes.AUTH_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        token: null,
      };

    default:
      return state;
  }
};

export default reducer;
