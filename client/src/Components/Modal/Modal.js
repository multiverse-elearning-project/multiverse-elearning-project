import React, { useContext, useState } from "react";
import "./Modal.css";
import CloseIcon from "@mui/icons-material/Close";
import { MultiverseContext } from "../../ContextApi/contextapi";

function Modal(props, { Children }) {

  const {modalOpen, setModalOpen} = useContext(MultiverseContext)
  return (
    <div className={`modalcontainer`}>
      <div className={"closemodal"} onClick={() => {setModalOpen(false)}}>
        <CloseIcon />
      </div>
      <div>{Children}</div>
    </div>
  );
}

export default Modal;
