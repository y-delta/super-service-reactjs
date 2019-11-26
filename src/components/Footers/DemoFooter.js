import React from "react";

// reactstrap components
import { Row, Container } from "reactstrap";

function DemoFooter() {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row>
          <nav className="footer-nav">
            <ul>
              <li>
                <a
                  href="views/examples/LandingPage.js"
                  target="_blank"
                >
                  Super Service
                </a>
              </li>
              <li>
                <a
                  href="views/Index.js"
                  target=""
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="views/examples/LandingPage.js"
                  target=""
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com"
                  target=""
                  >
                    Feeling Lucky?
                  </a>
              </li>
            </ul>
          </nav>
          <div className="credits ml-auto">
            <span className="copyright">
              © {new Date().getFullYear()}, made with{" "}
              <i className="fa fa-heart heart" /> in India.
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default DemoFooter;
