
import React from "react";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import logo from './logo.png';
import Card from "@material-ui/core/Card";

const Themes = props => {
  return (
    <div className="Themes">
  <header className="App-header">
    <h1 className="App-title">Themes</h1>
    <p>
    </p>

    <Link to="/grow" className="home-link">
        <Card className="home box1" style = {{ padding: "50px"}}>
          <Typography variant="title">GROWING UP</Typography>
        </Card>
      </Link>
<br/>
      <Link to="/rel" className="home-link">
          <Card className="home box1" style = {{ padding: "50px"}}>
            <Typography variant="title">RELATIONSHIPS</Typography>
          </Card>
        </Link>
<br/>
        <Link to="/hiv" className="home-link">
            <Card className="home box1" style = {{ padding: "50px"}}>
              <Typography variant="title">HIV &AIDS</Typography>
            </Card>
          </Link>




    <a
      className="App-link"
      target="_blank"
      rel="noopener noreferrer"
    >
    </a>
  </header>
</div>
);
};
export default Themes;
