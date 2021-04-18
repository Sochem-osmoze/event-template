import React from "react";
import { Row, Col } from "reactstrap";

import Widget from "../../components/Widget/Widget";
import './text-body.css';

const ChemCoding = () => (
  <div >
    
{/* This is New Widget */}
<Row className="row justify-content-center">
      <Col  xs={"12"} lg={"8"}  >
        <Widget
          title={
            <h5>
              ChemCoding{" "}
              <small className="text-muted">18 april 2021</small>
            </h5>
          }
          collapse
          close


        >
          <h4 className="event-heading mt-5  display-5">Results are Out!</h4>
          <div className="widget-padding-md w-100 h-100 text-left border rounded">
            <p className="text-bodyy">
              <b>
              1. Rohit Jain - 19045088 (Rs. 3000/-)<br/>
              2. Eshaan Gupta - 19095116 (Rs. 2500/-)<br/>
              3. Sahil Setia - 19045094 (Rs. 2000/-)<br/>
             <strong>First yearites:<br/></strong> 
              1. Aadeesh Satish Oswal - 20045144 (Rs. 1500/-)<br/>
              2. Gunjan Pandey - 20045050 (Rs. 1000/-)<br/>
              </b>
                 <br></br><br></br>
                 <strong>Cash prizes will be rolled out in 48 hours.  </strong>               
            </p>

          </div>
        </Widget>
      </Col>
    </Row>

<Row className="row justify-content-center">
      <Col  xs={"12"} lg={"8"}  >
        <Widget
          title={
            <h5>
              chemcoding{" "}
              <small className="text-muted">15 April 2021</small>
            </h5>
          }
          collapse
          close


        >
          <h4 className="event-heading mt-5  display-5">Contest time out!</h4>
          <div className="widget-padding-md w-100 h-100 text-left border rounded">
            <p className="text-bodyy">
              <strong>IMPORTANT INSTRUCTIONS FOR THE EVENT:</strong><br/><br/>
              1.) The test will be held on <a href="hackerrank.com">hackerrank.com</a>, so you are suggested to have an account created there.
              <br/>
              2.) Provide your handle in the form <a href="https://docs.google.com/forms/d/e/1FAIpQLSc-EtVzef5y5nbkE8nK6KMrHtebLt7cVb-KtxEmknyYciM7BQ/viewform?gxids=7628/edit">here</a>.
              <br/>
              3.) Go to <a href="https://www.hackerrank.com/chemcoding21">https://www.hackerrank.com/chemcoding21</a>
              <br/>
              4.) Register for the event using the same handle which you have mentioned in the form.<br/>
              5.) Only SoChem registered members are entitled to prize money.
              <br/><br/>

              There might be a small 10 minutes discussion round for the participants entitled to prize money right after the contest ends. This is done to avoid any chances of plagiarism during the contest.
              <br/><br/>
              Code and compete!
            </p>
          </div>
        </Widget>
      </Col>
    </Row>

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
              <>Registration for ChemCoding has started: <a rel="noopener noreferrer" href="https://docs.google.com/forms/d/1M8l6AHtYyLDY_20lAAjgRUhMDV-vmXjQJeXfI4nIFDM/edit" target="_blank">
                Click here </a>
                to register.
              </>
              <br/> <br/>
              <strong>The last day for registration is 14th April 2021. </strong>
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
