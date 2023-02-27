import React, { useState, useContext } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import styles from "./ModuleLect.module.css";
import { MultiverseContext } from "../../ContextApi/contextapi";

function Module({ moduletitle }) {
  const { ismoduleClick, setModuleClick } = useContext(MultiverseContext);

  const handleModuleClick = (id) => {
    let ismoduleOpen = ismoduleClick.includes(id);
    if (!ismoduleOpen) {
      setModuleClick([...ismoduleClick, id]);
    } else {
      setModuleClick(ismoduleClick.filter((m) => m !== id));
    }
  };

  return (
    <div
      className={styles.modulesList}
      onClick={() => {
        handleModuleClick(moduletitle.moduleID);
      }}
    >
      <h6>{moduletitle?.moduleName}</h6>
      <h6>
        <KeyboardArrowDownIcon />
      </h6>
    </div>
  );
}

export default Module;
