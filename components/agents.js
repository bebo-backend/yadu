import React, {useState} from 'react'

import {useRouter} from 'next/router'
import AgentsData from "../components/agentsdata"
import Link from 'next/link'
import axios from 'axios'





 const Agents = () => {

const [data,setData] = useState('');

const router = useRouter()



    return (  
    

<section className=" bg-white my-4 " style={{marginTop:'10px',paddingTop:'1px',paddingBottom:'8px'}}>
      

      <main role="main" className="main-content my-4">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="row align-items-center my-4 pb-3 " style={{borderBottom:"1px solid rgba(0, 0, 0, 0.1)"}}>
                <div className="col-6">
                <h6 className="font-weight-bold  pr-4 pl-4 py-2 border-outline-warning text-black" style={{borderLeft:'4px solid'}}>Recommended Seller</h6>
                </div>
                <div className="col-6 text-right"> <Link href="/agents">
                  <span  className="mx-4 text-primary text-right"><i className="icon-copy fa fa-users mr-2" aria-hidden="true"></i>All Seller</span></Link>
                  
                </div>
              </div>
           
               
                {/*  */}
               
            <AgentsData />
             
            
              {/* <nav aria-label="Table Paging" className="my-3">
                <ul className="pagination justify-content-end mb-0">
                  <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                  <li className="page-item active"><a className="page-link" href="#">1</a></li>
                  <li className="page-item"><a className="page-link" href="#">2</a></li>
                  <li className="page-item"><a className="page-link" href="#">3</a></li>
                  <li className="page-item"><a className="page-link" href="#">Next</a></li>
                </ul>
              </nav> */}
            </div> 
          </div> 
        </div> 
      
       
      </main>


                </section>

);
}

export default Agents;
