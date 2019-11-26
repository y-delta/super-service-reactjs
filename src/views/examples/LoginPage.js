import  React,{Component} from "react";
import firebase from './Firebase/fb';
// reactstrap components
import { Button, Card, Form, Input, Container, Row, Col, FormGroup } from "reactstrap";
// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import SectionJavaScript from "views/index-sections/SectionJavaScript";

class LoginPage extends Component {

  state = {
    email:'',
    password:'',
    error:null,
  };


  handleChange=(e)=>{
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit=(e)=>{
    e.preventDefault();
    const { email, password } = this.state;
    firebase
     .auth()
     .signInWithEmailAndPassword(email, password)
     .then((user) => {
       this.props.history.push('/store-page');
     })
     .catch((error) => {
       this.setState({ error: error });
     });
  }

  handleForgot=(e)=>{
    e.preventDefault();
    const {email} = this.state;
    firebase
    .auth()
    .sendPasswordResetEmail(email)
    .then((user)=>{
      this.setState(this.state);
    })
    .catch((error)=>{
      this.setState({error:error});
    });
  }

  render = () => {
    const {email,password}=this.state;    
    const isInvalid = email === "" || password === "";

    return (
    <>
       <div>
         <ExamplesNavbar />
         <div
          className="page-header"
          style={{
            backgroundImage:
              "url(" + require("assets/img/header.jpg") + ")"
          }}
        >
          <div/>
          <div className="filter" />
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" lg="4">
                <Card className="card-register ml-auto mr-auto">
                  <h3 className="title mx-auto">Welcome</h3>
                  <div className="social-line text-center">
                  <img alt="..."  src={require("assets/img/avatar.png")} height="40" width="40"></img>
                  </div>
                  <Form className="register-form" onSubmit={this.handleSubmit}>
                  <FormGroup>
                    <label>Email*</label>
                    <Input
                      name="email"
                      placeholder="Email"
                      type="text"
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
                    <Button block className="btn-round" color="danger" type="submit" disabled={isInvalid}>
                      Login
                    </Button>
                  </Form>
                  <div className="forgot" onClick={this.handleForgot}>
                    <SectionJavaScript />
                  </div>
                  <div>
                    <a href="/register-page"><h7 style={{color:"white"}}>New User? Register.</h7></a>
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
      </div>
      </>
    );
  }
}

export default LoginPage;
