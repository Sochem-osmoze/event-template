import React from "react";
import { Row, Col } from "reactstrap";

import Widget from "../../components/Widget/Widget";

const Adhyayan = () => (
  <div >
    {/* This is New Widget */}
    <Row className="row justify-content-center">
      <Col  xs={"12"} lg={"8"}  >
        <Widget
          title={
            <h5>
              Adhyayan{" "}
              <small className="text-muted">5 april 2021</small>
            </h5>
          }
          collapse
          close


        >
          <h4 className="event-heading mt-5  display-5">Adhyayan will be organised online</h4>
          <div className="widget-padding-md w-100 h-100 text-left border rounded">
            <p className="text-bodyy">
                 As a part of the decision taken today by the Osmoze Core team, all events will be conducted online this year.
                 The new cash prize for Adhyayan will be INR. 10,000. 
                 <br></br><br></br>
                 <strong>Registrations will start soon!  </strong>               
            </p>

          </div>
        </Widget>
      </Col>
    </Row>
  </div>
);

export default Adhyayan;
