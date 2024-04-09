 

function Checkout() {
  return (
    <div>
       {/* breadecrumb start */}
       <div className="container-fluid">
        <div className="row px-xl-5">
            <div className="col-lg-12">
                <nav className="breadcrumb bg-white p-3 mb-3">
                    <a href="#" className="breadcrumb-item nav-link aa">Home</a>
                    <a href="#" className="breadcrumb-item nav-link aa">Shop</a> 
                    <span className="breadcrumb-item active">Cheakout</span>
                </nav>
            </div>
        </div>
    </div>
     
    {/*cheakout start */}
    <div className="container-fluid">
        <div className="row px-xl-5">
            <div className="col-lg-8">
                <h5 className="text-uppercase">Billing Address</h5>
                <hr/>
                <div className="bg-white p-4 mb-3">
                    <div className="row">
                        <div className="col-md-6">
                            <label  >First Name</label>
                            <input type="text" placeholder="John" className="form-control my-2 rounded-0"/>
                        </div>
                        <div className="col-md-6">
                            <label  >Last Name</label>
                            <input type="text" placeholder="Doe" className="form-control my-2 rounded-0"/>
                        </div>
                        <div className="col-md-6">
                            <label  >Email</label>
                            <input type="email" placeholder="Ravi@112" className="form-control my-2 rounded-0"/>
                        </div>
                        <div className="col-md-6">
                            <label  >Mobile No</label>
                            <input type="tel" placeholder="+913 127 8917" className="form-control my-2 rounded-0"/>
                        </div>
                        <div className="col-md-6">
                            <label  >Address line 1</label>
                            <input type="text" placeholder="123 street" className="form-control my-2 rounded-0"/>
                        </div>
                        <div className="col-md-6">
                            <label  >Address line 2</label>
                            <input type="text" placeholder="123 street" className="form-control my-2 rounded-0"/>
                        </div>
                        <div className="col-md-6">
                            <label  >country</label>
                            <select className="form-control rounded-0 my-2">
                                <option value="" selected>Newyork</option>
                                <option value="">Afganistan</option>
                                <option value="">India</option>
                            </select>
                        </div>
                        <div className="col-md-6">
                            <label  >City</label>
                            <input type="text" placeholder="New York" className="form-control my-2 rounded-0"/>
                        </div>
                        <div className="col-md-6">
                            <label  >State</label>
                            <input type="text" placeholder="New York" className="form-control my-2 rounded-0"/>
                        </div>
                        <div className="col-md-6">
                            <label  >ZIP Code</label>
                            <input type="text" placeholder="124" className="form-control my-2 rounded-0"/>
                        </div>
                        <div className="col-md-12">
                            <input type="checkbox"/>
                            <label   className="h6">Creat an account</label>
                        </div>
                        <div className="col-md-12">
                            <input type="checkbox"/>
                            <label   className="h6">ship to diffrent Address</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="order-section">
                    <h5 className="text-uppercase text-dark">Order Details
                        <span>
                            <hr/>
                        </span>
                    </h5>
                    <div className="bg-white p-4 mb-2">
                        <h5 className="text-dark">Product Name</h5>
                        <div className="border-bottom text-secondary">
                            <div className="d-flex justify-content-between mb-3">
                                <h6>Product Name 1</h6>
                                <h6>$150</h6>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <h6>Product Name 2</h6>
                                <h6>$150</h6>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <h6>Product Name 2</h6>
                                <h6>$150</h6>
                            </div>
                        </div>
                        <div>
                            <div className="d-flex justify-content-between my-3">
                                <h6>Subtotal</h6>
                                <h6>$150</h6>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <h6>Shipping</h6>
                                <h6>$10</h6>
                            </div>
                            <hr/>
                            <div className="d-flex justify-content-between mt-3">
                                <h5>Total</h5>
                                <h5>$160</h5>
                            </div>

                        </div>
                    </div>
                </div>
                <h5 className="text-uppercase text-dark">Payment details
                    <span>
                        <hr/>
                    </span>
                </h5>
                <div className="bg-white p-4">
                    <div>
                        <div className="mb-2">
                            <input type="radio"/>
                            <label  >Paypal</label>
                        </div>
                        <div className="mb-2">
                            <input type="radio"/>
                            <label  >Direct Cheak</label>
                        </div>
                        <div className="mb-4">
                            <input type="radio"/>
                            <label  >Bank Transfer</label>
                        </div>
                        <div className="mb-2">
                            <button type="button" className="btn btn-warning w-100 rounded-0 text-dark py-3">Place
                                Order</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </div>
  )
}

export default Checkout