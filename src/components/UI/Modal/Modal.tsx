import React, { useState, Fragment } from "react";
import styles from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";
interface IProps {
  show: boolean;
  children: any;
  modalClosed: () => void;
}

const Modal: React.FC<IProps> = (props) => {
  return (
    <Fragment>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div
        className={styles.Modal}
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0",
        }}
      >
        {props.children}
      </div>
    </Fragment>
  );
};

export default Modal;
