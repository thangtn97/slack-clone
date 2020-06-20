import React, { useState } from "react";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import styles from "./Dropdown.module.css";

interface PropsDropDown {
  title: string;
  items: Array<string>;
}

export type ToggleList = () => void;

const Dropdown: React.FC<PropsDropDown> = (props) => {
  const [openList, setOpenList] = useState(false);

  const listItem = (
    <ul className={styles.DropdownList}>
      {props.items.map((item) => {
        return <li>{item}</li>;
      })}
    </ul>
  );

  return (
    <div className={styles.Dropdown} onClick={() => setOpenList(!openList)}>
      <div className={styles.Header}>
        <div className={styles.HeaderTitle}>{props.title}</div>
        <ArrowDropDownIcon />
      </div>
      {openList ? listItem : null}
    </div>
  );
};
export default Dropdown;
