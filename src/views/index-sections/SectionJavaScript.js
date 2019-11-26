import React from "react";

// reactstrap components
import {
  Button,
  Modal,

} from "reactstrap";

// core components

function SectionJavaScript() {
  const [modal, setModal] = React.useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <>
    
              {/* Button trigger modal */}
              <Button
               className="btn-link"
                color="danger"
               // outline
                type="button"
                onClick={toggleModal}
              >
                Forgot Password?
              </Button>
              {/* Modal */}
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
                    Change of Password
                  </h5>
                </div>
                <div className="modal-body">
                    We've recieved your request for change of password. An email as been sent to your registered
                    email adress.<br/><br/> Kindly reset the password and try again.
                    <br/><br/>Thank You for your patience.
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
   
    </>
  );
}

export default SectionJavaScript;
