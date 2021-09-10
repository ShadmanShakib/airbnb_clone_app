import React from "react";

type State = {
  email: string;
};

const initialState = {
  email: "",
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
    };

const authReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "SET_EMAIL":
      return { ...state, email: action.payload };

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
  const value = React.useMemo(() => ({ ...state, setUserEmail }), [state]);
  return <AuthContext.Provider value={value} {...props} />;
};

export default AuthContext;
