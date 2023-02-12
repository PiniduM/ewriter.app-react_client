import React, { createContext, useState } from "react";

const WriterContext = createContext();

const WriterContextProvider = (props) => {
  //const [whatToDisplay, setWhatToDisplay] = useState("writer"); // type : writer
  const [resultPending, setResultPending] = useState(false);
  const [result, setResult] = useState("");
  //console.log(whatToDisplay);

  const contextValue = {
    resultPending: { get: resultPending, set: setResultPending },
    result: { get: result, set: setResult },
  };

  return (
    <WriterContext.Provider value={contextValue}>
      {props.children}
    </WriterContext.Provider>
  );
};

export { WriterContext, WriterContextProvider };
