
import React from "react";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import logo from './logo.png';
import Card from "@material-ui/core/Card";

const Home = props => {
  return (
    <div className="App">
  <header className="App-header">
    <h1 className="App-title">Auntie Stella</h1>
    <img src={logo} className="App-logo" alt="logo" />
    <p>
    </p>

    <Link to="/individual" style={{ textDecoration: 'none' }}>



    <Button
    style={{ margin: "10px"}}
    size= "large"
    variant="contained"
    color = "primary"
    onClick={() => console.log("hi")
    }
  >
    INDIVIDUAL
  </Button>
      </Link>

      <Link to="/individual" style={{ textDecoration: 'none' }}>

  <Button
  style={{ margin: "10px" }}
  size= "large"
  variant="contained"
  color= "primary"
  onClick={() =>
    console.log("click")
  }
>
FACILITATOR
</Button>
    </Link>

<Link to="/more"> More information
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

export default Home;
