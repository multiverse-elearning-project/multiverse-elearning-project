import { useContext, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styles from "./SearchBar.module.css";

import { MultiverseContext } from "../../ContextApi/contextapi";

function SearchBar() {
  const { filteredCourses, setSearchList } =
    useContext(MultiverseContext);

  let inputRef = useRef(null);
  const handleSearch = (e) => {
    e.preventDefault();
    try {
      const userInput = inputRef.current.value;
      if (!userInput || typeof userInput !== "string")
      setSearchList(filteredCourses);
      if (userInput || typeof userInput === "string") {
        const foundCourses = filteredCourses?.filter(
          (course) =>
            course?.coursetittle?.match(new RegExp(userInput, "i")) ||
            course?.creator?.match(new RegExp(userInput, "i"))
        );
        setSearchList(foundCourses);
      }
    } catch (error) {
      console.log("something went wrong filter not working");
    }
  };
  return (
    <Form className="d-flex">
      <Form.Control
        type="search"
        placeholder="Search your by course or instructor"
        className="me-3"
        aria-label="Search"
        ref={inputRef}
        onChange={handleSearch}
      />
      <Button className={styles.btn} onChange={handleSearch}>
        Search
      </Button>
    </Form>
  );
}

export default SearchBar;
