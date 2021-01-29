import React, {useState} from 'react'

import {useRouter} from 'next/router'
import Link from 'next/link'

import axios from 'axios'
import gistfile1 from './contrib/gistfile1'

import SearchComponent,{bigSearchComponent} from './searchComponent'





 const Search = ({orientation="row"}) => {
const [minRange,setMinRange] = useState(100);
const [maxRange,setMaxRange] = useState(10000);

const [state,setMoreState] = useState(false);
const router = useRouter()

const [status,setStatus] = useState('For Rent');

const [search, setSearch] = useState("")

const [filter, setSearchFilter] = useState('')

const setFilter=(data)=> setSearchFilter(data)


const housingType = ["Apartment","Office","House","Hotel","Restaurant","Rooms","Warehouse"]
const option = (value)=>{

	return <option value={value}>{value}</option>
}


const change=(e)=>{


 // console.log(e.target.name," : ", e.target.value);


setStatus(e.target.value)

// const    data = {
//       ...searchForm,
//       [e.target.name]:e.target.value
//     }
  
// console.log(data);
  
      
//       setSearchForm(data)


}

const submitFormUpload= async ()=>{


if (search){


 const postData = {status,search_data:search,searchFilter:filter,minRange,maxRange}

   let string_url=""

  Object.keys(postData).map(obj=>{

  string_url+=obj+'='+postData[obj]+'&'

})



  
router.push("/search/?"+string_url)

      

}
 		
   
  
  }



    return (  
    <>
<section className="p-0 card-box mb-1 " id="bg-img" style={{borderRadius:'0px'}}   >

<div className="py-3 info-data" style={{background: 'rgba(61, 32, 107, 0.72)'}} >


<h1 className="  px-2 py-3 text-white font-weight-bold text-center my-3 " >
Find things you'll love. Support independent sellers. </h1>

<h3 className=" text-center  px-4  font-weight-bolder text-uppercase " style={{color:"lightgreen",borderLeft:'4px solid red'}}>
buy smarter, sell faster. </h3>



<div className="text-center mb-2 
 ">

<Link href="/submitproperty">
<button type="button" className="btn  mx-4 py-2 mb-4 mt-2 btn-warning" style={{color:"#ffffff"}}><i className="icon-copy fa fa-plus-circle mr-1" aria-hidden="true"></i> SELL ON YADU</button>
</Link>

      </div>  
      </div>  



</section>

              
</>
);
}

export default Search;
