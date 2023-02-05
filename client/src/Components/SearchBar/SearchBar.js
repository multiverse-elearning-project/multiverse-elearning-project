import { useContext, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styles from "./SearchBar.module.css";

import { MultiverseContext } from "../../ContextApi/contextapi";

function SearchBar() {
  const { courses, SetFilteredCourses } = useContext(MultiverseContext);
  console.log(courses);

  let inputRef = useRef(null);
  const handleSearch = (e) => {
    e.preventDefault();

    try {
      const userInput = inputRef.current.value?.toLowerCase();
      if (!userInput || typeof userInput !== "string")
        SetFilteredCourses(courses);
      if (userInput || typeof userInput === "string") {
        const foundCourses = courses.filter(
          (course) =>
            course?.coursetittle?.match(new RegExp(userInput, "i")) ||
            course?.coursedescr?.match(new RegExp(userInput, "i"))
        );
        SetFilteredCourses(foundCourses);
      }
    } catch (error) {
      console.log("something went wrong filter not working");
    }
  };
  return (
    <Form className="d-flex">
      <Form.Control
        type="search"
        placeholder="Search your courses"
        className="me-3"
        aria-label="Search"
        ref={inputRef}
        onChange={handleSearch}
      />
      <Button className={styles.btn} onClick={handleSearch}>
        Search
      </Button>
    </Form>
  );
}

export default SearchBar;
