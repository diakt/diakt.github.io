import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function NewProjects(props) {
  return (
    <Container style={{ margin: "7vh auto" }}>
      <Row style={{ marginBottom: "2vh" }}>
        <Col className="project-encapsulation">
          <a
            class="project-link"
            href="https://markovsnakes.netlify.app"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            <h3 class="project-title">Markov Snakes and Ladders</h3>
          </a>

          <p className="project-description">
            An application of Markov chain processes to solve for expected
            stopping time (average number of rolls) for the game Snakes and
            Ladders. A count-measuring mockup of snakes and ladders, coupled
            with a page for explaining some fairly tractable features of Markov
            Chains.
          </p>
          <p className="project-description">
            Built with Python, Numpy, and React.
          </p>
        </Col>

        <Col style={{ width: "30vw" }}>
          <a
            href="https://markovsnakes.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="project-image"
              src={require("../images/markov.png")}
              alt="markov snakes and ladders"
              style={{ width: "100%" }}
            />
          </a>
        </Col>
      </Row>

      <Row style={{ marginBottom: "2vh" }}>
        <Col>
          <div className="project-encapsulation">
            <a
              class="project-link"
              href="https://m.netlify.app"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              <h3 class="project-title">Dangerous Lighting</h3>
            </a>
            <p className="project-description">
              Displays up-to-date wildfire data in the United States. Geolocates
              user and displays wildfires in their area, while allowing users to
              search for non-local wildfires. Tranches events by size and
              severity, and displays relevant data including the number of acres
              burned, the number of structures destroyed, and the number of
              fatalities.
            </p>
            <p className="project-description">
              Built with a React and MapboxGL frontend, rendering data from
              IRWIN and EONET APIs.
            </p>
          </div>
        </Col>

        <Col>
          <a
            href="https://dangerouslighting.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="project-image"
              src={require("../images/dangerous-lighting.png")}
              alt="dangerous lighting"
              style={{ width: "100%" }}
            />
          </a>
        </Col>
      </Row>

      <Row style={{ marginBottom: "2vh" }}>
        <Col>
          <div className="project-encapsulation">
            <a
              class="project-link"
              href="https://hopital-deluxe.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              <h3 class="project-title">Hopital</h3>
            </a>
            <p className="project-description">
              A hospital scheduling management system which allows healthcare
              stakeholders to create, edit, and update medical appointments.
              Offers separate portals for patients, schedulers, and providers,
              with significant interplay between the actions of all three.
            </p>
            <p className="project-description">
              Built with fullstack Django with PostgreSQL. Implementation
              includes custom user authentication, registration, and login, as
              well as multiple user classes.
            </p>
          </div>
        </Col>

        <Col>
          <a
            href="https://hopital-deluxe.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="project-image"
              src={require("../images/hopital.png")}
              alt="hopital"
              style={{ width: "100%" }}
            />
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default NewProjects;
