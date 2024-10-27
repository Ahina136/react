import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import Link from './Components/Link';
import Dropdown from './Components/Dropdown';


const App =()=>{
  return(
    <>
    <Home/>
    <Link/>
    <Dropdown/>
    
    
    <br/><br/>

    <nav class="navbar navbar-expand-lg bg-warning">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          
          <Home/>
        </li>
        <li class="nav-item">
          
          <Link/>
        </li>
        <li class="nav-item">
          
          <Dropdown/>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav><br />

    <h1 className="text-capitalize text-center text-danger mt=3 mb-5">welcome to my ak jewellery shop</h1><br />
    <div className="container text-center">
  <div className="row">
    <div className="col">
    <div class="card" style={{width: "18rem"}} height="250px">
  <img src="./ring.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h4 class="card-title">Ring</h4>
    <h6 class="card-price">50000 ISD</h6>
    <p class="card-text">Gold rings are hollow, circular pieces of metal and can be produced in custom sizes.</p>
    <a href="#" class="btn btn-primary">buy now</a>
    
  </div>
</div>
    </div>
    <div className="col">
    <div class="card" style={{width: "18rem"}} height="250px">
  <img src="./bangless.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h4 class="card-title">Bangles</h4>
    <h6 class="card-title">85000 ISD</h6>
    <p class="card-text">Gold bangles have adorned and ornamented women's dainty wrists since forever. This is a symbol of status, prosperity, and wealth.</p>
    <a href="#" class="btn btn-primary">buy now</a>
  </div>
</div>
    </div>
    <div className="col">
    <div class="card" style={{width: "18rem"}} height="250px">
  <img src="./necklace.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h4 class="card-title">Necklace</h4>
    <h6 class="card-price">95000 ISD</h6>
    <p class="card-text"> Women wore gold chains not only as jewellery but also as a symbol of their social and economic status. </p>
    <a href="#" class="btn btn-primary">buy now</a>
  </div>
</div>
    </div>
  </div>
</div><br /><br />




<div className="container text-center">
  <div className="row">
    <div className="col">
    <div class="card" style={{width: "18rem"}} height="250px">
  <img src="./bracelet.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h4 class="card-title">Bracelet</h4>
    <h6 class="card-price">70000 ISD</h6>
    <p class="card-text">Gold bracelet are hollow, circular pieces of metal and can be produced in custom sizes.</p>
    <a href="#" class="btn btn-primary">buy now</a>
    
  </div>
</div>
    </div>
    <div className="col">
    <div class="card" style={{width: "18rem"}} height="250px">
  <img src="./ear.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h4 class="card-title">Earring</h4>
    <h6 class="card-title">95000 ISD</h6>
    <p class="card-text">Gold Earrings have adorned and ornamented women's dainty wrists since forever. This is a symbol of status, prosperity, and wealth.</p>
    <a href="#" class="btn btn-primary">buy now</a>
  </div>
</div>
    </div>
    <div className="col">
    <div class="card" style={{width: "18rem"}} height="250px">
  <img src="./necklace.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h4 class="card-title">Necklace</h4>
    <h6 class="card-price">95000 ISD</h6>
    <p class="card-text"> Women wore gold chains not only as jewellery but also as a symbol of their social and economic status. </p>
    <a href="#" class="btn btn-primary">buy now</a>
  </div>
</div>
    </div>
  </div>
  </div>







    </>
  )
}
export default App;