import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import { Container, Col, Image, Row, Form, FormControl, Button, Jumbotron } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft, faVideo, faCircle, faListUl, faSearch, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

import ReactPlayer from 'react-player'

function Account() {
  const history = useHistory();
  const goAccount = () => history.push('/account');
  const golistMode = () => history.push('/listMode');

  return (
    <div>
      <Container className="pt-2 fixed-top">
          <Row className="d-flex justify-content-between">
            <FontAwesomeIcon onClick={() => history.goBack()} className="backButton ml-2" icon={faArrowCircleLeft}/>        
          </Row>
        </Container>
        <Container className="py-4"></Container>

        <Container className="mt-5 pt-5 text-center">
          <Row className="justify-content-center">
            <Image src=".\assets\img\avatars\batman.png" rounded width="100" height="100"/>
            {/* OR <FontAwesomeIcon className="backButton ml-2" icon={faQuestionCircle}/>         */}
          </Row>
          <Row className="justify-content-center">
            <h4 className="font-weight-bold">Profil</h4>
          </Row>

            <Col className="mt-4">
              <p className="my-0">Pseudo : <span className="font-weight-bold">John Smith</span> </p>
              <Link className="smallLink my-4 small" to="/forgetPassword">Modifier le pseudonyme</Link>       
            </Col>
            <Col className="mt-4">
              <p className="my-0">Mot de passe : <span className="font-weight-bold">•••••••••</span></p>
              <Link className="smallLink my-4 small" to="/forgetPassword">Modifier le mot de passe</Link>       
            </Col>
        </Container>
    </div>
  );
}

export default Account;
