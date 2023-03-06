import React, { useContext } from "react";
import axios from "axios";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import styles from "./ModuleLect.module.css";
import { MultiverseContext } from "../../ContextApi/contextapi";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

function Module({ moduletitle }) {
  const {
    ismoduleClick,
    setModuleClick,
    setAddLecture,
    setAddToModuleId,
    auth,
  } = useContext(MultiverseContext);
  const loggedInUser = auth?.data?.role;
  const isInstructorOrAdmin = (loggedInUser=== "instructor" || loggedInUser === "admin");
  const handleModuleClick = (id) => {
    let ismoduleOpen = ismoduleClick.includes(id);
    if (!ismoduleOpen) {
      setModuleClick([...ismoduleClick, id]);
    } else {
      setModuleClick(ismoduleClick.filter((m) => m !== id));
    }
  };

  const handleDelete = async (moduleID) => {
    const response = await axios.delete(
      `http://localhost:8080/modules/${moduleID}`
    );
    console.log(response);
  };

  return (
    <div className={styles.modulesList}>
      <h6>{moduletitle?.moduleName}</h6>
      <div className={styles.iconList}>
        <div
          onClick={() => {
            handleModuleClick(moduletitle.moduleID);
          }}
          className={styles.icon}
        >
          <KeyboardArrowDownIcon />
        </div>
        {isInstructorOrAdmin && (
          <div className={styles.icon}>
            <AddIcon
              onClick={() => {
                setAddLecture(true);
                setAddToModuleId(moduletitle.moduleID);
              }}
            />
          </div>
        )}
        {isInstructorOrAdmin && (
          <div className={styles.icon}>
            <DeleteIcon
              onClick={() => {
                handleDelete(moduletitle.moduleID);
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Module;
