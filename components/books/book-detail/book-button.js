import classes from "./book-button.module.css";

function BookButton(props) {
  return <button className={classes.button}>{props.text}</button>;
}

export default BookButton;
