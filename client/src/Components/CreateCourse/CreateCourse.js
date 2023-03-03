import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from "axios";
import React, { useContext, useEffect } from "react";
import Card from "react-bootstrap/Card";
import styles from "./CreateCourse.module.css";
import { MultiverseContext } from "../../ContextApi/contextapi";
import ViewListIcon from '@mui/icons-material/ViewList';


function CreateCourse({ data }) {
 
 const { setAddModule, filteredCourses, setSelectedModule } = useContext(MultiverseContext);

 const moduleViewHandler = async (selectedId) => {
  const viewModule = await axios.get(
    `http://localhost:8080/courses/${selectedId}`
  );
  console.log(viewModule.data.modules);
  if (viewModule.data) setSelectedModule(viewModule?.data.modules);
};

 const handleDelete = async (id) => {
  await axios.delete(`http://localhost:8080/courses/${id}`)
 }

 useEffect (() => {
  
 }, [filteredCourses])

 
  return (
    <div className={styles.courseCard}>
      <Card className={styles.innercourseCard}>
        <div className="ratio ratio-16x9">
          <iframe
            src={data?.vedioUrl}
            title={data?.coursetittle}
            allowFullScreen
          ></iframe>
        </div>
        <Card.Body>
          <Card.Title>{data?.coursetittle}</Card.Title>
          <Card.Text>{data?.coursedescr}</Card.Text>
          <div className={styles["price-creator"]}>
            <p
              className={styles["createdby"]}
            >{`By: ${data?.creator}`}</p>
            <p className={styles["courseprice"]}>{`$${data?.price}`}</p>
          </div>
          <div className={styles["cta-btn"]}>
            <div onClick={()=> {setAddModule(true)}} title="Add module">
            < AddIcon className={styles.largeIcon} />
            </div>
            <div onClick={() => {moduleViewHandler(data.Id)}} title="View module">
             < ViewListIcon className={styles.largeIcon}/>
            </div>
            <div onClick={() => {handleDelete(data.Id)}} title="Delete course">
            < DeleteIcon className={styles.largeIcon}/>
            </div>
            
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CreateCourse;