import axios from "axios";
import React, { useContext } from "react";
import Cookies from "js-cookie";
import { WriterContext } from "../../../WriterContext.js";


import classes from "./DetailCollectingForm.module.css";
import RequirementTypeInput from "./inputs/RequirementTypeInput.js";
import TopicInput from "./inputs/TopicInput.js";

const DetailCollectingForm = (props) => {
  const setpendingResult = useContext(WriterContext).pendingResult.set;
  const setResult = useContext(WriterContext).result.set;
  const handleSubmit = async (e) => {
    e.preventDefault();
    const reqData = new FormData(e.target);
    const topic = reqData.get("topic");
    const reqDataObj = {
      topic,
      count: reqData.get("count"),
    };
    const isEssay = reqData.get("reqType") === "essay";

    const path = `http://localhost:5003/nonpremium/${
      isEssay ? "writeaessay" : "givepoints"
    }`;

    axios
      .post(path, reqDataObj)
      .then((response) => {
        console.log("fetching")
        setResult(response.data);
        Cookies.set("result",response.data);
        Cookies.set("resultTopic",topic);
      })
      .catch((err) => console.log(err));

    setpendingResult({
      topic
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
