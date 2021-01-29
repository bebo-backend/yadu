
 import React  from "react"
 import Layout from "../components/contrib/layout"

 const Contacts = () => {
     return ( 
 
        <Layout title="contacts us "  >

            <main id='main' style={{'backgroundColor':'white'}}>


            <section className="breadcrumbs cta">
      <div className="container">

        <div className="d-flex justify-content-between align-items-center">
          <h2>Contact</h2>
          <ol>
            <li><a href="index.html">Home</a></li>
            <li>Contact</li>
          </ol>
        </div>

      </div>
    </section>



        
    <section className="contact" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="500">
    <div className="container">

      <div className="row">

        <div className="col-lg-6">

          <div className="row">
            <div className="col-md-12">
              <div className="info-box">
                <i className="bx bx-map"></i>
                <h3>Our Address</h3>
                <p>No 27, Adelakun, Aradagun, Olorunda LCDA, Badagry</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="info-box">
                <i className="bx bx-envelope"></i>
                <h3>Email Us</h3>
                <p>oluwamotunde@gmail.com<br />oluwamoshadrach16@yahoo.com</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="info-box">
                <i className="bx bx-phone-call"></i>
                <h3>Call Us</h3>
                <p>+234 8149913012<br/>+2347062221190</p>
              </div>
            </div>
          </div>

        </div>

        <div className="col-lg-6">
          <form action="forms/contact.php" method="post" role="form" className="php-email-form">
            <div className="form-row">
              <div className="col-md-6 form-group">
                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                <div className="validate"></div>
              </div>
              <div className="col-md-6 form-group">
                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                <div className="validate"></div>
              </div>
            </div>
            <div className="form-group">
              <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
              <div className="validate"></div>
            </div>
            <div className="form-group">
              <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
              <div className="validate"></div>
            </div>
            <div className="mb-3">
              <div className="loading">Loading</div>
              <div className="error-message"></div>
              <div className="sent-message">Your message has been sent. Thank you!</div>
            </div>
            <div className="text-center"><button type="submit">Send Message</button></div>
          </form>
        </div>

      </div>

    </div>
  </section>
  </main>

  </Layout>

);
}


export default Contacts