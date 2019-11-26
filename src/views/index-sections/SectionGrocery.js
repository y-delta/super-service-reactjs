import React from 'react';
function SectionGrocery(){
    return(
<div class="col-lg-9">
  <br/>
  <br/>
    <div class="row">

      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card h-100">
          <img class="card-img-top" src={require("assets/img/items/fruits1.jpg")} alt=""></img>
          <div class="card-body">
            <h4 class="card-title">
              <a href="/login-page">Fruits</a>
            </h4>
            <h5>&#x20B9;24.99</h5>
            <p class="card-text">Choose from a collection of fruits such as Apples, Oranges, Banana, and so on.</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card h-100">
         <img class="card-img-top" src={require("assets/img/items/fruits2.jpg")} alt=""></img>
          <div class="card-body">
            <h4 class="card-title">
              <a href="/login-page">Eggs</a>
            </h4>
            <h5>&#x20B9;24.99</h5>
            <p class="card-text">A dozen eggs for ypur experience.</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9733;</small>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card h-100">
          <img class="card-img-top" src={require("assets/img/items/fruits3.jpg")}  height="700" width="400" alt=""></img>
          <div class="card-body">
            <h4 class="card-title">
              <a href="/login-page">Aashirwaad Atta</a>
            </h4>
            <h5>&#x20B9;24.99</h5>
            <p class="card-text">A 10KG pack for your household needs.</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card h-100">
          <img class="card-img-top" src={require("assets/img/items/fruits4.jpg")} alt=""></img>
          <div class="card-body">
            <h4 class="card-title">
              <a href="/login-page">Coca-Cola</a>
            </h4>
            <h5>&#x20B9;24.99</h5>
            <p class="card-text">A perfect choice for a parrty filled evening.</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9733;</small>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card h-100">
          <img class="card-img-top" src={require("assets/img/items/fruits5.jpg")} alt=""></img>
          <div class="card-body">
            <h4 class="card-title">
              <a href="/login-page">Vegetables</a>
            </h4>
            <h5>&#x20B9;24.99</h5>
            <p class="card-text">A truly fantastic choice! Good one. Stay healthy!</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card h-100">
          <img class="card-img-top" src={require("assets/img/items/fruits6.jpg")} alt=""></img>
          <div class="card-body">
            <h4 class="card-title">
              <a href="/login-page">Gobi</a>
            </h4>
            <h5>&#x20B9;24.99</h5>
            <p class="card-text">A truly fantastic choice! You will die.</p>
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
export default SectionGrocery;