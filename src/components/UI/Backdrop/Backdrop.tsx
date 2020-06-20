import React, { useState } from "react";

interface IProps {
  isOpen: boolean;
  children: any;
}

const Backdrop: React.FC<IProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  return <div onClick={() => setIsOpen(false)}>{props.children}</div>;
};

export default Backdrop;
