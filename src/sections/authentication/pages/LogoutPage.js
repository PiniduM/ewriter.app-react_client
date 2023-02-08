import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../AuthContext";
import Cookies from "js-cookie";

const LogoutPage = () => {
  const loginToken = useContext(AuthContext).loginToken;
  const navigate = useNavigate();

  useEffect(() => {
    if (loginToken.get) {
      Cookies.remove("ewriter_login_token");
      loginToken.set(undefined);
    }

    navigate("/");
  }, [navigate,loginToken]);
};

export default LogoutPage;
