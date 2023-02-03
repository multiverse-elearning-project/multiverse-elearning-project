import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styles from './SearchBar.module.css'

function SearchBar() {
  return (
    <Form className="d-flex">
    <Form.Control
      type="search"
      placeholder="Search your courses"
      className="me-3"
      aria-label="Search"
    />
    <Button className={styles.btn}>Search</Button>
  </Form>
  );
}

export default SearchBar;
