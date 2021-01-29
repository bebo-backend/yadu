import { useState } from 'react'
import useUser from '../../lib/useUser'
import Layout from '../../components/contrib/layout'
import {NextSeo} from 'next-seo'
import axios from 'axios'
import { useRouter } from 'next/router'
import Link from 'next/link'
import {ProfileDetail, ProfileProperty, ProfileSetting} from './profiledetail'

const Success = () => {
 
    const {user, mutateUser } = useUser({
        redirectTo: '/login',
        redirectIfFound: false,
      })

	 

  return (
    <Layout title={user?.email}>

  <NextSeo noindex={true} />


        {user && <>
     

      <div className="mt-4">
					<div className="row mt-3 mx-r" >
						<div className=" col-sm-12">
						
					<nav aria-label="breadcrumb" role="navigation">
								<ol className="breadcrumb px-2">
									<li className="breadcrumb-item"><Link href="/">
									<a href="/"> <i className="icon-copy dw dw-house1 mx-2 text-uppercase"></i>  Home</a>
									</Link></li>
									<li className="breadcrumb-item active" aria-current="page">{user.email}</li>
								</ol>
							</nav>
						</div>
					
					</div>

                  
				</div>


           



<div className="row mx-2 profile-data">

<div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 mb-30">
	<div>
<ProfileDetail email={user.email} />
</div>

</div>



<div className="col-xl-9 col-lg-9 col-md-9 col-sm-12 mb-30">
					




<ProfileProperty email={user.email} user />
						</div>
</div>



      </>  }
    </Layout>
  )
}

export default Success