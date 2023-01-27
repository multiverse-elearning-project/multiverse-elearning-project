import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import './SearchBar.css'

function SearchBar() {
  return (
    <Form className="d-flex">
    <Form.Control
      type="search"
      placeholder="Search"
      className="me-3"
      aria-label="Search"
    />
    <Button variant="outline-success">Search</Button>
  </Form>
  );
}

export default SearchBar;
