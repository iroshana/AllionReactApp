import React from "react";
import { Spinner } from "react-bootstrap";

const SpinnerComponent = () => (
  <>
    <Spinner animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
  </>
);

export default SpinnerComponent;
