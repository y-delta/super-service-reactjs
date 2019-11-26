import React from 'react';
function SectionStore(){
    return(
<div class="col-lg-9">
  <br/>
  <br/>
    <div class="row">

      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card h-100">
          <img class="card-img-top" src={require("assets/img/items/pen1.jpg")} alt=""></img>
          <div class="card-body">
            <h4 class="card-title">
              <a href="/login-page">Item One</a>
            </h4>
            <h5>&#x20B9;24.99</h5>
            <p class="card-text">A truly fantastic choice!</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card h-100">
         <img class="card-img-top" src={require("assets/img/items/pen2.jpg")} alt=""></img>
          <div class="card-body">
            <h4 class="card-title">
              <a href="/login-page">Item Two</a>
            </h4>
            <h5>&#x20B9;24.99</h5>
            <p class="card-text">A truly fantastic choice! Lorem ipsum dolor sit amet.</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9733;</small>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card h-100">
          <img class="card-img-top" src={require("assets/img/items/pen3.jpg")} alt=""></img>
          <div class="card-body">
            <h4 class="card-title">
              <a href="/login-page">Item Three</a>
            </h4>
            <h5>&#x20B9;24.99</h5>
            <p class="card-text">A truly fantastic choice!</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card h-100">
          <img class="card-img-top" src={require("assets/img/items/pen4.jpg")} alt=""></img>
          <div class="card-body">
            <h4 class="card-title">
              <a href="/login-page">Item Four</a>
            </h4>
            <h5>&#x20B9;24.99</h5>
            <p class="card-text">A truly fantastic choice!</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9733;</small>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card h-100">
          <img class="card-img-top" src={require("assets/img/items/pen5.jpg")} alt=""></img>
          <div class="card-body">
            <h4 class="card-title">
              <a href="/login-page">Item Five</a>
            </h4>
            <h5>&#x20B9;24.99</h5>
            <p class="card-text">A truly fantastic choice! Good one.</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
          </div>
        </div>
      </div>

      
    </div>
</div>


    );

}
export default SectionStore;