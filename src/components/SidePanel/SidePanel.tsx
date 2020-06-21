import React, { useState } from "react";
import styles from "./SidePanel.module.css";
import Dropdown from "../UI/Dropdown/Dropdown";
import Modal from "../UI/Modal/Modal";
import AddChanel from "../AddChanel/AddChanel";
const SidePanel: React.FC = () => {
  const [add, setAdd] = useState(false);
  return (
    <div className={styles.SidePanel}>
      <Dropdown title="thang" items={["thang", "View profile", "Sign out"]} />
      <div
        onClick={() => {
          setAdd(true);
        }}
      >
        Add chanel
      </div>
      <Modal show={add} modalClosed={() => {}}>
        <AddChanel />
      </Modal>
    </div>
  );
};
export default SidePanel;
