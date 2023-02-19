import Cookies from "js-cookie";
import React, { createContext, useState } from "react";

const WriterContext = createContext();

const WriterContextProvider = (props) => {
  const [pendingResult, setpendingResult] = useState(false);
  const [result, setResult] = useState(Cookies.get("result"));

  const contextValue = {
    pendingResult: { get: pendingResult, set: setpendingResult },
    result: { get: result, set: setResult },
  };

  return (
    <WriterContext.Provider value={contextValue}>
      {props.children}
    </WriterContext.Provider>
  );
};

export { WriterContext, WriterContextProvider };
