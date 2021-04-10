import React from "react";
// import {
//   Row, Col, Progress, Table, Label, Input, Card, CardImg, CardText, CardBody,
//   CardTitle, CardSubtitle, Button
// } from "reactstrap";
import {
  Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from "reactstrap";
// import Widget from "../../components/Widget";

// import Calendar from "./components/calendar/Calendar";
//  import Map from "./components/am4chartMap/am4chartMap";
// import Rickshaw from "./components/rickshaw/Rickshaw";

// import AnimateNumber from "react-animated-number";

import s from "./Dashboard.module.scss";

// import Adhyan from "../../assets/people/AdhyanImg.jpg";
// import udyog from "../../assets/people/Udyog.jpg";
import Chemcoding from "../../assets/people/ChemcodingImg.jpg";
import osmoclick from "../../assets/people/osmoclick.jpg";
import OsmoCross from "../../assets/people/OsmoCross.jpg";
import Chemathon from  "../../assets/people/ChemathonImg.jpg";
import ComingSoon from "../../assets/people/cominsoon.jpg";
import GuestLecture from "../../assets/people/guest_lecture.jpg";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      graph: null,
      checkedArr: [false, false, false],
    };
    this.checkTable = this.checkTable.bind(this);
  }

  checkTable(id) {
    let arr = [];
    if (id === 0) {
      const val = !this.state.checkedArr[0];
      for (let i = 0; i < this.state.checkedArr.length; i += 1) {
        arr[i] = val;
      }
    } else {
      arr = this.state.checkedArr;
      arr[id] = !arr[id];
    }
    if (arr[0]) {
      let count = 1;
      for (let i = 1; i < arr.length; i += 1) {
        if (arr[i]) {
          count += 1;
        }
      }
      if (count !== arr.length) {
        arr[0] = !arr[0];
      }
    }
    this.setState({
      checkedArr: arr,
    });
  }

  render() {
    return (
      <div className={s.root}>
        <h1 className="page-title">
          Dashboard &nbsp;
          <small>
            <small>Osmoze Events</small>
          </small>
        </h1>
        <h1 className="page-title">
          <small>
            <small>Main-Events</small>
          </small>
        </h1>
        <Row>
          <Col lg={5} xl={5} md={12} className="mt-5">
            <Card>
              <CardImg top width="100%" src={Chemcoding} alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h5">ChemCoding</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">15 April 2021</CardSubtitle>
                <CardText> Osmoze brings to you the opportunity to showcase logical thinking and dexterity with algorithms in the form of ChemCoding, an exhilarating coding event.</CardText>
                <Button
                  color="primary"
                  id="show-info-message"
                  href="/#/events/chemCoding"
                >
                  Link
                </Button>

              </CardBody>
            </Card>
          </Col>
          <Col lg={5} xl={5} md={12} className="mt-5">
            <Card>
              <CardImg top width="100%" src={Chemathon} alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h5">Chemathon</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">15 April 2021</CardSubtitle>
                <CardText>  A series of extremely competitive events needing you to get into the shoes for the internship session.        </CardText>
                <Button
                  color="primary"
                  id="show-info-message"
                  href="#/events/Chemathon"
                >
                  Link
                </Button>
              </CardBody>
            </Card>
          </Col>

        </Row>
        <br></br><br/>
        <Row>
          <Col lg={5} xl={5} md={12} className="mt-5">
            <Card>
              <CardImg top width="100%" src={ComingSoon} alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h5">Adhyayan</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">15 April 2021</CardSubtitle>
                <CardText>Ever fancied yourself as a maverick of management! Come test your astute skills in solving a real-life case study in the event, ADHYAYAN.</CardText>
                <Button
                  color="primary"
                  id="show-info-message"
                  href="#/events/Adhyayan"
                >
                  Link
                </Button>
              </CardBody>
            </Card>
          </Col>
          <Col lg={5} xl={5} md={12} className="mt-5">
            <Card>
              <CardImg top width="100%" src={ComingSoon} alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h5">Udhyog</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">15 April 2021</CardSubtitle>
                <CardText> Here, you will be provided with a real life engineering challenge, straight from a reputed Chemical based industry. Its high time to show your worth to the industry.</CardText>
                <Button
                  color="primary"
                  id="show-info-message"
                  href="#/events/Udyog"
                >
                  Link
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <br />

        <h1 className="page-title mt-5">
          <small>
            <small>Pre-Events</small>
          </small>
        </h1>
        <Row>
        <Col lg={4} xl={4} xs={12} className="mt-5">
            <Card>
              <CardImg top width="100%" src={GuestLecture} alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h5">Guest Lecture</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">11 April 2021 (8-9 pm)</CardSubtitle>
                <CardText>
                Mr. Mehul Bapat, an esteemed alumnus of IIT(BHU) Varanasi, and currently working as a research assistant at Carnegie Mellon University, USA.
                <br/>
                Will be enlightening us on the role of computational research in Chemical Engineering.  
      
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col lg={4} xl={4} xs={12} className="mt-5">
            <Card>
              <CardImg top width="100%" src={osmoclick} alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h5">OsmoClick</CardTitle>
              </CardBody>
            </Card>
          </Col>
      <Col lg={4} xl={4} xs={12} className="mt-5">
            <Card>
              <CardImg top width="100%" src={OsmoCross} alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h5">OsmoCross I</CardTitle>
                <CardText>
                OsmoCross 1 held on 2nd April saw some nail biting competition.<br/><br/>
                <ol>
                    <li>1. Prince 20045093</li>
                    <li>2. Vedant Chitnis 20045139</li>
                    <li>3. Kushagra Singh 18045059</li>
                </ol>
                Get ready for the more exciting OsmoCross 2 coming on 9th April.
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default Dashboard;
