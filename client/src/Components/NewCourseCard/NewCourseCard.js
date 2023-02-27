import axios from "axios";
import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import styles from "./NewCourseCard.module.css";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { MultiverseContext } from "../../ContextApi/contextapi";

function NewCourseCard({ courseDetail }) {
  const { setEnrollCourse } = useContext(MultiverseContext);
  //const { id } = req.cookies; // obtain user id from cookies 
  const navigate = useNavigate();
  // call lecture api where courseID matches the selected course Card
  const handleEnrollment = async (courseId) => {
    try {
      const enroll = await axios.get(
        "https://course-api.com/javascript-store-products"
      );
      setEnrollCourse(enroll);
      navigate(`/course/${enroll?.id || 1}`);
    } catch (error) {
      console.log(error);
    }
  };
  const enrollUser = async () => {
    try {
      //await axios.post("/enroll", { id:"id" });
      console.log('hit');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Card className={styles.courseCard}>
      <div className={styles.signIn_closebtn} title="close">
          <Link to="/">
            <CloseIcon />
          </Link>
      </div>
      <div className="ratio ratio-16x9">
        <iframe
          src={courseDetail?.vedioUrl}
          title={courseDetail?.coursetittle}
          allowFullScreen
        ></iframe>
      </div>
      <Card.Body>
        <Card.Title>{courseDetail?.coursetittle}</Card.Title>
        <Card.Text>{courseDetail?.coursedescr}</Card.Text>
        <Button
          variant="primary"
          onClick={() => {
            
            navigate('/newcourse_card')
            // handleEnrollment(courseDetail.Id);
            // enrollUser();

          }}
        >
          addMore
        </Button>
        <Link to="/dashboard">
          <Button id="finishmsg-btn" className={styles.finishmsg_btn} type="submit">
            Finish
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default NewCourseCard;