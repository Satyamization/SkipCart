import React from "react";
import Carousel from 'react-bootstrap/Carousel';


function CarouselHome() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="http://jpcamara.com/wp-content/uploads/2015/02/carousel.jpg" height="370px"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg" height="370px"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg" height="370px"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselHome;
