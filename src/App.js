import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./AuthContext.js";
import "./App.css";

import HomePage from "./sections/home/HomePage.js";
import EssayWriterRoutes from "./sections/essayWriter/EssayWriterRoutes.js";
import AuthRoutes from "./sections/authentication/AuthRoutes.js";
import CommonServicesRoutes from "./sections/commonServices/CommonServicesRoutes.js";

//const HomePage = lazy(() => import("./sections/home/HomePage.js"));

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<HomePage />}></Route>
          </Routes>
          <EssayWriterRoutes />
          <AuthRoutes />
          <CommonServicesRoutes />
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}

export default App;
