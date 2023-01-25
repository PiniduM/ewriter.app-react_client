import React, { createContext, useState } from "react"


const AuthContext = createContext();


const AuthContextProvider = (props) => {
    const [userType,setUserType] = useState("unlogged");


    const contextValue = {
        userType: {get:userType, set: setUserType}
    };

    return (
        <AuthContext.Provider value={contextValue} >
            {props.children}
        </AuthContext.Provider>
    )
}


export {AuthContext, AuthContextProvider}