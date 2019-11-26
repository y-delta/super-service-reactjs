import React, { Component, Fragment } from "react";
import firebase from './Firebase/fb';
// reactstrap components
import { Button, Card, Form, Input, Container, Row, Col, FormGroup } from "reactstrap";

  var name = "";
class RegisterPage extends Component {
  state= {
  fname: "",
  lname: "",
  email: "",
  password: "",
  address: "",
  error:null,
  };
  handleChange=(event)=>{
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit=(event)=>{
    event.preventDefault();
    const {email, password}= this.state;
    name = this.fname;

    firebase
    .auth()
    .createUserWithEmailAndPassword(email,password)
    .then((user)=>{
      this.props.history.push('/store-page');
    })
    .catch((error)=>{
      this.setState({error:error});
    })
  };
 
  render() {
    //validation
    const {fname,lname, email, password, address} = this.state;
    const isInvalid = email === "" || password === "";

    return (
      <>
        <div
          className="page-header"
          style={{
            backgroundImage:
              "url(" + require("assets/img/login-image.jpg") + ")"
          }}
        >
          <div className="filter" />
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" lg="4">
                <Card className="card-register ml-auto mr-auto">
                  <h3 className="title mx-auto">Welcome</h3>
                  
                  <Fragment>
                  <Form className="register-form" onSubmit={this.handleSubmit}>
                    <FormGroup><label>First Name*</label>
                    <Input
                      name="fname"
                      placeholder="First Name"
                      type="text"
                      value={fname}
                      onChange={this.handleChange}
                    />
                    </FormGroup>
                    <FormGroup>
                    <label>Last Name*</label>
                    <Input
                      name="lname"
                      placeholder="Last Name"
                      type="text"
                      value={lname}
                      onChange={this.handleChange}
                    />
                    </FormGroup>
                    <FormGroup>
                    <label>Email*</label>
                    <Input
                      name="email"
                      placeholder="Email"
                      type="email"
                      value={email}
                      onChange={this.handleChange}
                    />
                    </FormGroup>
                    <FormGroup>
                    <label>Password*</label>
                    <Input
                      name="password"
                      placeholder="Password"
                      type="password"
                      value={password}
                      onChange={this.handleChange}
                    />
                    </FormGroup>
                    <FormGroup>
                    <label>Address*</label>
                    <Input
                      name="address"
                      placeholder="Address"
                      type="text"
                      value={address}
                      onChange={this.handleChange}
                    />
                    </FormGroup>
                    <Button
                      block
                      className="btn-round"
                      color="danger"
                      disabled={isInvalid}
                      type="submit"
                    >
                      Register
                    </Button>
                  </Form>
                  </Fragment>
                 <div><br/>
                  <a href="/login-page"><h6 style={{color:"white"}}>Already a user? Log in.</h6></a>
                  </div>
                </Card>
              </Col>
            </Row>
          </Container>
          <div className="footer register-footer text-center">
            <h6>
              © 2019, made with <i className="fa fa-heart heart" /> in India.
            </h6>
          </div>

        </div>
        </>
    );
  }
}
export default RegisterPage;
export {name};