import React from 'react';
function SectionWater(){
    return(
<div class="col-lg-9">
  <br/>
  <br/>
    <div class="row">

      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card h-100">
          <img class="card-img-top" src={require("assets/img/items/water1.jpg")} alt=""></img>
          <div class="card-body">
            <h4 class="card-title">
              <a href="/login-page">Pack of 3</a>
            </h4>
            <h5>&#x20B9;24.99</h5>
            <p class="card-text">3 water cans each of capacity 12L for great use.</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card h-100">
         <img class="card-img-top" src={require("assets/img/items/water2.jpg")} alt=""></img>
          <div class="card-body">
            <h4 class="card-title">
              <a href="/login-page">Filtered Can</a>
            </h4>
            <h5>&#x20B9;24.99</h5>
            <p class="card-text">Enjoy filtered water right at your doorstep! RO/UV filtered water.</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9733;</small>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card h-100">
          <img class="card-img-top" src={require("assets/img/items/water3.jpg")} alt=""></img>
          <div class="card-body">
            <h4 class="card-title">
              <a href="/login-page">Single Can</a>
            </h4>
            <h5>&#x20B9;24.99</h5>
            <p class="card-text">A truly fantastic choice for single household use!</p>
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
export default SectionWater;