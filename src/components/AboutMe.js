import { TypeAnimation } from "react-type-animation";
import "../styles/aboutme.css";

import Card from "react-bootstrap/Card";

function About() {
  return (
    <div className="heroAbout">
      <>
        <Card className="text-white card-no-border">
          <Card.ImgOverlay>
            <Card.Title
              style={{
                fontSize: "2.6em",
                color: "white",
                fontFamily: "Orbitron",
                textAlign: "left",
                marginLeft: "20px",
                marginTop: "15%",
              }}
            >
              Hi There! I'm Sara Rose Wendland!
            </Card.Title>
            <Card.Text
              style={{
                fontSize: "1em",
                color: "white",
                fontFamily: "Orbitron",
                textAlign: "left",
                marginTop: "10px",
                marginLeft: "20px",
              }}
            >
              <TypeAnimation
                sequence={[
                  "Attempting to Code Hello Worl",
                  1000,
                  "Attempting to Code World Peace",
                  1000,
                  "Attempting to Code World Peace One Line at a Time!",
                  1000,
                ]}
                speed={50}
                repeat={0}
                style={{
                  fontSize: "2em",
                  color: "white",
                  fontFamily: "Orbitron",
                }}
              />
            </Card.Text>
            <Card.Text
              style={{
                fontSize: "1.5rem",
                color: "white",
                fontFamily: "Roboto",
                textAlign: "left",
                marginTop: "10px",
                marginLeft: "20px",
              }}
            >
              {/* <div className="hero-heading">
                <h1> ... </h1>
                <div className="hero-sub-title mt-5">
                  <a href="#" className="text-white">
                    <i className="fa fa-play-circle"></i>Stacker.
                  </a>
                  <a href="#" className="text-white">
                    <i className="fa fa-play-circle"></i>Clicker.
                  </a>
                  <a href="#" className="text-white">
                    <i className="fa fa-play-circle"></i>Crooner.
                  </a>
                  <a href="#" className="text-white">
                    <i className="fa fa-play-circle"></i>Story Teller.
                  </a>
                </div>
              </div> */}
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
      </>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <About />
    </div>
  );
}
