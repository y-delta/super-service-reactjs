import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function IndexHeader() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("assets/img/store.jpg") + ")"
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <h1 className="presentation-title">Super Service</h1>
              
            </div>
            <h2 className="presentation-subtitle text-center">
              Get your daily needs delivered right from the comfort of your home.
            </h2>
          </Container>
        </div>
        
        <h6 className="category category-absolute">
          Designed and coded by ||{" "}
          <a href="https://www.google.com">Scooby Dooby Doo</a>
         </h6>
      </div>
    </>
  );
}

export default IndexHeader;
