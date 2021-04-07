import React from "react";
import { Row, Col } from "reactstrap";

import Widget from "../../components/Widget/Widget";

const Chemathon = () => (
  <div >

<Row className="row justify-content-center">
      <Col  xs={"12"} lg={"8"}  >
        <Widget
          title={
            <h5>
              Chemathon{" "}
              <small className="text-muted">7 April 2021</small>
            </h5>
          }
          collapse
          close


        >
          <h4 className="event-heading mt-5  display-5">Registrations have started</h4>
          <div className="widget-padding-md w-100 h-100 text-left border rounded">
            <p className="text-bodyy">
              <>Registration for Chemathon has started: <a href="https://docs.google.com/forms/d/1AgnKBO-kkvo3Y0RxZUGivQ9s-ZnVBBC3WyaTxUT8UBQ/edit" target="_blank">
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
              Chemathon{" "}
              <small className="text-muted">6 april 2021</small>
            </h5>
          }
          collapse
          close


        >
          <h4 className="event-heading mt-5  display-5">Chemathon Details</h4>
          <div className="widget-padding-md w-100 h-100 text-left border rounded">
            <p className="text-bodyy">
                Chemathon is the virtual internship and placement event of osmoze which aims to give you an upper edge when you face the real ones. Chemathon brings to you, a platform to test your proficiency across a multitude of facets. This year it will be organised completely online.<br/><br/>

                The event will consist of an online general aptitude test and a personal interview (for those who get selected after the online test). <br/><br/>

                <strong>Timeline</strong>
                <li>Registrations start on 7th April, 2021.</li>
                <li>The last day to fill the form is 12 th April 2021.</li>
                <li>Further details regarding the test and the interviews will rolled out in due time.</li>
                <hr/>
                For any queries/ doubts, contact the event coordinators:
                <ul>
                  <li>Tarandeep Singh (+91 9792626247)</li>
                  <li>Yaman Thakur (+91 8860466593)</li>
                  <li>Satyam Soni (+91 9179876400)</li>
                </ul>
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
              Chemathon{" "}
              <small className="text-muted">4 april 2021</small>
            </h5>
          }
          collapse
          close


        >
          <h4 className="event-heading mt-5  display-5">Chemathon will be organised online</h4>
          <div className="widget-padding-md w-100 h-100 text-left border rounded">
            <p className="text-bodyy">
            As a part of the decision taken today by the Osmoze Core team, all events will be conducted online this year.
                 The new cash prize for Chem-A-Thon will be INR. 10,000.               </p>

          </div>
        </Widget>
      </Col>
    </Row>
  </div>
);

export default Chemathon;
