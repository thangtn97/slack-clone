import React from "react";
import styles from "./Backdrop.module.css";

interface IProps {
  show: boolean;
  clicked: () => void;
}

const Backdrop: React.FC<IProps> = ({ show, clicked }) =>
  show ? <div className={styles.Backdrop} onClick={clicked}></div> : null;
export default Backdrop;
