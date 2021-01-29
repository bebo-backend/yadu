import { useState } from 'react'

import Layout from './contrib/layout'
import axios from 'axios'
import useSWR from 'swr'
import { useRouter } from 'next/router'
import Link from 'next/link'
import {GrpPics,CarouselImage,Details,Message,Reviews,Agents,SideDetails} from './DetailComponents'
import useUser from '../lib/useUser'


// import {CarouselImage, Detail, TopAgents, Agent, Reviews,Message} from './DetailComponents'


const ViewDetail = ({title="",id="5664",type="All categories"}) => {

   
    const router = useRouter()
  
     const {user} = useUser()

     const [reviewPage,setPage] = useState(1)
     const [step, setStep] = useState(0)

  
const {data:property,mutate:mutateProperty} = useSWR(()=>"/api/actions/view/"+String(id),axios)

const loadNextReview=()=> setPage(property.data.property.prevPage)
const loadPrevReview=()=> setPage(property.data.property.prevPage)


const prevStep = ()=>{ 
	if(step > 0 ) {
		setStep(step - 1)
	} else {
setStep(property.data.detail.images.length )

	}





	}
const nextStep = ()=> {
	if( step < property.data.detail.images.length  ){


	 setStep(step + 1)

	} else {

		setStep(0)
	}

	}

if(!property){

	return    <div className="col-12 mb-30">
    <div className="pd-20 card-box height-100-p width-100-p ">

    <img src="/vendors/images/new-loader.gif" alt="" width='60' />
    
    <div className="profile-info">
            <h5 className="mb-20 h5 text-blue">Getting Data ...</h5>
            </div>
    </div>
    </div>
} else  return (
    <>


     {property && <>
     
            <div className="mt-2 detail-bcrumb">
					<div className="row mt-3" >
						<div className=" col-sm-12">
						
							<nav aria-label="breadcrumb" role="navigation">
								<ol className="breadcrumb px-2">
									<li className="breadcrumb-item">
									<Link href="/"><a href="/"> <i className="icon-copy dw dw-house1 mx-2 text-uppercase"></i> Home</a></Link></li>
									<li className="breadcrumb-item active " aria-current="page">

									{property.data.detail ? property.data.detail.type :type}</li>
									<li className="breadcrumb-item active text-muted" aria-current="page">{title}</li>
								</ol>
							</nav>
						</div>
					
					</div>

                  
				</div>



<div className="">

<div className="row mb-4 bg-white py-4 mt-0 ">


<div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 ">

<div className="row ">

<div className="col-xl-2 col-lg-2 col-md-2 col-sm-12 m-0 p-0 text-center group-pic show-laptop">
{ property.data.detail &&
<GrpPics  images={property.data.detail && property.data.detail.images} step={step} />
}
</div>


<div className="col-xl-10 col-lg-10 col-md-10 col-sm-12 m-0 pl-0 pr-1 carousel-pic ">

{ property.data.detail &&
<CarouselImage images={property.data.detail.images} prevStep={prevStep} nextStep={nextStep} />
}

<div className="show-mobile mt-4 py-2">

{ property.data.detail &&
 <SideDetails 
	data={property.data.detail} user={property.data.owner} mutateProperty={mutateProperty} />

}
</div>

{ property.data.detail && 
<Details data={property.data.detail} user={property.data.owner} mutateProperty={mutateProperty} />
}

{ property.data.detail &&
<Reviews  id={property.data.detail._id} user={property.data.owner} />
}

</div>


</div>



</div>



<div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 ">
<div className="show-laptop mt-4">

<SideDetails data={property.data.detail} user={property.data.owner} mutateProperty={mutateProperty} />
</div>
<div className="w-full mt-4">
					
<h4 className="  px-4 py-2 font-weight-bold text-black" style={{borderLeft:'4px solid gold'}}>TOP AGENTS</h4>
					
<Agents />
						</div> 

</div>

</div>









</div>

             </>       }

    </>
  )
                    
}

export default ViewDetail