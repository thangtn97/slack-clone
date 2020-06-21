import React from "react";
import SidePanel from "../SidePanel/SidePanel";
import styles from "./Homepage.module.css";

function Homepage() {
  return (
    <div className={styles.App}>
      <SidePanel />
      <div>
        <div>Conversation Name</div>
        <div>Conversation Info</div>
        <div>Message</div>
        <div>Input Message</div>
      </div>
    </div>
  );
}

export default Homepage;
