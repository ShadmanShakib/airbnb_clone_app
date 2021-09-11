import React from "react";

type State = {
  email: string;
  uid: string;
  loading: boolean;
};

const initialState = {
  email: "",
  uid: "",
  loading: false,
};

const AuthContext = React.createContext<State | any>(initialState);
AuthContext.displayName = "Email&Password";
type Action =
  | {
      type: "SET_EMAIL";
      payload: string;
    }
  | {
      type: "LOG_IN";
    }
  | {
      type: "SET_UID";
      payload: string;
    };

const authReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_UID":
      return {
        ...state,
        uid: action.payload,
      };
    default:
      return state;
  }
};

interface IAuthProvider {
  children: any;
}
export const AuthProvider = (props: IAuthProvider) => {
  const [state, dispatch] = React.useReducer(authReducer, initialState);
  const setUserEmail = React.useCallback(
    (email: string) => dispatch({ type: "SET_EMAIL", payload: email }),
    [dispatch]
  );
  const setUserUid = React.useCallback(
    (value: string) => dispatch({ type: "SET_UID", payload: value }),
    [dispatch]
  );
  const value = React.useMemo(
    () => ({ ...state, setUserEmail, setUserUid }),
    [state]
  );
  return <AuthContext.Provider value={value} {...props} />;
};

export default AuthContext;
