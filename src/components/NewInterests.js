import React from "react";
import { Container, Col, Row } from "react-bootstrap";
function NewInterests(props) {
  return (
    <Container style={{ margin: "7vh auto" }}>
      <Row>
        <Col className="text-center">
          {/* <Col> */}
          <img
            className="interest-image"
            src={require("../images/chopper-burn-norcal.jpg")}
            alt="A slithery little friend"
            style={{
              height: "40vh",
            }}
          />

          <p
            className="interest-text"
            style={{ width: "75%", margin: "1vh auto" }}
          >
            I’m interested in environmental hazards and risk management.
            Wildfire will worsen by several orders of magnitude over the next
            fifty years in the Pacific Northwest and Russia. I enjoy using
            statistical approaches in combination with assumption hunting to
            examine risk in maybe a systems theoretic context.
          </p>
        </Col>
        {/* <Col style={{ border: "1px red", borderStyle: "solid" }}> */}
        <Col className="text-center">
          <img
            className="interest-image"
            src={require("../images/mpb.jpg")}
            alt="A mountain pine beetle"
            style={{ height: "40vh" }}
          />

          <p
            className="interest-text"
            style={{ width: "75%", margin: "1vh auto" }}
          >
            I specifically find bark beetles really interesting. The term bark
            beetle isn't a classification as much as a four-letter word for any
            of a class of ~6,000 insects that predate trees. They're currently
            blamed for exacerbating wildfires in the west by killing trees,
            mostly pine, spruce, and fir, and there appears to be almost no real
            evidence that bark beetles actually make fire risk or fire intensity
            worse.
          </p>
        </Col>
      </Row>
      <Row>
        {/* <Col style={{ border: "1px red", borderStyle: "solid" }}> */}
        <Col className="text-center">
          <img
            className="interest-image"
            src={require("../images/EARC_heat.JPG")}
            alt="Rowing in a shell, dressed like an idiot."
            style={{ height: "40vh" }}
          />

          <p
            className="interest-text"
            style={{ width: "75%", margin: "1vh auto" }}
          >
            I was a decent rower. In large part, I became a math major because
            of an interesting combinatorial optimization problem I encountered
            within the sport.
          </p>
        </Col>
        {/* <Col style={{ border: "1px red", borderStyle: "solid" }}> */}
        <Col className="text-center">
          <img
            className="interest-image"
            src={require("../images/EARC-champs.JPG")}
            alt="EARC champions"
            style={{ height: "40vh" }}
          />

          <p
            className="interest-text"
            style={{ width: "75%", margin: "1vh auto" }}
          >
            A good day at Eastern Sprints. Not much more to say.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default NewInterests;
