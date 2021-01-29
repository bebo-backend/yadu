
import PropTypes from 'prop-types'
import Link from 'next/link'
import React,{ useState } from 'react';


const RegisterForm = ({ errorMessage, onSubmit,onChange=f=>f,load=false }) => {
  
  const [account, setAccount] = useState('User');
  const button = (content="User")=>{

const active = account == content && 'active';

    return 		<label className={"btn "+active}>
    <input type="radio" name="options" id="admin" value={content}  />
    <div className="icon">
      
      {content==="Agent" ? <img src="vendors/images/briefcase.svg" className="svg" alt="" />:
      <img src="vendors/images/person.svg" className="svg" alt="" />
  }
  </div>
    <span>I'm </span>
    {content}
  </label>
  }


 
  
  return (
  <div className="bg-white login-wrap d-flex align-items-center flex-wrap justify-content-center">
		<div className="container">
			<div className="row align-items-start">
				<div className="col-md-6 col-lg-7 mb-4">
        <h1 className="text-center mt-1 show-laptop" style={{lineHeight:'50px'}} > Sign up to list your product for sell, rent and exchange.</h1>
					<img className="show-laptop" src="vendors/images/register-page-img.png" alt="" />

      
				</div>


				<div className="col-md-6 col-lg-5">


					<div className="login-box bg-white box-shadow border-radius-10">
						<div className="login-title">
							<h2 className="text-center text-dark">Yadu Register...</h2>
						</div>


            
						<form>
							<div className="select-role">
		
							</div>


              

<div className="input-group custom">
								<input type="text"  className="form-control form-control-lg" name="fullname" placeholder="Business or Full name" onChange={onChange} />
								<div className="input-group-append custom">
									<span className="input-group-text">
                    <i className="icon-copy dw dw-user1"></i></span>
								</div>
							</div>

							{errorMessage && errorMessage.fullname && <div className="alert alert-danger" role="alert"> {errorMessage.fullname} </div> }



							<div className="input-group custom">
								<input type="text" className="form-control form-control-lg" name="email" placeholder="Enter your e-mail" onChange={onChange} />
								<div className="input-group-append custom">
									<span className="input-group-text"><i className="icon-copy fe fe-mail"></i></span>
								</div>
							</div>
							{errorMessage && errorMessage.email && <div className="alert alert-danger" role="alert"> {errorMessage.email} </div> }

							<div className="input-group custom">
								<input type="text" className="form-control form-control-lg" name="phone" placeholder="Phone number" onChange={onChange} />
								<div className="input-group-append custom">
									<span className="input-group-text"><i className="icon-copy fe fe-phone"></i></span>
								</div>
							</div>
							{errorMessage && errorMessage.phone && <div className="alert alert-danger" role="alert"> {errorMessage.phone} </div> }

							<div className="input-group custom">
								<input type="password" name="password" className="form-control form-control-lg" placeholder="**********" onChange={onChange} />
								<div className="input-group-append custom">
									<span className="input-group-text"><i className="dw dw-padlock1"></i></span>
								</div>
							</div>

							{errorMessage && errorMessage.password && <div className="alert alert-danger" role="alert"> {errorMessage.password} </div> }
						

						  <div className="form-group">
						
							<textarea onChange={onChange} name="about" className="form-control my-4 p-4" rows={8} placeholder="Write about business or account." ></textarea>
						</div>



							<div className="form-group my-4 py-2">
																<div className="custom-control custom-checkbox mb-5">
																	<input type="checkbox" className="custom-control-input" id="customCheck1-1"/>
																	<span className="custom-control-label weight-400 text-success" for="customCheck1-1">I agree to receive notification emails</span>
																</div>
															</div>
							<div className="row">
								<div className="col-sm-12">
									<div className="input-group mb-0">
										{/* <!--
											use code for form submit
											<input className="btn btn-primary btn-lg btn-block" type="submit" value="Sign In"/>
										--> */}
										<a className="btn btn-primary btn-lg btn-block text-white"
										 onClick={onSubmit}>Create Account 
										 	{load &&	
											 <span className="spinner-grow spinner-grow-sm mx-3" role="status" >
												 </span>}</a>
								

									</div>
									<div className="font-16 weight-600 pt-6 pb-10 text-center" data-color="#707373">OR</div>
									<div className="input-group mb-0">
                    <Link href="/login">
										<a className="btn btn-dark btn-lg btn-block" href="/login">
                    You already have an account ? Log in</a>
                      </Link>
									</div>
								</div>
							</div>
						</form>
					</div>




				</div>
			</div>
		</div>
	</div>

)
                  }

export default RegisterForm

RegisterForm.propTypes = {
  errorMessage: PropTypes.string,
  onSubmit: PropTypes.func,
}
