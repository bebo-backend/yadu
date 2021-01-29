import React from "react"


const Achieve = () => {
    return ( 


      <section id="counts" className="counts">
      <div className="container">

      <div className="text-center title">
          <h3>What we have achieved so far</h3>
          
        </div>

        <div className="row">
          <div className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-xl-start" data-aos="fade-right" data-aos-delay="150">
            <img src="assets/img/counts-img.svg" alt="" className="img-fluid" />
          </div>

          <div className="col-xl-7 d-flex align-items-stretch pt-4 pt-xl-0" data-aos="fade-left" data-aos-delay="300">
            <div className="content d-flex flex-column justify-content-center">
              <div className="row">
                <div className="col-md-6 d-md-flex align-items-md-stretch">
                  <div className="count-box">
                    <i className="icofont-simple-smile"></i>
                    <span data-toggle="counter-up">3</span>
                    <p><strong>Happy Clients</strong> </p>
                  </div>
                </div>

                <div className="col-md-6 d-md-flex align-items-md-stretch">
                  <div className="count-box">
                    <i className="icofont-document-folder"></i>
                    <span data-toggle="counter-up">2</span>
                    <p><strong>Projects</strong> </p>
                  </div>
                </div>

                <div className="col-md-6 d-md-flex align-items-md-stretch">
                  <div className="count-box">
                    <i className="icofont-clock-time"></i>
                    <span data-toggle="counter-up">2</span>
                    <p><strong>Years of experience</strong></p>
                  </div>
                </div>

                <div className="col-md-6 d-md-flex align-items-md-stretch">
                  <div className="count-box">
                    <i className="icofont-award"></i>
                    <span data-toggle="counter-up">3</span>
                    <p><strong>Hard workers</strong> </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>



);
}


export default Achieve