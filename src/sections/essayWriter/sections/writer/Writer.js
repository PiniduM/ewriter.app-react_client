import { useContext } from "react";
import { WriterContext } from "./WriterContext";

//import DetailCollector from "./components/detailCollector/DetailCollector";
//import Displayer from "./components/displayer/Displayer";

import classes from "./Writer.module.css";
import Customizer from "./features/customizer/Customizer.js";
import Displayer from "./features/displayer/Displayer.js";

const Writer = () => {
  // detailColecter replaced with displayer to facilitate creating displayer
  //const [whatToDisplay,setWhatToDisaplay] = useState("displayer");
  //const [writtenData,setWrittenData] = useState('');

  console.log(useContext(WriterContext));

  // if(whatToDisplay !== "displayer") {
  // return (
  //   <div className={classes.writer}>
  //     <DetailCollector />
  //   </div>
  // );
  // }else

  // return (
  //   <div className={classes.writer}>
  //   <Displayer />
  //   </div>
  // )

  const resultPending = useContext(WriterContext).resultPending.get;
  const result = useContext(WriterContext).result.get;

  if (resultPending || result) {
    return <Displayer />;
  } else {
    return <Customizer />;
  }
};

export default Writer;
