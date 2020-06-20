import React from "react";
import styles from "./SidePanel.module.css";
import Dropdown from "../UI/Dropdown/Dropdown";
const MetaPanel: React.FC = () => {
  return (
    <div className={styles.SidePanel}>
      <Dropdown title="thang" items={["thang", "View profile", "Sign out"]} />
    </div>
  );
};
export default MetaPanel;
