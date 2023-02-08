import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./sections/home/HomePage.js";
import RegisterPage from "./sections/authentication/pages/RegisterPage.js";
import LoginPage from "./sections/authentication/pages/LoginPage.js";
import LogoutPage from "./sections/authentication/pages/LogoutPage.js";
import CreateProfilePage from "./sections/authentication/pages/createProfilePage.js";

import VerifyGmail from "./sections/authentication/pages/VerifyGmailPage.js";
import { AuthContextProvider } from "./AuthContext.js";

import "./App.css";
import ProfilePage from "./sections/authentication/pages/ProfilePage.js";
import RedirectPage from "./sections/authentication/pages/RedirectPage.js";

function App() {
  return (
    <AuthContextProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            {/* {add header here and remove from seperate pages,wait until essay writer routes added,their headers are different} */}
            <Route path="/" exact element={<HomePage />}></Route>
            <Route path="/register" exact element={<RegisterPage />}></Route>
            <Route path="/login" exact element={<LoginPage />}></Route>
            <Route path="/logout" exact element={<LogoutPage />}></Route>
            <Route path="/verifygmail" exact element={<VerifyGmail />}></Route>
            <Route path="/profile" exact element={<ProfilePage />}></Route>
            <Route
              path="/createprofile"
              exact
              element={<CreateProfilePage />}
            ></Route>
            <Route path="/redirect" exact element={<RedirectPage />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </AuthContextProvider>
  );
}

export default App;
