import React from 'react';
import {
  Container,
} from 'reactstrap';
// import { Link } from 'react-router-dom';

import s from './ErrorPage.module.scss';

class ErrorPage extends React.Component {
  render() {
    return (
      <div className={s.errorPage}>
        <Container>
          <div className={`${s.errorContainer} mx-auto`}>
            <h1 className={s.errorCode}>404</h1>
            <p className={s.errorInfo}>
              Opps, it seems that this page does not exist here.
            </p>
          </div>
          <footer className={s.pageFooter}>
            Sorry, To Say You are in wrong page.
          </footer>
        </Container>
      </div>
    );
  }
}

export default ErrorPage;
