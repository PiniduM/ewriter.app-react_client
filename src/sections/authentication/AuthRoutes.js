import { Suspense } from "react";
import { Routes } from "react-router-dom";

const AuthRoutes = () => {
  return (
    <Suspense fallback={<p>loading</p>}>
      <Routes></Routes>
    </Suspense>
  );
};


export default AuthRoutes;