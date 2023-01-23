import React, { useState } from "react";
import "./Modal.css";
import CloseIcon from "@mui/icons-material/Close";

function Modal(props, { Children }) {
  const [modalopen, setModalOpen] = useState(false);
  return (
    <div className={`modalcontainer`}>
      <div className={"closemodal"}>
        <CloseIcon />
      </div>
      <div>{Children}</div>
    </div>
  );
}

export default Modal;
