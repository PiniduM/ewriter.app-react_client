import React from "react";

import RegisterForm from "../features/register/components/RegisterForm.js";
import MicroHeader from "../../../components/Headers/MicroHeader.js"

const RegisterPage = () => {
  return (
    <div className="Register">
        <MicroHeader />
        <RegisterForm />
    </div>
  );
};

export default RegisterPage;
