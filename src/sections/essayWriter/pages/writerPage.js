import MiniHeader from "../components/Headers/MiniHeader";
import Writer from "../sections/writer/Writer";
import { WriterContextProvider } from "../sections/writer/WriterContext";

const WriterPage = () => {
  return (
    <WriterContextProvider>
      <MiniHeader />
      <Writer />
    </WriterContextProvider>
  );
};

export default WriterPage;