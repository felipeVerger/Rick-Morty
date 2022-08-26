import React, {createContext, useReducer} from 'react'
import { initialState, reducer } from '../reducer/reducer';

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleRegister = (data) => {
    dispatch({
      type: 'REGISTER',
      payload: data
    });
  }

  const handleLogin = (data) => {
    dispatch({
      type: 'LOGIN',
      payload: data
    });
  }

  return (
    <UserContext.Provider
      value={{
        state,
        handleRegister,
        handleLogin
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider