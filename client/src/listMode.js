import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { Container, Col, Image, Row, Form, FormControl, Button, Jumbotron } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link, useHistory, Redirect } from "react-router-dom";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft, faVideo, faCircle, faListUl, faSearch, faMap, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';


function ListMode() {

  const history = useHistory();
  const goAccount = () => history.push('/account');
  const goMap = () => history.push('/map');
  const goSingleFilmPage = () => history.push('/singleFilmPage');
  const goViewAllFilms = () => history.push('/viewAllFilms');

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };

  return (
    <div>
      <Container className="pt-2 fixed-top">
        <Row className="d-flex justify-content-between">
          <FontAwesomeIcon onClick={() => history.goBack()} className="backButton ml-2" icon={faArrowCircleLeft}/>        
          <Image onClick={goAccount} className="mr-2" src=".\assets\img\avatars\batman.png" rounded width="60" height="60"/>
        </Row>
      </Container>

      <Container className="text-center pt-3 mt-5 mb-3">
        <Button onClick={goViewAllFilms} className="normalButton font-weight-bold shadow py-3">Voir les lieux de tournages</Button>
      </Container>

      <Container className="mt-4">
        <p className="my-1 font-weight-bold">Films Populaires</p>
        <Carousel responsive={responsive}>
          <a href="" role="button" onClick={goSingleFilmPage}>
            <Image className="lMPoster" src=".\assets\img\posters\taxi5.jpg" rounded/>
          </a>
          <a href="" role="button" onClick={goSingleFilmPage}>
            <Image className="lMPoster" src=".\assets\img\posters\taxi5.jpg" rounded/>
          </a>
          <a href="" role="button" onClick={goSingleFilmPage}>
            <Image className="lMPoster" src=".\assets\img\posters\taxi5.jpg" rounded/>
          </a>
          <a href="" role="button" onClick={goSingleFilmPage}>
            <Image className="lMPoster" src=".\assets\img\posters\taxi5.jpg" rounded/>
          </a>
          <a href="" role="button" onClick={goSingleFilmPage}>
            <Image className="lMPoster" src=".\assets\img\posters\taxi5.jpg" rounded/>
          </a>
          <a href="" role="button" onClick={goSingleFilmPage}>
            <Image className="lMPoster" src=".\assets\img\posters\taxi5.jpg" rounded/>
          </a>
        </Carousel>
      </Container>

      <Container className="mt-4">
        <p className="my-1 font-weight-bold">Séries Populaires</p>
        <Carousel responsive={responsive}>
          <a href="" role="button" onClick={goSingleFilmPage}>
            <Image className="lMPoster" src=".\assets\img\posters\taxi5.jpg" rounded/>
          </a>
          <a href="" role="button" onClick={goSingleFilmPage}>
            <Image className="lMPoster" src=".\assets\img\posters\taxi5.jpg" rounded/>
          </a>
          <a href="" role="button" onClick={goSingleFilmPage}>
            <Image className="lMPoster" src=".\assets\img\posters\taxi5.jpg" rounded/>
          </a>
          <a href="" role="button" onClick={goSingleFilmPage}>
            <Image className="lMPoster" src=".\assets\img\posters\taxi5.jpg" rounded/>
          </a>
          <a href="" role="button" onClick={goSingleFilmPage}>
            <Image className="lMPoster" src=".\assets\img\posters\taxi5.jpg" rounded/>
          </a>
          <a href="" role="button" onClick={goSingleFilmPage}>
            <Image className="lMPoster" src=".\assets\img\posters\taxi5.jpg" rounded/>
          </a>
        </Carousel>
      </Container>

      <Container className="pb-5 mt-4">
        <p className="my-1 font-weight-bold">Nouveautés</p>
        <Carousel responsive={responsive}>
          <a href="" role="button" onClick={goSingleFilmPage}>
            <Image className="lMPoster" src=".\assets\img\posters\taxi5.jpg" rounded/>
          </a>
          <a href="" role="button" onClick={goSingleFilmPage}>
            <Image className="lMPoster" src=".\assets\img\posters\taxi5.jpg" rounded/>
          </a>
          <a href="" role="button" onClick={goSingleFilmPage}>
            <Image className="lMPoster" src=".\assets\img\posters\taxi5.jpg" rounded/>
          </a>
          <a href="" role="button" onClick={goSingleFilmPage}>
            <Image className="lMPoster" src=".\assets\img\posters\taxi5.jpg" rounded/>
          </a>
          <a href="" role="button" onClick={goSingleFilmPage}>
            <Image className="lMPoster" src=".\assets\img\posters\taxi5.jpg" rounded/>
          </a>
          <a href="" role="button" onClick={goSingleFilmPage}>
            <Image className="lMPoster" src=".\assets\img\posters\taxi5.jpg" rounded/>
          </a>
        </Carousel>
      </Container>
      <Container className="pt-2 fixed-bottom">
        <Row className="d-flex justify-content-between pb-2">
          <FontAwesomeIcon onClick={goMap} className="buttonFont ml-3 shadow" icon={faMapMarkerAlt}/>        
          <FontAwesomeIcon className="buttonFont mr-3 shadow" icon={faSearch}/>        
        </Row>
      </Container>
    </div>
  );
}
export default ListMode;
