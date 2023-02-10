import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
const EssayWriterHomePage = lazy(() => import("./pages/EssayWriterHomePage"));

const EssayWriterRoutes = () => {
  return (
    <Suspense fallback={<p>loading</p>}>
      <Routes>
        <Route path="/essaywriter" exact element={<EssayWriterHomePage />} />
      </Routes>
    </Suspense>
  );
};

export default EssayWriterRoutes;
