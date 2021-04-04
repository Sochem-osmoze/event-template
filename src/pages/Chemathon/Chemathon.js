import React from "react";
import { Row, Col } from "reactstrap";

import Widget from "../../components/Widget/Widget";

const Chemathon = () => (
  <div >
    
    {/* This is New Widget */}
    <Row className="row justify-content-center">
      <Col  xs={"12"} lg={"8"}  >
        <Widget
          title={
            <h5>
              Chemathon{" "}
              <small className="text-muted">7 april 2021</small>
            </h5>
          }
          collapse
          close


        >
          <h4 className="event-heading mt-5  display-5">Chemathon will be organised online</h4>
          <div className="widget-padding-md w-100 h-100 text-left border rounded">
            <p className="text-bodyy">
            As a part of the decision taken today by the Osmoze Core team, all events have turned online. The new cash prize for Chemathon will be INR. 12000 
               </p>

          </div>
        </Widget>
      </Col>
    </Row>
  </div>
);

export default Chemathon;
