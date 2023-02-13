import { useContext } from "react";
import { Link } from "react-router-dom";
import EssayWriterHeading from "../../../../components/Headers/EssayWriterHeading.js";
import { WriterContext } from "../../WriterContext";
import classes from "./Displayer.module.css";

import FormSubmitLoader from "../../../../../../components/Loaders/FormSubmitLoader.js"

const Displayer = () => {
  const resultPending = useContext(WriterContext).resultPending.get;
  const result = useContext(WriterContext).result.get;

  console.log(result);

  return (
    <div className={classes.displayer}>
      <EssayWriterHeading />
      <ul className={classes.reqInfoList}>
        <li className={classes.reqInfo}>Topic: {resultPending.topic}</li>
        <li className={classes.reqInfo}>Type: {resultPending.reqType}</li>
        <li className={classes.reqInfo}>Count: {resultPending.count}</li>
      </ul>
      {result ? (
        <>
          <div className={classes.resultViewer}>
            <p className={classes.resultPara}>
              <span className={classes.dragger}></span>
              <br />
              {result}
            </p>
          </div>
          <div className={classes.resultOptions}>
            <Link to="/essaywriter">
              <button className={`${classes.actionBtn} ${classes.deleteBtn}`}>
                Delete
              </button>
            </Link>
            <Link
              to="/essaywriter/download"
              state={{ topic: resultPending.topic, content: result }}
            >
              <button className={`${classes.actionBtn} ${classes.downloadBtn}`}>
                Download
              </button>
            </Link>
          </div>
        </>
      ) : (
        <div className={classes.loader}>
          <FormSubmitLoader message={"Writing"}/>
        </div>
      )}
    </div>
  );
};

export default Displayer;
