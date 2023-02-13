import React, { createContext, useState } from "react";

const WriterContext = createContext();

const WriterContextProvider = (props) => {
  const [resultPending, setResultPending] = useState(false);
  const [result, setResult] = useState(`
    1. Globel warming is a real and present danger to society and the environment.
  2. The effects of globel warming are already being felt, with more extreme weather conditions becoming commonplace.
  3. There is no easy answer as to how to address globel warming, but we must act now if we want to prevent even greater damage in the future.
  4. It is important that everyone understands the risks associated with globel warming, and takes appropriate action to help prevent its worst consequences.
  5. We must all work together to find solutions for globel warming, since there is no single solution that will be effective on its own`);

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
