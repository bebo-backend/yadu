import React, {useState} from 'react'
import Link from 'next/link';
import Layout from "../components/contrib/layout"

import Agents from "../components/agents"

import {useRouter} from 'next/router'
import SearchComponent from '../components/searchComponent'

import SortComponent from '../components/sortcomponent'
import AgentsData from "../components/agentsdata"




 const main = () => {


const [search, setSearch] = useState("all")
const [sort, setSort] = useState([])


const sortedData = (data)=>{

	setSortData(data)
}

    return (  
        <Layout title="Agents " >




<main id="main" >


<div className="page-header my-4 cta">
					<div className="row my-0" >
						<div className=" col-sm-12">
							<div className="title">
								<h4> <i className="fe fe-24 mx-2 fe-users"></i>Agents </h4>
							</div>
							<nav aria-label="breadcrumb" role="navigation">
								<ol className="breadcrumb p-2">
									<li className="breadcrumb-item"><a href="/"><Link href="/">Home </Link> </a></li>
									<li className="breadcrumb-item active" aria-current="page">All</li>
								</ol>
							</nav>
						</div>
					
					</div>
				</div>

                <div className="page-header m-0">
					<div className="row my-2" >
						<div className=" col-sm-6">

<SearchComponent setSearch={setSearch} />
</div>

<div className=" col-sm-6 text-right px-4">



<SortComponent  setSort={setSort}  />
</div>

</div>


<AgentsData search={search} sort={sort}  />


</div>
    </main>

</Layout>

);
}

export default main;
