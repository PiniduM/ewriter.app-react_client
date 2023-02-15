import { useContext } from "react";
import { Link } from "react-router-dom";
import { WriterContext } from "../../WriterContext";
import classes from "./Displayer.module.css";

import FormSubmitLoader from "../../../../../../components/Loaders/FormSubmitLoader.js"
import Cookies from "js-cookie";

const Displayer = () => {
  const pendingResult = useContext(WriterContext).pendingResult.get;
  const result = useContext(WriterContext).result.get;

  const topic = pendingResult.topic || Cookies.get("resultTopic");

  const deleteResult = async () => {
    Cookies.remove("result",{path: "/"});
  }
  const saveEssay = (e) => {
    e.target.disabled = true;
  }

  console.log(result);

  return (
    <div className={classes.displayer}>

      {/* <ul className={classes.reqInfoList}>
        <li className={classes.reqInfo}>Topic: {pendingResult.topic}</li>
        <li className={classes.reqInfo}>Type: {pendingResult.reqType}</li>
        <li className={classes.reqInfo}>Count: {pendingResult.count}</li>
      </ul> */}
      <h2 className={classes.topic}>{topic}</h2>
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
              <button className={`${classes.actionBtn} ${classes.deleteBtn}`} onClick={deleteResult}>
                Delete
              </button>
            </Link>
            <Link
              to="/essaywriter/download"
              state={{ topic: pendingResult.topic, content: result }}
            >
              <button className={`${classes.actionBtn} ${classes.downloadBtn}`}>
                Download
              </button>
            </Link>
            <button className={`${classes.actionBtn} ${classes.saveBtn}`} onClick={e => saveEssay(e)}>
                Save
              </button>
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
