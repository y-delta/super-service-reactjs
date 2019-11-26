import React from "react";
import BackgroundSlider from 'react-background-slider';
// reactstrap components
import { Button, Container } from "reactstrap";

import img1 from 'assets/img/1.jpg'
import img2 from 'assets/img/2.jpg'
import img3 from 'assets/img/3.jpg'
import img4 from 'assets/img/4.jpg'
import img5 from 'assets/img/pizza.jpg'

// core components

function LandingPageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {

    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div
        
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
        
      >
        <BackgroundSlider  images={[img1, img2, img3, img4, img5]}
  duration={5} transition={2} />
        
        <div className="filter" />
        <Container>
          <div className="motto text-center">
            <h1>Super Service</h1>
            <h3>Get your daily needs delivered right from the comfort of your home.</h3>
            <br />
            <Button
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              className="btn-round mr-1"
              color="neutral"
              target="_blank" // for opening in new tab
              outline
            >
              <i className="fa fa-play" />
              Watch video
            </Button>
            <Button className="btn-round" color="neutral" type="button" outline href="/login-page">
              Login
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
}

export default LandingPageHeader;
