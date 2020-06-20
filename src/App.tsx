import React from "react";

import styles from "./App.module.css";
import SidePanel from "./components/SidePanel/SidePanel";

function App() {
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

export default App;
