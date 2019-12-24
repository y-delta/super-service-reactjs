import React from "react";

// reactstrap components
import {  Button,  Card,  CardBody,  /*CardFooter, use this to add contact no. */ CardTitle,  Form,  Input, 
   InputGroupAddon, InputGroupText, InputGroup,  Container,  Row,  Col} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

function LandingPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
      <ExamplesNavbar />
      <LandingPageHeader />
      <div className="main">
        <div className="section text-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">About Us</h2>
                <h5 className="description">
                  Super Service is a online delivery platform designed to ease and help
                  with the process of buying daily household and grocery items. You name it,
                  we deliver it. Place an order through our service and get items from your 
                  favorite stores delivered, right at your doorstep.
                </h5>
                <br />
                <Button
                  className="btn-round"
                  color="info"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  See Details
                </Button>
              </Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-tap-01" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Ease-of-use</h4>
                    <p className="description">
                      <br></br>Order your needs from the comfort of your home.
                    </p>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-pin-3" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Location</h4>
                    <p>
                    <br></br>Currently serving near and nearby areas only.
                    </p>
                    
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-chart-bar-32" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Variety</h4>
                    <p>
                    <br></br>Choose from a veriety of many items from multiple stores 
                      according to your needs.
                    </p>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-user-run" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Speedy Delivery</h4>
                    <p>
                    <br></br>Get your orders delivered within twenty mins from accepting order.
                    </p>
                    </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section section-dark text-center">
          <Container>
            <h2 className="title">The Creators</h2>
            <Row>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                      <img
                        alt="..."
                        src={require("assets/img/faces/1.jpg")}
                      />
                  </div>
                  <CardBody>              
                      <div className="author">
                        <CardTitle tag="h4">Person 1</CardTitle>
                        <h6 className="card-category">some deets</h6>
                      </div>
                    <p className="card-description text-center">
                      Handled the design and color scheme across the entire website.
                      Used bootstrap to apply navbar across landing and store page.
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    
                      <img
                        alt="..."
                        src={require("assets/img/faces/2.jpg")}
                      />

                  </div>
                  <CardBody>
                    
                      <div className="author">
                        <CardTitle tag="h4">Person 2</CardTitle>
                        <h6 className="card-category">some deets</h6>
                      </div>
                    <p className="card-description text-center">
                     Handled login and signup of new users. Used firebase, a google cloud database 
                     for authentication.
                    </p>
                  </CardBody>
                  
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                      <img
                        alt="..."
                        src={require("assets/img/faces/3.jpg")}
                      />
                  </div>
                  <CardBody>
                      <div className="author">
                        <CardTitle tag="h4">Person 3</CardTitle>
                        <h6 className="card-category">soem deets</h6>
                      </div>
                    <p className="card-description text-center">
                     Responsible for hosting the website and making sure it's responsive across 
                     all platforms.
                    </p>
                  </CardBody>
                  
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section landing-section">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="text-center">Have any feedback?</h2>
                <Form className="contact-form">
                  <Row>
                    <Col md="6">
                      <label>Name</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Name" type="text" />
                      </InputGroup>
                    </Col>
                    <Col md="6">
                      <label>Email</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-email-85" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Email" type="text" />
                      </InputGroup>
                    </Col>
                  </Row>
                  <label>Message</label>
                  <Input
                    placeholder="Tell us your thoughts and feelings..."
                    type="textarea"
                    rows="4"
                  />
                  <Row>
                    <Col className="ml-auto mr-auto" md="4">
                      <Button className="btn-fill" color="danger" size="lg">
                        Send Message
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <DemoFooter />
    </>
  );
}

export default LandingPage;
