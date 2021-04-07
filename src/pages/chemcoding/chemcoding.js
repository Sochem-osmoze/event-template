import React from "react";
import { Row, Col } from "reactstrap";

import Widget from "../../components/Widget/Widget";
import './text-body.css';

const ChemCoding = () => (
  <div >

<Row className="row justify-content-center">
      <Col  xs={"12"} lg={"8"}  >
        <Widget
          title={
            <h5>
              chemcoding{" "}
              <small className="text-muted">7 April 2021</small>
            </h5>
          }
          collapse
          close


        >
          <h4 className="event-heading mt-5  display-5">Registrations have started</h4>
          <div className="widget-padding-md w-100 h-100 text-left border rounded">
            <p className="text-bodyy">
              <>Registration for ChemCoding has started: <a href="https://docs.google.com/forms/d/1M8l6AHtYyLDY_20lAAjgRUhMDV-vmXjQJeXfI4nIFDM/edit" target="_blank">
                Click here </a>
                to register.
              </>
              <br/> <br/>
              <strong>The last day for registration is 12th April 2021. </strong>
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
              chemcoding{"  "}
              <small className="text-muted">6 April 2021</small>
            </h5>
          }
          collapse
        >
          <h4 className="event-heading mt-5  display-5">ChemCoding Details </h4>
          <div className="widget-padding-md w-100 h-100 text-left border rounded" >
            <p className="text-bodyy">
            Information Technology today is growing at an impeccable rate and as such being able to code is one such skill which would go a really long way in one's career, regardless of profession. Osmoze brings to you the opportunity to showcase logical thinking and dexterity with algorithms in the form of ChemCoding, an exhilarating coding event.
            </p>
            <p className="text-bodyy">
            ChemCoding is a competitive programming event that will test your problem solving and programming skills. You will be given a series of algorithmic puzzles and problems and you will have to come up with not only an accurate but an optimal solution as quickly as possible.
            </p>
              <strong>Timeline</strong>
                <li>Registrations start on 7th April, 2021.</li>
                <li>The last day to fill the form is 12 th April 2021.</li>
                <li>Further details regarding the test and the interviews will rolled out in due time.</li>
                <hr/>
            <p className="text-bodyy">
            Event Coordinators:
            <ul>
              <li>Aman Ashish: 8340477566</li>
              <li>Richa Singh: 8440937689</li>
            </ul>
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
          <h4 className="event-heading mt-5  display-5">ChemCoding has turned un-proctored</h4>
          <div className="widget-padding-md w-100 h-100 text-left border rounded">
            <p className="text-bodyy">
                As a part of the decision taken today by the Osmoze Core team, all events will be conducted online this year.
                 The new cash prize for Chem Coding will be INR. 10,000.
               </p>

          </div>
        </Widget>
      </Col>
    </Row>
  </div>
);

export default ChemCoding;
