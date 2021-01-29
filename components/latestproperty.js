import React, {useState} from 'react'
import PropertyData from "../components/propertydata"
// import {useRouter} from 'next/router'






 const LatestProperty = () => {

const [search,setSearch] = useState('All');
const [filter,setFilter] = useState('condition');

// const router = useRouter()

const getTabData = (e,filterData="status")=>{
e.preventDefault()
setFilter(filterData)
	setSearch(e.target.text)
}

    return (  
    

<section className=" bg-white card-box " style={{marginTop:'2px',paddingTop:'8px',paddingBottom:'8px'}}>
        <div className="container-fluid ml-2  ">
            <div className="row my-4 py-8">
                <div className="col-lg-7 mt-6">
                    <div className="section-title mb-2">
                        <h6 className=" font-weight-bold  px-4 py-2 text-black" style={{borderLeft:'4px solid rgb(0, 123, 181)'}}>Recommended for you</h6>
                    </div>
                </div>
                <div className="col-lg-5 ">

              
               


	<div className="height-100-p overflow-hidden">

	
	<div className="profile-tab height-100-p">
	  <div className=" height-100-p property">
		  <ul className="nav nav-tabs customtab mr-4" role="tablist">
	  <li className="nav-item">
		  <a className="nav-link active p-0 text-center" data-toggle="tab" role="tab" onClick={getTabData}>All</a>
	  </li>

	  <li className="nav-item">
		  <a className="nav-link p-0 text-center" data-toggle="tab" role="tab" onClick={e=>getTabData(e,'condition')} >New</a>
	  </li>
	  <li className="nav-item">
		  <a className="nav-link p-0 text-center" data-toggle="tab" role="tab" onClick={e=>getTabData(e,'condition')}>Used</a>
	  </li>
	  <li className="nav-item">
		  <a className="nav-link p-0 text-center" data-toggle="tab" role="tab" onClick={getTabData}>Sale</a>
	  </li>
	  <li className="nav-item">
		  <a className="nav-link p-0 text-center" data-toggle="tab" role="tab" onClick={getTabData}>Rental</a>
	  </li>
	  <li className="nav-item">
		  <a className="nav-link p-0 text-center" data-toggle="tab" role="tab" onClick={getTabData}>Exchange</a>
	  </li>
  </ul>



</div></div></div>
				
						
				

                </div>
                </div>

               
                </div>

				<PropertyData search_data={search} query={`searchfilter=${filter}`}/>   

                </section>

);
}

export default LatestProperty;
