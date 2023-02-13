import axios from "axios";
import React, { useContext } from "react";
import { WriterContext } from "../../../WriterContext.js";
//import fetchReqData from "../../functions/fetchReqData";

import classes from "./DetailCollectingForm.module.css";
import RequirementTypeInput from "./inputs/RequirementTypeInput.js";
import TopicInput from "./inputs/TopicInput.js";

const DetailCollectingForm = (props) => {
  const setResultPending = useContext(WriterContext).resultPending.set;
  const setResult = useContext(WriterContext).result.set;
  const handleSubmit = async (e) => {
    e.preventDefault();
    const reqData = new FormData(e.target);
    const reqDataObj = {
      topic: reqData.get("topic"),
      count: reqData.get("count"),
    };
    const isEssay = reqData.get("reqType") === "essay";

    const path = `http://localhost:5003/nonpremium/${
      isEssay ? "writeaessay" : "givepoints"
    }`;

    axios
      .post(path, reqDataObj)
      .then((result) => {
        console.log("fetching")
        setResult(result.data);
      })
      .catch((err) => console.log(err));

    // fetchReqData(reqDataObj, "http://localhost:5000/unlogged/writer")
    //   .then((response) => response.json())
    //   .then((responseData) => {
    //     setResult(responseData);
    //   })
    //   .catch((err) => console.log(err));
    setResultPending({
      topic: reqData.get("topic"),
      reqType: reqData.get("reqType"),
      count: reqData.get("count"),
    });
  };

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <TopicInput condition={!props.premium} />
      <div className={classes.inputGap}></div>
      <RequirementTypeInput />

      <div className={classes.writeButtonContainer}>
        <button type="submit" className={classes.writeButton}>
          write
        </button>
      </div>
    </form>
  );
};

export default DetailCollectingForm;
