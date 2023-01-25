import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./sections/home/HomePage.js";
import RegisterPage from "./sections/authentication/pages/RegisterPage.js";
import {AuthContextProvider} from "./AuthContext.js"

import "./App.css";

function App() {
  return (
    <AuthContextProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<HomePage />}></Route>
            <Route path="/Register" exact element={<RegisterPage />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </AuthContextProvider>
  );
}

export default App;
