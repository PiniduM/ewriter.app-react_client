import classes from "./FormSubmitLoader.module.css"

const FormSubmitLoader = () => {
  return (
    <div className={classes.loader}>
      <div className={classes.spinner}>
        <div className={classes.bar1}></div>
        <div className={classes.bar2}></div>
        <div className={classes.bar3}></div>
        <div className={classes.bar4}></div>
        <div className={classes.bar5}></div>
      </div>
      <p className={classes.loadingPara}>Loading ...</p>
    </div>
  );
};


export default FormSubmitLoader;