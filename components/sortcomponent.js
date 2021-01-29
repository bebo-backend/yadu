import React, {useState} from 'react'
import Link from 'next/link';
import {sortBy, reverse} from 'lodash'

import {useRouter} from 'next/router'







 const main = ({setSort=f=>f}) => {

    const [state,setState] = useState("")



const click=(e)=>{
    // e.preventDefault()
    
    const sortFilter = e;

setSort(sortFilter)

}


    return (  
        <div className="dropdown mb-2 sort ">
											<a className="btn text-dark font-weight-bold font-20 p-0 line-height-1  dropdown-toggle" href="#" role="button" data-toggle="dropdown">
											<span className="small font-weight-bold ">Sort</span> <i className="icon-copy dw dw-sort1  text-black"></i>
											</a>
											<div className="dropdown-menu dropdown-menu-right dropdown-menu-icon-list">
												<a className="dropdown-item" ><i className="icon-copy dw dw-time-management"></i><span onClick={e=>click("dn2o")}>  By Date (New to Old)</span></a>
                                                <a className="dropdown-item" ><i className="icon-copy dw dw-time-management"></i><span onClick={e=>click("do2n")}>  By Date (Old to New)</span></a>
												<a className="dropdown-item" ><i className="icon-copy dw dw-property"></i> <span onClick={e=>click("name")}> By Name </span></a>
												<a className="dropdown-item" ><i className="icon-copy dw dw-like"></i> <span onClick={e=>click("lv")}> By Likes/Views</span></a>
											</div>
										</div>
);
}

export default main;
