import Cookies from "js-cookie";
import React, { createContext, useState } from "react";

const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [loginToken, setLoginToken] = useState(
    Cookies.get("ewriter_login_token")
  );

  const [profileCreated,setProfileCreated] = useState(false);

  const contextValue = {
    loginToken: {get: loginToken,set: setLoginToken},
    profileCreated: {get: profileCreated, set: setProfileCreated}
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
