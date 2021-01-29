import React, {useState} from 'react'
import Link from 'next/link';
import Layout from "../components/contrib/layout"
import {NextSeo} from 'next-seo'

import Agents from "../components/agents"

import {useRouter} from 'next/router'
import SearchComponent from '../components/searchComponent'
import SearchFilter from '../components/search'
import SortComponent from '../components/sortcomponent'
import PropertyData from "../components/propertydata"
import Filter from "../components/filter"
import gistfile1 from '../components/contrib/gistfile1'
import Category from "../components/category-menu"


 const main = () => {


const [search, setSearch] = useState("")
const [sort, setSort] = useState([])
const [filter, setSearchFilter] = useState('')

const setFilter=(data)=> setSearchFilter(data)


const route = useRouter()

const {search_data,...restQuery} = route.query

const {searchfilter:searchFilter} = route.query


const sortedData = (data)=>{

	setSortData(data)
}

const queryToString=  (filter)=>{


  
	if (filter){
return "searchfilter="+filter

	} else {
    
    let string_url=""
  
    
  
    Object.keys(restQuery).map(obj=>{
  
    string_url+=obj+'='+route.query[obj]+'&'
  
  })
  
//   console.log(string_url);

  return string_url
}
  
                      
     
    
    }


const returnFilter = (filter)=>{


  const propertyType = ["Apartment","Office","House","Hotel","Restaurant","Rooms","Warehouse"]
  const status = ["For Sale","For Rent","For Exchange"]
const condition = ["New","Used"]
	return  <> <a href="#" id="dashboardDropdown" className="dropdown-toggle nav-link p-0 mx-3" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <span className="" style={{color:'black',fontWeight:'bold'}}>{filter}</span><span className="sr-only">(current)</span>
                </a>
                <div className="dropdown-menu" aria-labelledby="dashboardDropdown">

                { filter == 'Category' && propertyType.map((value,key)=>(

<Category />

                  ))}


           

                   { filter == 'State' &&  gistfile1 && Object.values(gistfile1).map((e,index)=>(
  <>
    
     <a className="nav-link  " key={index} onClick={g=>{
    g.preventDefault();
     setSearch(e.state.name)
     setFilter(filter)
  }} >
                    <span className="ml-1">{e.state.name}
                    </span></a>


</>



))

}



                   { filter == 'Status' &&  status && Object.values(status).map((value,index)=>(
 
    
     <a className="nav-link  " key={index} onClick={e=>{
    e.preventDefault();
     setSearch(value)
     setFilter(filter)

  }} >
                    <span className="ml-1">{value}
                    </span></a>






))

}







       { filter == 'Condition' &&  condition && Object.values(condition).map((value,index)=>(
 
    
     <a className="nav-link  " key={index} onClick={e=>{
    e.preventDefault();
     setSearch(value)
     setFilter(filter)
  }} >
                    <span className="ml-1">{value} 
                    </span></a>

))

}




{ filter == 'City' &&  gistfile1 && Object.values(gistfile1).map((e,index)=>(
  <>
    
     <span className="nav-link font-weight-bold " key={index} onClick={e=>{
    e.preventDefault();
    
  }} >
                    <span className="ml-1">{e.state.name}
                    </span></span>

           {Object.values(e.state.locals).map((city,index)=>(

    
  <a className="nav-link  " key={index} onClick={e=>{
    e.preventDefault();
     setSearch(city.name)
     setFilter(filter)
  }} >
                    <span className="ml-1">{city.name}
                    </span></a>

))}




</>



))

}



                  
                  </div>
           </>       

}



    

   return (  
        <Layout title={"Search - "+search?search:search_data} >

    <NextSeo title={search?search:search_data} titleTemplate='%s | yadu.ng'
description={"Search - "+search?search:search_data} />




<main id="main" className="pt-2 mb-4" >






                <div className=" bg-white m-0 pt-4">
					<div className="row my-0" >
				
<div className=" col-sm-12 col-lg-3 col-xl-3 " style={{border:'0px solid'}}>

<div className="show-laptop px-4">
<Filter setSearch={setSearch}  setFilter={setFilter} />

</div>

</div>


<div className=" col-sm-12  col-lg-9 col-xl-9 px-4">


<div className="row">


<div className="col-md-10">

              <nav aria-label="breadcrumb" role="navigation">

                <ol className="breadcrumb px-2">
                  <li className="breadcrumb-item btn-link"><Link href="/">
                  <a href="/" style={{color:'#1890ff'}} >Home</a></Link></li>

                   {searchFilter == "type" &&   <li className="breadcrumb-item btn-link">
                    <Link href={`/search?search_data=all`}>
                  <a href="/" style={{color:'#1890ff'}} >All categories</a></Link>

                  </li>
                 

                  }

                    <li className="breadcrumb-item text-muted btn-link ">
                    Results for {search_data}</li>
                   

                
                </ol>

                
              </nav>



</div>

<div className="col-md-2">

<SortComponent  setSort={setSort}  />
</div>


</div>




<PropertyData search_data={search?search:search_data} sort={sort} query={queryToString(filter)} isCol={true} noPadding={true}  />


</div>

</div>


	 


</div>

    </main>

</Layout>

);
}

export default main
