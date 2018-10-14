import React from "react";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

class Individual extends React.Component  {
  render() {
    return(
    <div className="more-container">
    <Link to="/nocode" style={{ textDecoration: 'none' }}>
    <Button
    style={{ margin: "10px"}}
    size= "large"
    variant="contained"
    color = "primary"
    onClick={() => console.log("hi")
    }
  >
    NOT IN SESSION
  </Button>
      </Link>

      <Link to="/themes" style={{ textDecoration: 'none' }}>

  <Button
  style={{ margin: "10px" }}
  size= "large"
  variant="contained"
  color= "primary"
  onClick={() =>
    console.log("click")
  }
>
IN SESSION
</Button>
    </Link>

             </div>)

             }}
export default Individual;
