import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const ERROR_CLEAR = 'ERROR_CLEAR';

const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  }
}

const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER
  }
}

const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors
  }
}


export const login = (user) => {
  return (dispatch) => {
    return SessionApiUtil.login(user).then( (user) => {
      return dispatch(receiveCurrentUser(user));
    }, err => {
      return dispatch(receiveErrors(err.responseJSON));
    });
  };
};

export const signup = (user) => {
  return (dispatch) => {
    return SessionApiUtil.signup(user).then( (user) => {
      return dispatch(receiveCurrentUser(user));
    }, err => {
      return dispatch(receiveErrors(err.responseJSON));
    });
  };
};

export const logout = () => {
  return (dispatch) => {
    return SessionApiUtil.logout().then( (user) => {
      return dispatch(logoutCurrentUser());
    }, err => {
      return dispatch(receiveErrors(err.responseJSON));
    });
  };
};

export const errorClear = () => {
  return (dispatch) => {
    return dispatch(receiveErrors([]));
  };
};
