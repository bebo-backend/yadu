import React, {useState} from 'react'

import {useRouter} from 'next/router'

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


 const postData = {search_data:search,searchFilter:filter}

   let string_url=""

  Object.keys(postData).map(obj=>{

  string_url+=obj+'='+postData[obj]+'&'

})



  
router.push("/search/?"+string_url)

      

}
 		
   
  
  }



    return (  
    <>

<div className="mt-2">
<SearchComponent height='40px' setSearch={setSearch} filter={true} setFilter={setFilter} searchFilter={filter} onClickFunc={submitFormUpload} />
</div>

</>
);
}

export default Search;
