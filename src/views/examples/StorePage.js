import React from "react";
import {Button, Modal} from "reactstrap";

import IndexHeader from "components/Headers/IndexHeader";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import SectionStore from "views/index-sections/SectionStore";
import SectionMedicine from "views/index-sections/SectionMedicine";
import SectionGrocery from "views/index-sections/SectionGrocery";
import SectionFood from "views/index-sections/SectionFood";
import SectionWater from "views/index-sections/SectionWater";

import $ from "jquery";

function StorePage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("inde");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  const [modal, setModal] = React.useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  //JQUERY SCRIPT
  $(document).ready(function() {
      if($("#f").is(':visible')){
      $("#g").hide();
      $("#m").hide();
      $("#w").hide();
      $("#s").hide();
      }
      $("#gg").click(function() {
      $("#g").show();
      $("#f").hide();
      $("#m").hide();
      $("#w").hide();
      $("#s").hide();
    });

    $("#ff").click(function() {
      $("#f").show();
      $("#s").hide();
      $("#m").hide();
      $("#w").hide();
      $("#g").hide();
    });

    $("#mm").click(function() {
      $("#m").show();
      $("#f").hide();
      $("#g").hide();
      $("#w").hide();
      $("#s").hide();
    });

    $("#ss").click(function() {
      $("#s").show();
      $("#f").hide();
      $("#g").hide();
      $("#m").hide();
      $("#w").hide();
    });

    $("#ww").click(function() {
      $("#w").show();
      $("#f").hide();
      $("#g").hide();
      $("#m").hide();
      $("#s").hide();
    });
  });
  
  return (
    <>
      <IndexNavbar />
      <IndexHeader />
      <script src="vendor/jquery/jquery.min.js"></script>
      <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
      <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />

      <div class="container">
        <div class="row">
          <div class="col-lg-3">
            <h1 class="my-4">What do you need?</h1>
            <div className="setion section-dark">
              <div class="list-group">
                <a href="#food" class="list-group-item" id="ff">
                  Food (Veg &amp; Non Veg.)
                </a>
                <a href="#grocery" class="list-group-item" id="gg">
                  Groceries &amp; Vegetable
                </a>
                <a href="#stationary" class="list-group-item" id="ss">
                  Stationary
                </a>
                <a href="#medicine" class="list-group-item" id="mm">
                  Medicines
                </a>
                <a href="#watercan" class="list-group-item" id="ww">
                  Water Cans
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-9">
            {/* eslint-disable-next-line */}
            <div id="f">
              <a href="#p" name="food" onClick={toggleModal}>
                <SectionFood />
              </a>
            </div>
            {/* eslint-disable-next-line */}
            <div id="g">
              <a href="#p" name="grocery" onClick={toggleModal}>
                <SectionGrocery />
              </a>
            </div>
            {/* eslint-disable-next-line */}
            <div id="s">
              <a href="#p" name="stationary" onClick={toggleModal}>
                <SectionStore />
              </a>
            </div>
            {/* eslint-disable-next-line */}
            <div id="m">
              <a href="#p" name="medicine" onClick={toggleModal}>
                <SectionMedicine />
              </a>
            </div>
            {/* eslint-disable-next-line */}
            <div id="w">
              <a href="#p" name="watercan" onClick={toggleModal}>
                <SectionWater />
              </a>
            </div>
          </div>
        </div>
        <div name="buy">
        <Modal isOpen={modal} toggle={toggleModal}>
                <div className="modal-header">
                  <button
                    aria-label="Close"
                    className="close"
                    type="button"
                    onClick={toggleModal}
                  >
                    <span aria-hidden={true}>×</span>
                  </button>
                  <h5
                    className="modal-title text-center"
                    id="exampleModalLabel"
                  >
                    Your order has been placed!
                  </h5>
                </div>
                <div className="modal-body">
                    We've recieved your request. Our agent will soon deliver it to you. Please keep the exact 
                    amount ready.<br></br> Thank You for your patience. 
                </div>
                <div className="modal-footer">
                  <div className="left-side">
                    <Button
                      className="btn-link"
                      color="default"
                      type="button"
                      onClick={toggleModal}
                    >
                      Ok
                    </Button>
                  </div>
                  <div className="divider" />
                  <div className="right-side">
                    <Button className="btn-link" color="danger" type="button" onClick={toggleModal}>
                      Delete
                    </Button>
                  </div>
                </div>
              </Modal>
        </div>
      </div>
      <DemoFooter />
    </>
  );
}

export default StorePage;
