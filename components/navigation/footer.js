import React from 'react'
import Link from 'next/link'


const Footer = () => {


return (

    <>
  <footer className="footer-section my-0 bg-dark shadow-lg pb-2">
        <div className="container">
            <div className="row py-4 px-2">
                <div className="col-lg-4 col-md-6">
                    <div className="fs-about">
                        <div className="fs-logo">
                            <Link href="/">
          <a className="navbar-brand  mr-0" href="/">
                 <p className="mt-3 ml-2 text-white " style={{color:'white'}} > 
          <i className="icon-copy dw dw-hurricane ml-4 mr-2 font-weight-bold "  aria-hidden="true" 
           style={{fontSize:'37px'}}></i>
       <span className="font-weight-bold " >yadu </span>
          </p>
          </a>
          </Link>
                        </div>
                        <h5 className="font-16 text-white" >Got something to sell, rent or exchange ?
</h5>
                        

                        <div className="site-social pd-social my-4">
                            <a href="#" style={{background:'blue'}}><i className="fa fa-facebook"></i></a>
                            <a href="#" style={{background:'violet'}}><i className="fa fa-twitter"></i></a>
                            <a href="#" style={{background:'red'}}><i className="fa fa-youtube-play"></i></a>
                            <a href="#" style={{background:'green'}}><i className="fa fa-instagram"></i></a>
                            <a href="#" style={{background:'black'}}><i className="fa fa-pinterest-p"></i></a>
                        </div>
                    </div>
                </div>
                <span className="col-lg-2 col-sm-6">
                    <div className="fs-widget">
                        <h5 className="my-4 text-white">Help</h5>
                        <ul>
                            <li className="my-2"><a href="#">Privacy Policy</a></li>
                            <li className="my-2"><a href="#">Contact Support</a></li>
                            <li className="my-2"><a href="#">Knowledgebase</a></li>
                            <li className="my-2"><a href="#">Careers</a></li>
                            <li className="my-2"><a href="#">FAQs</a></li>
                        </ul>
                    </div>
                </span>
                <span className="col-sm-6 col-lg-2 ">
                    <div className="fs-widget">
                        <h5 className="my-4 text-white">Links</h5>
                        <ul>
                            <li className="my-2">
                            <Link href="/contact">
                            <a href="/contact">Contact</a></Link> </li>
                            <li className="my-2">
                               
                                <Link href="/submitproperty">
                                <a href="/submitproperty">Submit Listing</a>
                                </Link>
                                </li>
                            <li className="my-2">
                             
                                <Link href="/agents">
                                <a href="/agents">Seller</a>
                                </Link></li>
                            <li className="my-2">
                             
                              <Link href="/dashboard/profile">
                              <a href="/dashboard/profile">My Profile</a>
                              </Link>
                              </li>
                            <li className="my-2">
                              
                              <Link href="/register">
                              <a href="/register">Register</a>
                               </Link>
                              </li>
                                   <li className="my-2">
                             
                              <Link href="/login">
                              <a href="/login">Login</a> 
                              </Link></li>
                       
                        </ul>
                    </div>
                </span>
                <div className="col-lg-4 col-md-6">
                    <div className="fs-widget">
                        <h5 className="my-4">Newsletter</h5>
                        <p className="text-warning">Subscribe to receive our newsletter.</p>
                        <div >
                         <input type="text" className="form-control" placeholder="Enter your email"  />
                          <button type="submit" className="btn btn-primary my-2">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-text">
                <p>
  Copyright &copy;{new Date().getFullYear()} All rights reserved by Gks Inc.
</p>
            </div>
        </div>
    </footer>



  {/* <!-- End Footer --> */}


  {/* <!-- Vendor JS Files 
  
  <script src="js/jquery.min.js"></script>

    <script src="js/bootstrap.min.js"></script>

    <script src='js/jquery.stickOnScroll.js'></script>
    <script src="js/config.js"></script>

    <script src='js/select2.min.js'></script>

--> 
*/}

  


 

 


    

</>
  )
}

export default Footer