import React from "react";
import { Row, Col } from "reactstrap";

import Widget from "../../components/Widget/Widget";
import PS from '../../assets/people/udyogps.pdf';


const Udyogg = () => (
  <div >
    {/* This is New Widget */}
<Row className="row justify-content-center">
      <Col  xs={"12"} lg={"8"}  >
        <Widget
          title={
            <h5>
              Udyogg{" "}
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
<strong>Squadron :</strong> Soniya Karamchandani, Shashwat Kesharwani, Shashwat Tewari (Rs 4000/-)
              </b>
                 <br></br><br></br>
                 <strong>Cash prizes will be rolled out in 48 hours.  </strong>               
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
              Udyog{" "}
              <small className="text-muted">11 april 2021</small>
            </h5>
          }
          collapse
          close


        >
          <h4 className="event-heading /mt-5  display-5">Registrations are open!!</h4>
          <div className="widget-padding-md w-100 h-100 text-left border rounded">
            <p className="text-bodyy">
            Hello Everyone!
            <br/>
            We hope you are safe and sound inside your home. We invite you to participate in Osmoze'21 event — Udyog.<br></br>
            <br/>
            <strong>THEME: HYDRODESULFURIZATION</strong> <br/><br/>
            This time through UDYOG, we will step into the shoes of a chemical engineer and try to appreciate 
            the role being played by them in a situation. The basic concepts of chemical engineering, along with 
            an analytical mind, is what you need to sail through.<br/> You will be given a problem statement on 
            the Hydrodesulfurization process-a process that may be new and exciting for you to delve upon. 
            You have to solve the situations that are mentioned in the problem statement.<br/>
            We expect you to participate in large numbers as this is something you will enjoy solving !!!
            <br/><br/>
            <strong>Click <a target="blank" href="https://docs.google.com/forms/d/e/1FAIpQLSe3eaqIHTha7PXLpSmqyewemwKZoarNnOXAun3EwQxok0wz1g/viewform"> here </a>to register.
            The registrations are open till 14th April, 11:59 PM. <br/><br/>            </strong>

            The event structure, rules and timeline are all available in the Problem Statement which can be found below.
            <br/><br/>
            For any queries, please contact the event coordinators:<br/><br/>
            Rajesh Saha - +91-8640005433 - rajeshsaha.che18@itbhu.ac.in<br/>
            Yash Balraj Ippakayal - +91-9325380133 - yashbalraji.che18@iitbhu.ac.in<br/>
            Tejaswita Som - +91-8765001039 - tejaswitasom.che18@itbhu.ac.in<br/>
            Suraj Kumar Maurya - +91-7860610532 - surajkmaurya.che18@itbhu.ac.in   <br/> 
            <br/>
            <a target="blank" href={PS}>Download PS</a>      
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
              Udyog{" "}
              <small className="text-muted">7 april 2021</small>
            </h5>
          }
          collapse
          close


        >
          <h4 className="event-heading /mt-5  display-5">Udyog will be organised online</h4>
          <div className="widget-padding-md w-100 h-100 text-left border rounded">
            <p className="text-bodyy">
                 As a part of the decision taken today by the Osmoze Core team, all events will be conducted online this year.
                 The new cash prize for Udyog will be INR. 10,000. 
                 <br></br><br></br>
                 <strong>Registrations will start soon!  </strong>           
            </p>

          </div>
        </Widget>
      </Col>
    </Row>
  </div>
);

export default Udyogg;
