import { useState } from "react";

import classes from "./RequirementTypeInput.module.css";

const RequirementTypeInput = () => {
  const [reqTypeSelected, setReqTypeSelected] = useState("none");

  const handleReqTypeSelected = (e) => {
    if (e.target.value !== reqTypeSelected) {
      setReqTypeSelected(e.target.value);
    }
  };
  
  return (
    <div className={classes.reqType}>
      <h3 className={classes.prompt}>&#8865; what do you need</h3>
      <div className={classes.reqTypeRadios}>
        <div className={classes.radio}>
            <input
              type="radio"
              id="points"
              name="reqType"
              value="points"
              onClick={handleReqTypeSelected}
            />
          <label htmlFor="points" className={classes.radioLable}>points to write a essay</label>
        </div>
        <div className={classes.radio}>
            <input
              type="radio"
              id="essay"
              name="reqType"
              value="essay"
              onClick={handleReqTypeSelected}
              required
            />
          <label htmlFor="essay" className={classes.radioLable}>A complete essay</label>
        </div>
      </div>
      <div className={classes.countSelector}>
        {reqTypeSelected === "essay" && (
          <div>
            <label htmlFor="wordCount" className={classes.countLable}>
              number of words :{" "}
            </label>
            <select id="wordCount" name="count">
              <option value="100">100</option>
              <option value="150">150</option>
              <option value="200">200</option>
            </select>
          </div>
        )}

        {reqTypeSelected === "points" && (
          <div>
            <label htmlFor="noOfPoints" className={classes.countLable}>
              number of points :{" "}
            </label>
            <select id="noOfPoints" name="count">
              <option value="5">5</option>
              <option value="7">7</option>
              <option value="10">10</option>
            </select>
          </div>
        )}
      </div>
    </div>
  );
};

export default RequirementTypeInput;
