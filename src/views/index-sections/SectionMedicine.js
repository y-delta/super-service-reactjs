import React from 'react';
function SectionMedicine(){
    return(
<div class="col-lg-9">
  <br/>
  <br/>
    <div class="row">

      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card h-100">
          <img class="card-img-top" src={require("assets/img/items/med1.jpg")} alt=""></img>
          <div class="card-body">
            <h4 class="card-title">
              <a href="/login-page">Paracetamol Tablets</a>
            </h4>
            <h5>&#x20B9;24.99</h5>
            <p class="card-text">Please provide prescription!</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card h-100">
         <img class="card-img-top" src={require("assets/img/items/med2.jpg")} alt=""></img>
          <div class="card-body">
            <h4 class="card-title">
              <a href="/login-page">Crocin Tablets</a>
            </h4>
            <h5>&#x20B9;24.99</h5>
            <p class="card-text">Please provide prescription!</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9733;</small>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card h-100">
          <img class="card-img-top" src={require("assets/img/items/med3.jpg")} alt=""></img>
          <div class="card-body">
            <h4 class="card-title">
              <a href="/login-page">Vicks</a>
            </h4>
            <h5>&#x20B9;24.99</h5>
            <p class="card-text">Please provide prescription!</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card h-100">
          <img class="card-img-top" src={require("assets/img/items/med4.jpg")} alt=""></img>
          <div class="card-body">
            <h4 class="card-title">
              <a href="/login-page">Cough Syrup</a>
            </h4>
            <h5>&#x20B9;24.99</h5>
            <p class="card-text">Please provide prescription!</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9733;</small>
          </div>
        </div>
      </div>

     
    </div>
</div>


    );

}
export default SectionMedicine;