import { Suspense } from "react";
import { Routes } from "react-router-dom";

const CommonServicesRoutes = () => {
  return (
    <Suspense fallback={<p>loading</p>}>
      <Routes></Routes>
    </Suspense>
  );
};


export default CommonServicesRoutes;