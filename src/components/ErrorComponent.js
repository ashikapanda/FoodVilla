import { Button } from "@mui/material";
import { Link, useRouteError } from "react-router-dom";
const ErrorComponent = (props) => {
  const err = props.data ? props.data : useRouteError();
  console.log("err", err);
  return (
    <div className="error-container">
      <h1>⛔Oops something went wrong.</h1>
      <h2>{err?.status + " ▫ " + err?.statusText}</h2>
      <Button variant="outlined">
        <Link to="/">GO BACK</Link>
      </Button>
    </div>
  );
};

export default ErrorComponent;
