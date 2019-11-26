import React from 'react';
function SectionFood(){
    return(
<div class="col-lg-9">
  <br/>
  <br/>
    <div class="row">

      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card h-100">
          <img class="card-img-top" src={require("assets/img/items/food1.JPG")} alt=""></img>
          <div class="card-body">
            <h4 class="card-title">
              <a href="#order">Ghee Rice Meal</a>
            </h4>
            <h5>&#x20B9;24.99</h5>
            <p class="card-text">Chole, Chapati, Ghee Rice.</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card h-100">
         <img class="card-img-top" src={require("assets/img/items/food2.JPG")} alt=""></img>
          <div class="card-body">
            <h4 class="card-title">
              <a href="#order">Paneer Chilly and Fried Rice</a>
            </h4><br/>
            <h5>&#x20B9;24.99</h5>
            <p class="card-text">Vegetable Fried Rice</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9733;</small>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card h-100">
          <img class="card-img-top" src={require("assets/img/items/food3.jpg")} alt=""></img>
          <div class="card-body">
            <h4 class="card-title">
              <a href="#order">Hakka Noodles</a>
            </h4>
            <h5>&#x20B9;24.99</h5>
            <p class="card-text">Please specify Veg. or Non Veg.</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card h-100">
          <img class="card-img-top" src={require("assets/img/items/food4.JPG")} alt=""></img>
          <div class="card-body">
            <h4 class="card-title">
              <a href="#order">North Indian Meal</a>
            </h4>
            <h5>&#x20B9;24.99</h5>
            <p class="card-text">Shahi Paneer, Chapati, Daal and Fried Rice.</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9733;</small>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card h-100">
          <img class="card-img-top" src={require("assets/img/items/food5.JPG")} alt=""></img>
          <div class="card-body">
            <h4 class="card-title">
              <a href="#order">Biryani</a>
            </h4>
            <h5>&#x20B9;24.99</h5>
            <p class="card-text">A truly fantastic choice! Please specify Veg. or Non Veg.</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card h-100">
          <img class="card-img-top" src={require("assets/img/items/food6.JPG")} alt=""></img>
          <div class="card-body">
            <h4 class="card-title">
              <a href="#order">Rolls</a>
            </h4>
            <h5>&#x20B9;24.99</h5>
            <p class="card-text">Please specify Veg. or Non Veg.</p>
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
export default SectionFood;