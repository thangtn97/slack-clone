import React from "react";
import styles from "./Input.module.css";

interface IProps {
  elementType: string;
  invalid: boolean;
  shouldValidate: boolean;
  elementConfig: Object;
  value: string;
  changed?: () => void;
  label: string;
}

const Input: React.FC<IProps> = (props) => {
  let inputElement = null;
  const inputStyles = [styles.InputElement];
  if (props.invalid && props.shouldValidate) {
    inputStyles.push(styles.Invalid);
  }

  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          className={inputStyles.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    default:
      inputElement = (
        <input
          className={inputStyles.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
  }
  return (
    <div className={styles.Input}>
      <label className={styles.Label}>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default Input;
