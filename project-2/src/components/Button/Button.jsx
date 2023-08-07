import { MdChat } from "react-icons/md";
import styles from "./Button.module.css";

function Button(props) {
  return (
    <button
      className={props.isOutline ? styles.outline_btn : styles.primary_btn}
    >
      {props.icon}
      {props.text}
    </button>
  );
}

// MdChat

export default Button;
