import React, {useState} from 'react'
import Link from 'next/link';
import Layout from "../components/contrib/layout"
import ViewInfo from "../components/search"
import LatestProperty from "../components/latestproperty"

import Agents from "../components/agents"
import Search from "../components/headersearch"
import Category from "../components/category-menu"
import {useRouter} from 'next/router'
import dbConnect from '../utils/connectDb';
import {NextSeo} from 'next-seo'






 const main = ({cars}) => {




    return (  
        <Layout >



<NextSeo title={"Welcome to yadu  - The best shopping and listing website in nigeria"} titleTemplate='%s | yadu'
description="Buy , Sell , Rent and Exchange product or item" />

<main id="main bg-secondary" className="main" >



<div className="category-parent mt-0 ">

<div className=" index-search show-laptop">

<ViewInfo />


</div>

    <h3 className=" text-center  px-1 py-3  font-weight-bolder text-uppercase show-mobile " >
buy smarter, sell faster. </h3>

<div className="    p-4  card-box  mb-4">


<p className="font-weight-bold pb-3 mb-2 " style={{borderBottom:"1px solid rgba(0, 0, 0, 0.1)"}}>More Categories </p>

<Category />
</div>

</div>



<LatestProperty/>

<Agents/>



    </main>

</Layout>

);
}

export default main;

