import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const EssayWriterHomePage = lazy(() => import("./pages/EssayWriterHomePage"));
const Writer = lazy(() => import("./sections/writer/Writer.js"));

const EssayWriterRoutes = () => {
  return (
    <Suspense fallback={<p>loading</p>}>
      <Routes>
        <Route path="/essaywriter" exact element={<EssayWriterHomePage />} />
        <Route path="/essaywriter_writer" exact element={<Writer />} />
      </Routes>
    </Suspense>
  );
};

export default EssayWriterRoutes;
