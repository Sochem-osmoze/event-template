import React from "react";
import { Row, Col } from "reactstrap";

import Widget from "../../components/Widget/Widget";
import PS from '../../assets/people/adhyanps.pdf';

const Adhyayan = () => (
  <div >
      {/* This is New Widget */}
      <Row className="row justify-content-center">
      <Col  xs={"12"} lg={"8"}  >
        <Widget
          title={
            <h5>
              Adhyayan{" "}
              <small className="text-muted">11 april 2021</small>
            </h5>
          }
          collapse
          close


        >
          <h4 className="event-heading mt-5  display-5">Registrations are open!!</h4>
          <div className="widget-padding-md w-100 h-100 text-left border rounded">
            <p className="text-bodyy">
               An exciting management event Adhyayan, is dedicated to the adroitness of case study.
               Involving solutions that entail stipulating the organisation's objectives, burgeoning policies,
               and simultaneously outlining plans to achieve them. Adhyayan provides one with an opportunity 
               to showcase analytical skills involving new dimensions of on-the-ground reality and take a leap
               into the real-world critical case studies.
              <br/><br/>
               Hello folks!<br/>
                We invite you to do some brain exercise and test your astute skills in solving a real-life
                case study in the event, ADHYAYAN.
                <br/> The Problem Statement is based on an online delivery partner facing 
                challenges.
                <br/><br/><strong>Registrations are open till 14th April, 11:59 PM and the problem statement has been released. </strong>
                <br/><br/>
                For any queries, please contact the event coordinators:
                <br></br>Tarandeep Singh (+91 97926 26247)
                <br/>Aakarsh Vatsa (+91 6205 044 643)
                <br/><br/>
                <strong>
                <a target="blank" href="https://docs.google.com/forms/d/1eyCqU4XQmafrga6SAju0ZX77lwTJmX-ECN-JWXkz6Co/edit">Register Here</a> |
                <a target="blank" href={PS}>Download PS</a>
                </strong>
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
