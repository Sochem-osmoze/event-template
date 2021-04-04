import React from "react";
import { Row, Col } from "reactstrap";

import Widget from "../../components/Widget/Widget";

const ChemCoding = () => (
  <div >
    {/* This is New Widget */}
    <Row className="row justify-content-center">
      <Col  xs={"12"} lg={"8"}  >
        <Widget
          title={
            <h5>
              chemcoding{" "}
              <small className="text-muted">25 March 2020</small>
            </h5>
          }
          collapse
          close
        >
          <h4 className="mt-5  display-5">ChemCoding Details </h4>
          <div className="widget-padding-md w-100 h-100 text-left border rounded">
            <p className="lead">
            Information Technology today is growing at an impeccable rate and as such being able to code is one such skill which would go a really long way in one's career, regardless of profession. Osmoze brings to you the opportunity to showcase logical thinking and dexterity with algorithms in the form of ChemCoding, an exhilarating coding event.
            </p>
            <p className="lead">
            ChemCoding is a competitive programming event that will test your problem solving and programming skills. You will be given a series of algorithmic puzzles and problems and you will have to come up with not only an accurate but an optimal solution as quickly as possible.
            </p>
            <p className="lead">
            <strong>Registrations will begin on 26th March</strong>
            </p>
            <p className="lead">
            Event Coordinators:
            <ul>
              <li>Nisha Agarwal: 9521409751</li>
              <li>Abhishek Singh: 9460878830</li>
            </ul>
            <div class="timeline-footer">
            <a href="https://www.sochem.org" class="btn btn-primary btn-sm">SoChem Website</a><br></br><br></br>
            <a href="https://www.osmoze.in" class="btn btn-danger btn-sm">Osmoze Home</a>
          </div>
            </p>
          </div>
        </Widget>
      </Col>
    </Row>

    {/* This is New Widget */}
    <Row className="row justify-content-center">
      <Col  xs={"12"} lg={"8"}  >
        <Widget
          title={
            <h5>
              chemcoding{" "}
              <small className="text-muted">24 march 2021</small>
            </h5>
          }
          collapse
          close


        >
          <h4 className="mt-5  display-5">ChemCoding has turned un-proctored</h4>
          <div className="widget-padding-md w-100 h-100 text-left border rounded">
            <p className="lead">
                As a part of the decision taken today by the Osmoze Core team, all events have turned online. The new cash prize for Chem Coding will be INR. 5000.
               </p>

          </div>
        </Widget>
      </Col>
    </Row>
  </div>
);

export default ChemCoding;
