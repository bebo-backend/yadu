import React, {useState} from 'react'

import {useRouter} from 'next/router'

import {Rate} from 'antd'
import {CLOUDINARY_URL} from "./contrib/config"
import {filterOptions} from './contrib/category-options'
import gistfile1 from '../components/contrib/gistfile1'
import Link from 'next/link'



 const Filter = ({setSearch=f=>f,setFilter=f=>f}) => {


const router = useRouter()


const category = ['electronics','fashion','supermarket','vehicles',
'software','healthBeauty','bussIndustry','toyHobbies',
'booksmovmus','homegarden','sportgoods','collectart','otherItem']


  const [categoryLen, setLength] = useState(8)

  const [state, setState] = useState()
  const [price, setPrice] = useState("")
  const [searchValue, setSearchValue] = useState([])
  const [priceValue, setPriceValue] = useState("Any price")
  const [customPriceValue, setCustomPriceValue] = useState("")
  const [filterValue, setFilterValue] = useState([""])
  const [customValue, setCustomValue] = useState({min:0,max:1000000})
  const [custom, setCustom] = useState(false)



  const showMoreCat= ()=>{

if(filterOptions.length > categoryLen) setLength(categoryLen*2)

  }


const hideMoreCat= ()=>{

if(categoryLen > 8) setLength(categoryLen/2)

  }


const onChange = (e)=>{

if (e.target.name === "state"){ 
  setState(e.target.value);
setFilter(e.target.name)
setSearch(e.target.value)


}

if (e.target.name === "city"){ 
  // setState(e.target.value);
setFilter(e.target.name)
setSearch(e.target.value)

}







}


const addValue = (value)=> {

setSearch(searchValue.concat([value]).join("__"))

  if (searchValue.indexOf(value) < 0) setSearchValue([...searchValue,value])

}

const removeValue = (value)=> {

setSearch(searchValue.filter(e=>e!==value).join("__"))

  setSearchValue(searchValue.filter(e=>e!==value))

}

const addFilter = (value)=> {


  if (filterValue.indexOf(value) < 0){
   setFilterValue([...filterValue,value])

setFilter(filterValue.concat([value]).join("__"))

 }

}

const removeFilter = (value)=> {

 setFilter(filterValue.filter(e=>e!==value).join("__"))

  setFilterValue(filterValue.filter(e=>e!==value))

}


const boxChange = (e,searchfilter)=>{

const value = e.target.value;

if(e.target.checked){

  addFilter(searchfilter)
  addValue(searchfilter+"-"+value)

} else {


if ( searchValue.filter(  e=>e!==searchfilter+"-"+value).filter(e=>e.indexOf(searchfilter) >=0 ).length == 0 ) removeFilter(searchfilter)

removeValue(searchfilter+"-"+value)

}

}

const customClick = (e)=>{

const min = customValue.min
const max = customValue.max
const value = `${min}to${max}`
const searchfilter = "customprice"

if (min && max){

if (max > min){
  
  addFilter(searchfilter)


setSearch(searchValue.filter(e=> e.indexOf(searchfilter+"-"+customPriceValue) < 0).concat([searchfilter+"-"+value]).join("__"))

setSearchValue([...searchValue.filter(e=>e.indexOf(searchfilter+"-"+customPriceValue) < 0),searchfilter+"-"+value])

setCustomPriceValue(value)


}


}


}






const setCustomNum = (e)=>{



const searchfilter = "customprice"


removeFilter(searchfilter)

if (e){

const value = e.target.value, name = e.target.name


   const data = {...customValue, [name]:value}

setCustomValue(data)

}



}



const removePrice= (valueToRemove="")=>{


const searchfilter="price"

  removeFilter(searchfilter)

  removeValue(searchfilter+"-"+valueToRemove)

}

const radioChange =(e,searchfilter)=>{

const value=e.target.value
const name = e.target.name



if (searchfilter =="price"){

// removePrice(value)
 removeFilter("customprice")


} 

if (value === "Custom"){

setCustom("true")

 removeFilter("price")

removeValue("price"+"-"+priceValue)



}  else {



  setCustom("false")

  setCustomNum()



setFilter(filterValue.filter(e=>e.indexOf("customprice") < 0).concat(["price"]).join("__"))

setFilterValue([...filterValue.filter(e=>e.indexOf("customprice") < 0),"price"])



setSearch(searchValue.filter(
  e=> e.indexOf(searchfilter+"-"+priceValue) < 0  ).filter(
  e=>e.indexOf("customprice") < 0).concat(
  [searchfilter+"-"+value]).join("__"))

setSearchValue([...searchValue.filter(e=>e.indexOf(searchfilter+"-"+priceValue) < 0 ),searchfilter+"-"+value])


setPriceValue(value)





}



}


const checkbox = (value,searchfilter,realValue = "")=>{

  return <span className="custom-control custom-checkbox my-1 ml-0">
  <input type="checkbox" onClick={e=>boxChange(e,searchfilter)} className="custom-control-input" id={value} value={realValue?realValue:value} name={searchfilter} />
  <label className="custom-control-label pl-0 btn-link text-dark" for={value}>{value}</label>
</span>
}

const radio = (value,searchfilter,detail="")=>{

  return   <span className="custom-control custom-radio my-1 ml-0 ">
          <input type="radio" onChange={e=>radioChange(e,searchfilter)}  value={value}  name={searchfilter}  className="custom-control-input" id={value}/>
          <label className="custom-control-label px-0  btn-link text-dark" for={value}>{value} <span className="text-muted font-14"> {detail}  </span> </label>
        </span>

}

const number = (searchfilter,placeholder="")=>{

  return   <span className="input-group custom-control custom my-1 ml-0 p-0 " style={{border:'0px solid',width:'90px'}}>
          <input min={0} style={{height:'40px'}} type="number" onChange={setCustomNum} name={searchfilter} placeholder={placeholder}  className="form-control form-control-lg" />
    
        </span>

}




    return (  
    

<section className="my-12 bg-white filter-link pl-3 ">
                
  <div>

  <Link href={`/search?search_data=all`}>
 <a className="btn-link text-secondary mb-2" style={{display:'block'}} > All categories </a>
 </Link>


<ul className="filter-list">

{filterOptions.slice(0,categoryLen).map(value=>(
 <Link key={value} href={`/search?search_data=${value}&searchfilter=type`}>
 <a className="my-2 ml-4 cursor-pointer text-dark btn-link" key={value} style={{display:'block'}} > {value}  </a> 
 </Link>))}


{filterOptions.length > categoryLen &&  <li className="btn btn-link font-15 text-dark font-weight-bold pl-0 ml-0" onClick={showMoreCat}><i className="icon-copy mx-2 fa fa-plus-square" aria-hidden="true"></i>Show more </li>}
{categoryLen > 8 && <li className="btn btn-link font-15 text-secondary font-weight-bold pl-0 ml-0" onClick={hideMoreCat}><i className="icon-copy fa fa-minus-square mx-2" aria-hidden="true"></i> Hide  </li> }


</ul>





  </div>   


    <div>

<p> Offer status </p>

{checkbox("For Sale","status")}
{checkbox("For Rent","status")}
{checkbox("For Exchange","status")}



  </div>   



<div className="my-4">
  <p> <i className="icon-copy dw dw-pin mx-2 font-weight-bold"></i> Product Location  </p>

<div className="form-group">

<select className="custom-select2 form-control text-lg" name="state" onChange={onChange}
style={{width:'100%',height: '48px'}}>
<option>Choose State</option>
{gistfile1 && Object.values(gistfile1).map((e,index)=>(
<option key={index} value={e.state.name}>{e.state.name}</option>


))}
  </select>
</div>


<div className="form-group">

<select className="custom-select2 form-control text-lg" name="city" onChange={onChange}
style={{width:'100%',height: '48px'}}>
<option>Choose City  {state && " - "+ state } </option>


     { !state ? gistfile1 && Object.values(gistfile1).map((e,index)=>(
  <>
    
<optgroup key={e.state.name} label={e.state.name} >


{Object.values(e.state.locals).map((city,index)=>(

    
<option key={index} value={city.name}>{city.name}</option>

))}


      

</optgroup>

</>



)): gistfile1 && Object.values(gistfile1).map((e,index)=>(
e.state.name == state &&  Object.values(e.state.locals).map((city,index)=>(

    
<option key={index} value={city.name}>{city.name}</option>

))





))



}
  </select>
</div>
</div>





<div className="my-4">
  <p> Product condition </p>

{checkbox("New","condition")}
{checkbox("Used","condition")}


  </div>   


<div className="my-4">
  <p> Product condition </p>

{radio("Any price","price")}
{radio("Under NGN 30,000","price")}
{radio("NGN 30,000 to NGN 100,000","price")}
{radio("Over NGN 100,000","price")}
{radio("Custom","price","( Set Low & High )")}

<div className="row">

<div className="col-5">
{number("min","Low")}

</div>

<div className="col-5">
{number("max","High")}

</div>

{ custom == "true" && 
<div className="col-2 pt-2 btn-link btn"  >
<i className="icon-copy fa fa-angle-double-right" style={{fontSize:'25px'}} onClick={customClick} aria-hidden="true"></i>


</div>
}

</div>



  </div>  


<div className="my-4">
  <p> <i className="icon-copy dw dw-delivery-truck-2 mr-1  font-weight-bold" style={{fontSize:'17px'}} ></i> Delivery options </p>

{checkbox("With delivery","with_delivery","Yes")}
{checkbox("No delivery","with_delivery","No")}


  </div>  


<div className="my-4">
  <p>  Payment options </p>

{checkbox("Cash","payment_type")}
{checkbox("Bank Transfer","payment_type")}
{checkbox("Online Transfer","payment_type")}
{checkbox("Crypto Currency","payment_type")}
{checkbox("Paypal","payment_type")}
{checkbox("Negotiable","payment_type")}


  </div>  



                </section>

);
}

export default Filter;
