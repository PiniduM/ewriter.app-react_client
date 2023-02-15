import { useLocation } from "react-router-dom";
import EssayWriterHeading from "../components/Headers/EssayWriterHeading";
import MiniHeader from "../components/Headers/MiniHeader";
import Downloader from "../sections/writer/features/downloader/Downloader";

const DownloadPage = () => {

  const location = useLocation();

  console.log(location.state);

  return (
    <>
      <MiniHeader />
      <EssayWriterHeading />
      <Downloader data={location.state}/>
    </>
  );
};

export default DownloadPage;