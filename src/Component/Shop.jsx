    
function Shop() {
  return (
    <div>
     {/* breadcrumb start */}
    <div className="container-fluid">
        <div className="row px-xl-5">
             <div className="col-lg-12">
                <div className="breadcrumb bg-white mb-3 p-3">
                    <a href="#" className="breadcrumb-item nav-link text-dark aa">Home</a>
                    <a href="#" className=" breadcrumb-item text-dark aa">Shop</a>
                    <span className="breadcrumb-item active text-dark">Shop list</span>
                </div>
             </div>
        </div>
    </div>
    {/* shop start */}
    <div className="container-fluid">
        <div className="row px-xl-5">         
            <div className="col-lg-3 col-md-4">
               <div className="filterby price">
                <h5 className="text-uppercase mb-3">Filter by price</h5>
                <hr/>
                <div className="bg-white p-4 mb-3">
                   <form action="">
                      <div className=" d-flex justify-content-between mb-3">
                          <div>
                              <input type="checkbox" className="custom-contorl-input"/>
                          <label >All Price</label>
                          </div>
                          <span className="border font-light">1000</span>
                      </div>
                      <div className=" d-flex justify-content-between mb-3">
                          <div>
                              <input type="checkbox" className="custom-contorl-input"/>
                          <label >$0-$100</label>
                          </div>
                          <span className="border font-light">150</span>
                      </div>
                      <div className=" d-flex justify-content-between mb-3">
                          <div>
                              <input type="checkbox" className="custom-contorl-input"/>
                          <label >$100-$200</label>
                          </div>
                          <span className="border font-light">150</span>
                      </div>
                      <div className=" d-flex justify-content-between mb-3">
                          <div>
                              <input type="checkbox" className="custom-contorl-input"/>
                          <label >$200-$300</label>
                          </div>
                          <span className="border font-light">246</span>
                      </div>
                      <div className=" d-flex justify-content-between mb-3">
                          <div>
                              <input type="checkbox" className="custom-contorl-input"/>
                          <label >$300-$400</label>
                          </div>
                          <span className="border font-light">159</span>
                      </div>
                      <div className=" d-flex justify-content-between mb-3">
                          <div>
                              <input type="checkbox" className="custom-contorl-input"/>
                          <label >$400-$500</label>
                          </div>
                          <span className="border font-light">191</span>
                      </div>
                   </form> 
  
                </div>
              </div>
              <div className="filter by color">
                <h5 className="text-uppercase mb-3">Filter by color</h5>
                <hr/>
                <div className="bg-white p-4 mb-3">
                   <form action="">
                      <div className=" d-flex justify-content-between mb-3">
                          <div>
                              <input type="checkbox" className="custom-contorl-input"/>
                          <label >All color</label>
                          </div>
                          <span className="border font-light">1000</span>
                      </div>
                      <div className=" d-flex justify-content-between mb-3">
                          <div>
                              <input type="checkbox" className="custom-contorl-input"/>
                          <label >Black</label>
                          </div>
                          <span className="border font-light">150</span>
                      </div>
                      <div className=" d-flex justify-content-between mb-3">
                          <div>
                              <input type="checkbox" className="custom-contorl-input"/>
                          <label >White</label>
                          </div>
                          <span className="border font-light">150</span>
                      </div>
                      <div className=" d-flex justify-content-between mb-3">
                          <div>
                              <input type="checkbox" className="custom-contorl-input"/>
                          <label >Red</label>
                          </div>
                          <span className="border font-light">246</span>
                      </div>
                      <div className=" d-flex justify-content-between mb-3">
                          <div>
                              <input type="checkbox" className="custom-contorl-input"/>
                          <label >Blue</label>
                          </div>
                          <span className="border font-light">159</span>
                      </div>
                      <div className=" d-flex justify-content-between mb-3">
                          <div>
                              <input type="checkbox" className="custom-contorl-input"/>
                          <label >Green</label>
                          </div>
                          <span className="border font-light">191</span>
                      </div>
                   </form> 
  
                </div>
              </div>
              <div className="filerbu size">
                <h5 className="text-uppercase mb-3">Filter by size</h5>
                <hr/>
                <div className="bg-white p-4 mb-3">
                   <form action="">
                      <div className=" d-flex justify-content-between mb-3">
                          <div>
                              <input type="checkbox" className="custom-contorl-input"/>
                          <label >All size</label>
                          </div>
                          <span className="border font-light">1000</span>
                      </div>
                      <div className=" d-flex justify-content-between mb-3">
                          <div>
                              <input type="checkbox" className="custom-contorl-input"/>
                          <label >xs</label>
                          </div>
                          <span className="border font-light">150</span>
                      </div>
                      <div className=" d-flex justify-content-between mb-3">
                          <div>
                              <input type="checkbox" className="custom-contorl-input"/>
                          <label >s</label>
                          </div>
                          <span className="border font-light">150</span>
                      </div>
                      <div className=" d-flex justify-content-between mb-3">
                          <div>
                              <input type="checkbox" className="custom-contorl-input"/>
                          <label >M</label>
                          </div>
                          <span className="border font-light">246</span>
                      </div>
                      <div className=" d-flex justify-content-between mb-3">
                          <div>
                              <input type="checkbox" className="custom-contorl-input"/>
                          <label >L</label>
                          </div>
                          <span className="border font-light">159</span>
                      </div>
                      <div className=" d-flex justify-content-between mb-3">
                          <div>
                              <input type="checkbox" className="custom-contorl-input"/>
                          <label >Xl</label>
                          </div>
                          <span className="border font-light">191</span>
                      </div>
                   </form>
  
                </div>
              </div>
              </div>
              <div className="col-lg-9 col-md-8">
               <div className="row pb-3">
                <div className="col-12 pb-3">
                    <div className="select-sec d-flex justify-content-between">
                        <div className="icon">
                            <button className="btn btn-light">
                                <i className="fa fa-th-large"></i></button>
                                <button className="btn btn-light text-dark ms-1">
                                    <i className="fa fa-bars"></i>
                                </button>
                        </div>
                        <div className="dpdown d-flex">
                            <div className="dropdown">
                                <button className="btn bg-white dropdown-toggle" data-bs-toggle="dropdown">Shorting</button>
                                 <ul className="dropdown-menu">
                                     <li className="dropdown-item">latest</li>
                                     <li className="dropdown-item">Popularity</li>
                                     <li className="dropdown-item">Best Rating</li>
                                 </ul>
                             </div>
                             <div className="dropdown">
                                 <button className="btn bg-white dropdown-toggle ms-2" data-bs-toggle="dropdown">Showing</button>
                                  <ul className="dropdown-menu">
                                      <li className="dropdown-item">10</li>
                                      <li className="dropdown-item">20</li>
                                      <li className="dropdown-item">30</li>
                                  </ul>
                              </div>
                        </div>
                    </div>
                   
                   
                </div>
                <div className="col-lg-4 col-md-6 mb-3">
                    <div className="card ">
                        <img className="w-100 efz" src="image/product-1.jpg" alt=""/>
                        <div className="card-body bg-light">
                            <h5 className="text-center aa">Product name goes Here</h5>
                            <h5 className="text-center">$123.00 <span className="text-danger"><del>$300</del></span></h5>
                            <div className="d-flex align-items-center justify-content-center mb-1">
                                <small className="fa fa-star text-warning me-1"></small>
                                <small className="fa fa-star text-warning me-1"></small>
                                <small className="fa fa-star text-warning me-1"></small>
                                <small className="fa fa-star text-warning me-1"></small>
                                <small className="fa fa-star text-warning me-1"></small>
                                <small>(99)</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-3">
                    <div className="card ">
                        <img className="w-100 efz" src="image/product-2.jpg" alt=""/>
                        <div className="card-body bg-light">
                            <h5 className="text-center aa">Product name goes Here</h5>
                            <h5 className="text-center">$123.00 <span className="text-danger"><del>$300</del></span></h5>
                            <div className="d-flex align-items-center justify-content-center mb-1">
                                <small className="fa fa-star text-warning me-1"></small>
                                <small className="fa fa-star text-warning me-1"></small>
                                <small className="fa fa-star text-warning me-1"></small>
                                <small className="fa fa-star text-warning me-1"></small>
                                <small className="fa fa-star text-warning me-1"></small>
                                <small>(99)</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-3">
                    <div className="card ">
                        <img className="w-100 efz" src="image/product-3.jpg" alt=""/>
                        <div className="card-body bg-light">
                            <h5 className="text-center aa">Product name goes Here</h5>
                            <h5 className="text-center">$123.00 <span className="text-danger"><del>$300</del></span></h5>
                            <div className="d-flex align-items-center justify-content-center mb-1">
                                <small className="fa fa-star text-warning me-1"></small>
                                <small className="fa fa-star text-warning me-1"></small>
                                <small className="fa fa-star text-warning me-1"></small>
                                <small className="fa fa-star text-warning me-1"></small>
                                <small className="fa fa-star text-warning me-1"></small>
                                <small>(99)</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-3">
                    <div className="card ">
                        <img className="w-100 efz" src="image/product-4.jpg" alt=""/>
                        <div className="card-body bg-light">
                            <h5 className="text-center aa">Product name goes Here</h5>
                            <h5 className="text-center">$123.00 <span className="text-danger"><del>$300</del></span></h5>
                            <div className="d-flex align-items-center justify-content-center mb-1">
                                <small className="fa fa-star text-warning me-1"></small>
                                <small className="fa fa-star text-warning me-1"></small>
                                <small className="fa fa-star text-warning me-1"></small>
                                <small className="fa fa-star text-warning me-1"></small>
                                <small className="fa fa-star text-warning me-1"></small>
                                <small>(99)</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-3">
                    <div className="card ">
                        <img className="w-100 efz" src="image/product-5.jpg" alt=""/>
                        <div className="card-body bg-light">
                            <h5 className="text-center aa">Product name goes Here</h5>
                            <h5 className="text-center">$123.00 <span className="text-danger"><del>$300</del></span></h5>
                            <div className="d-flex align-items-center justify-content-center mb-1">
                                <small className="fa fa-star text-warning me-1"></small>
                                <small className="fa fa-star text-warning me-1"></small>
                                <small className="fa fa-star text-warning me-1"></small>
                                <small className="fa fa-star text-warning me-1"></small>
                                <small className="fa fa-star text-warning me-1"></small>
                                <small>(99)</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-3">
                    <div className="card ">
                        <img className="w-100 efz" src="image/product-6.jpg" alt=""/>
                        <div className="card-body bg-light">
                            <h5 className="text-center aa">Product name goes Here</h5>
                            <h5 className="text-center">$123.00 <span className="text-danger"><del>$300</del></span></h5>
                            <div className="d-flex align-items-center justify-content-center mb-1">
                                <small className="fa fa-star text-warning me-1"></small>
                                <small className="fa fa-star text-warning me-1"></small>
                                <small className="fa fa-star text-warning me-1"></small>
                                <small className="fa fa-star text-warning me-1"></small>
                                <small className="fa fa-star text-warning me-1"></small>
                                <small>(99)</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-3">
                    <div className="card ">
                        <img className="w-100 efz" src="image/product-7.jpg" alt=""/>
                        <div className="card-body bg-light">
                            <h5 className="text-center aa">Product name goes Here</h5>
                            <h5 className="text-center">$123.00 <span className="text-danger"><del>$300</del></span></h5>
                            <div className="d-flex align-items-center justify-content-center mb-1">
                                <small className="fa fa-star text-warning me-1"></small>
                                <small className="fa fa-star text-warning me-1"></small>
                                <small className="fa fa-star text-warning me-1"></small>
                                <small className="fa fa-star text-warning me-1"></small>
                                <small className="fa fa-star text-warning me-1"></small>
                                <small>(99)</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-3">
                    <div className="card ">
                        <img className="w-100 efz" src="image/product-8.jpg" alt=""/>
                        <div className="card-body bg-light">
                            <h5 className="text-center aa">Product name goes Here</h5>
                            <h5 className="text-center">$123.00 <span className="text-danger"><del>$300</del></span></h5>
                            <div className="d-flex align-items-center justify-content-center mb-1">
                                <small className="fa fa-star text-warning me-1"></small>
                                <small className="fa fa-star text-warning me-1"></small>
                                <small className="fa fa-star text-warning me-1"></small>
                                <small className="fa fa-star text-warning me-1"></small>
                                <small className="fa fa-star text-warning me-1"></small>
                                <small>(99)</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-2">
                    <div className="card ">
                        <img className="w-100 efz" src="image/product-9.jpg" alt=""/>
                        <div className="card-body bg-light">
                            <h5 className="text-center aa">Product name goes Here</h5>
                            <h5 className="text-center">$123.00 <span className="text-danger"><del>$300</del></span></h5>
                            <div className="d-flex align-items-center justify-content-center mb-1">
                                <small className="fa fa-star text-warning me-1"></small>
                                <small className="fa fa-star text-warning me-1"></small>
                                <small className="fa fa-star text-warning me-1"></small>
                                <small className="fa fa-star text-warning me-1"></small>
                                <small className="fa fa-star text-warning me-1"></small>
                                <small>(99)</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 mt-2">
                    <nav>
                        <ul className=" pagination justify-content-center">
                            <li className="page-item disabled">
                                <a href="#" className="page-link">previous</a>
                            </li>
                            <li className="page-item active">
                                <a href="#" className="page-link">1</a>
                            </li>
                            <li className="page-item">
                                <a href="#" className="page-link">2</a>
                            </li>
                            <li className="page-item">
                                <a href="#" className="page-link">3</a>
                            </li>
                            <li className="page-item">
                                <a href="#" className="page-link">Next</a>
                            </li>
                        </ul>
                    </nav>
                </div>
               </div>
              </div>
        </div>
        </div>

    </div>
  )
}

export default Shop