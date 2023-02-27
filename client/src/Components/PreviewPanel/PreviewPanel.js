import React, { useContext } from "react";
import { MultiverseContext } from "../../ContextApi/contextapi";
import styles from "./PreviewPanel.module.css";

function PreviewPanel() {
  const { selectedLecture } = useContext(MultiverseContext);
  const selection = selectedLecture[0]?.lectureUrl;
 
  return (
    <main className={styles.previewsection}>
      <div>
        <iframe
          src={
            selectedLecture[0]?.lectureUrl ||
            "https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
          }
          frameBorder="0"
          title={selectedLecture[0]?.lectureName || "tittle"}
          width="100%"
          height="500"
          allowFullScreen
        ></iframe>
      </div>
      <div>
        <h3>{selectedLecture[0]?.lectureName || ""}</h3>
        <p>{selectedLecture[0]?.description || ""}</p>
      </div>
    </main>
  );
}

export default PreviewPanel;
