import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import styles from "./CreateCourse.module.css";
import { MultiverseContext } from "../../ContextApi/contextapi";


function CreateCourse({ data }) {
 
 const { setAddModule, filteredCourses } = useContext(MultiverseContext);

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
            <div onClick={()=> {setAddModule(true)}}>
            < AddIcon fontSize='inherit' />
            </div>
            <div onClick={() => {handleDelete(data.Id)}}>
            < DeleteIcon fontSize='inherit'/>
            </div>
            
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CreateCourse;