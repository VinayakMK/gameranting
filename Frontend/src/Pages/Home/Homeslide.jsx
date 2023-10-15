import React from "react";
import { Container } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';


function DarkVariant() {
  return (
    <div class="mt-5">
      <Container >
        <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/10/xbox-and-activision-blizzard-logos.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5"
          alt="First slide"
        />
        <Carousel.Caption style={{color: "white"}}>
          <h5>Activision Blizzard Acquisition Approved by CMA, Microsoft Should Complete Deal Soon</h5>
          <p>The UK’s Competition and Markets Authority, the CMA, finally approves Microsoft’s long-pending acquisition of Activision Blizzard..</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/wm/2023/10/sony-dualsense-ps5-pulse-explore-2.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5"
          alt="Second slide"
        />
        <Carousel.Caption style={{color: "white"}}>
          <h5>Sony Patents New PS5 Controller with Slots for Charging Earbuds</h5>
          <p>A recently published patent suggests that Sony could be working on a new PS5 controller with slots for storing and charging earbuds</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/10/marvel-spider-man-2-cover.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5"
          alt="Third slide"
        />
        <Carousel.Caption style={{color: "white"}}>
          <h5>Marvel’s Spider-Man 2 Reveals Two New Suits for the Game</h5>
          <p>
          PlayStation unveils two new Marvel's Spider-Man 2 outfits which are set to debut once the game officially launches on October 20
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Container>
    </div>
  );
}

export default DarkVariant;

