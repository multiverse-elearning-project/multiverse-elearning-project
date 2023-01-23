import React, { useState } from "react";
import "./Modal.css";
import CloseIcon from "@mui/icons-material/Close";

function Modal(props, { Children }) {
  const [modalopen, setModalOpen] = useState(false);
  return (
    <div className={`modalcontainer ${props?.modalClass}`}>
      <div className={modalopen && props.btnClass ? props.btnClass : "closemodal"}>
        <CloseIcon />
      </div>
      <div className={props?.childClass}>{Children}</div>
    </div>
  );
}

export default Modal;
