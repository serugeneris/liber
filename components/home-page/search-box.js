import { SlMagnifier } from "react-icons/sl";
import classes from "./search-box.module.css";
import { useState } from "react";

function SearchBox() {
  const [isFocus, setIsFocus] = useState(false);

  function inputFocusAndBlurHandler() {
    setIsFocus(!isFocus);
  }

  const containerClass = isFocus
    ? `${classes.container} ${classes.focus}`
    : classes.container;

  return (
    <div className={containerClass}>
      <SlMagnifier></SlMagnifier>
      <input
        type="text"
        onFocus={inputFocusAndBlurHandler}
        onBlur={inputFocusAndBlurHandler}
      ></input>
    </div>
  );
}

export default SearchBox;
