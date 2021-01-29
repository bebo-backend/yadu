import React, {useState} from 'react'
import Link from 'next/link';


import {useRouter} from 'next/router'







 const main = ({setSearch=f=>f,filter=false,setFilter=f=>f, searchFilter="Product",onClickFunc}) => {

    const [state,setState] = useState("all")
    





const change=(e)=>{
// console.log(e.target.value);
    setState(e.target.value)
    setSearch(e.target.value ? e.target.value : 'all')
 
}

const click=(e)=>{
    e.preventDefault()
    setSearch(state ? state : 'all')
}

const type=(filter="City",label="")=>   <span className=" dropdown "  onClick={e=>{setFilter(filter)}}>

    
<span role="button" data-toggle="dropdown-status"  >
    
    By {label ?label:filter}</span>


</span>

    return (  
       
<div className="input-group mb-3 search-form" style={{    
  borderRadius: '5px',paddingLeft:' 4px',background: 'white',height:'45px'}}>
                        <div className="input-group-prepend bg-gray-400">
                       {filter ?  
                      
                       
                            <span className="input-group-text  dropdown px-2 " style={{borderRight:'0px solid silver'}}>
                                <i role="button" data-toggle="dropdown" className="dropdown-toggle icon-copy dw dw-filter-1 search-icon"></i>
                                
                                <div className="dropdown-menu dropdown-menu-right ">


                                              <a className="dropdown-item dropdown" >
                                                {type("Title")}
                                                    </a>

                                                    <a className="dropdown-item dropdown" >
                                                    {type("type","Category")}
                                                  </a>

                                                   <a className="dropdown-item dropdown" >
                                                    {type("Condition")}
                                                  </a>



                                                    <a className="dropdown-item dropdown" >
                                                    {type("Address")}  
                                                    </a>



												<a className="dropdown-item dropdown" >
                                                {type("City")}
                                                    </a>
                                              


                                                    <a className="dropdown-item dropdown" >

                                       {type("State")}                                                  
                                                   
                                                    </a>


                                <a className="dropdown-item dropdown" >
                                                {type("Seller")}
                                                    </a>


                                                

											</div>

                                </span>
                      :
                          <span className="input-group-text"><i className="dw dw-search2 search-icon"></i></span>}
                        </div>
                        <input style={{height:'42px'}}
                        type="text" className="form-control" 
                        placeholder={filter? searchFilter ? "Search  " +searchFilter: "Search Product, Brand, Categories " :"Find seller around you"}
                         onChange={change}   />
                        <div className="input-group-append  " style={{
                              borderBottomRightRadius: '5px',
    borderTopRightRadius: '5px'

                        }}  onClick={onClickFunc ?onClickFunc: click}>
                        <span className="input-group-text"><i className="icon-copy dw dw-search px-1 font-weight-bold text-info" ></i></span>
                        </div>
                      </div>




);
}

export default main;


