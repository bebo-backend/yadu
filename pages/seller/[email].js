import { useState } from 'react'
import useUser from '../../lib/useUser'
import Layout from '../../components/contrib/layout'

import axios from 'axios'
import { useRouter } from 'next/router'
import Link from 'next/link'
import {ProfileDetail} from '../dashboard/profiledetail'

import SearchComponent from '../../components/searchComponent'
import SortComponent from '../../components/sortcomponent'
import PropertyData from '../../components/propertydata'
import {Message } from '../../components/DetailComponents'
import {NextSeo} from 'next-seo'


const Seller = () => {
 
 const router = useRouter()

  const {email} = router.query

const [sort, setSort] = useState([])
const [user, setUser] = useState()


  const sortedData = (data)=>{

	setSort(data)
}
	 
const setUserCallback = (data)=>{

	setUser(data)
}
	 

  return (
    <Layout title={email}>

<NextSeo title={"seller - "+email} titleTemplate='%s | yadu'
description={"Meet this seller "+email+ " on yadu"} />


        {email && <>
     

      <div className="mt-4">
					<div className="row mt-3 mx-r" >
						<div className=" col-sm-12">
						
					<nav aria-label="breadcrumb" role="navigation">
								<ol className="breadcrumb px-2">
									<li className="breadcrumb-item"><Link href="/">
									<a href="/"> <i className="icon-copy dw dw-house1 mx-2 text-uppercase"></i>  Home</a>
									</Link></li>
									<li className="breadcrumb-item active" aria-current="page">{email}</li>
								</ol>
							</nav>
						</div>
					
					</div>

                  
				</div>


           



<div className="row mx-2 profile-data">

<div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 mb-30">
	<div>
<ProfileDetail email={email} edit={false} callback={setUserCallback} />
</div>

</div>



<div className="col-xl-9 col-lg-9 col-md-9 col-sm-12 mb-30 bg-white p-4 card-box">

<div className="my-3">
<div className="row">

<h6 className="font-weight-bold text-uppercase text-primary col-11 ">about {user ? user.fullname : email} </h6>
<div className="file-action col-1 text-right ">
                          <a  className="icon-copy dw dw-message text-secondary fe-24" data-toggle="modal" data-target="#modal-message"></a>
                          </div>


                          </div>


         

<hr />
{user && user.about ? 

<pre className="pd-20 " style={{fontSize:'16px'}}>
									<p className="wrap" style={{lineHeight:'25px'}}>
										{user.about}
										</p>
										</pre>:
<pre className="pd-20 " >  No description provided for {user && user.fullname} </pre>}

</div>
					
<div className="text-right my-3">
<SortComponent  setSort={setSort}  />

</div>

<div>
<h6 className="font-weight-bold text-uppercase text-primary ">Upload product(s)  </h6>
<hr />

</div>

<PropertyData search_data={email} 
sort={sort} query={"searchfilter=Agents"}  isCol={true} noPadding={true}  />



						</div>
</div>




      </>  }

       <div className="modal fade" id="modal-message" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header pd-5">
<h6 className="p-4 text-uppercase">
                          SEND MESSAGE
                        </h6>
                    </div>

                      <div className="modal-body pd-5">
                       <Message user={user} cardBox={false} />
                      </div>
                      <div className="modal-footer">
                        
                        <button type="button" className="btn btn-primary" data-dismiss="modal"><i className="icon-copy dw dw-exit mx-2"></i>Close</button>
                      </div>
                    </div>
                  </div>

</div>


    </Layout>
  )
}

export default Seller