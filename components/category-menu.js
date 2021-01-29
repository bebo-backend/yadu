
import Link from 'next/link'
import {useRouter} from 'next/router'
import {Select,Menu} from "antd";
import {getcategory} from './contrib/category-options'



function Category({row=true}){

// const router = useRouter()
// const {search,tag} = router.query

// const tagAddr =search? "/search?search="+search.replace("and","&"):""

return (
    
    <div className={row ? "text-black category row ":"text-black   " }>


<div className="menudiv col-sm-6 col-md-4 col-lg-3">
<Menu >
  
  <Menu.SubMenu title={<span className="flex">
<span className="mr-1 mr-2 mt-0">
<i className="icon-copy dw dw-carrot" style={{fontSize:'22px',color:"#4e1cc5"}}></i>
</span> 
<span className="mt-0  overflow-hidden"> Supermarket </span>
  </span>}>
<Menu.Item disabled>
<span className="font-bold text-uppercase menu-text">SUPERMARKET</span>
</Menu.Item>
{Object.values(getcategory('supermarket')).map((value,index)=>(

    

<Menu.Item key={index}>
<Link key={index} href={`/search?search_data=${value}&searchfilter=type`}>
{value}

</Link>
</Menu.Item>

))}

  </Menu.SubMenu>


</Menu>
</div>


<div className="menudiv col-sm-6 col-md-4 col-lg-3">
<Menu  >
  
  <Menu.SubMenu title={<span className="flex">
<span className="mr-1 mr-2 mt-0">
<i className="icon-copy dw dw-bus" style={{fontSize:'22px',color:"rgb(197, 59, 28)"}}></i>
</span>
<span className="mt-0 sm:mr-5 w-20 sm:w-32 overflow-hidden"> Vehicles </span>
  </span>}>
<Menu.Item disabled>
<span className="font-bold text-uppercase menu-text">VEHICLES</span>
</Menu.Item>
{Object.values(getcategory('vehicles')).map((value,index)=>(

    

<Menu.Item key={index}>
<Link key={index} href={`/search?search_data=${value}&searchfilter=type`}>
{value}

</Link>
</Menu.Item>

))}

  </Menu.SubMenu>


</Menu>
</div>



<div className="menudiv col-sm-6 col-md-4 col-lg-3">
<Menu   >
  
  <Menu.SubMenu title={<span className="flex">
<span className="mr-1 mr-2 mt-0">
<i className="icon-copy dw dw-computer font-weight-bod" style={{fontSize:'22px',color:'#25983e'}}></i>
</span>
<span className="mt-0 sm:mr-5 w-20 sm:w-32 overflow-hidden"> Electronics </span>
  </span>}>
<Menu.Item disabled>
<span className="font-bold text-uppercase menu-text">Electronics</span>
</Menu.Item>
{Object.values(getcategory('electronics')).map((value,index)=>(

    

<Menu.Item key={index}>
<Link key={index} href={`/search?search_data=${value}&searchfilter=type`}>
{value}

</Link>
</Menu.Item>

))}

  </Menu.SubMenu>


</Menu>
</div>


<div className="menudiv col-sm-6 col-md-4 col-lg-3">
<Menu >
  

  <Menu.SubMenu title={<span className="flex">
<span className="mr-1 mr-2 mt-0">
<i className="icon-copy dw dw-analytics-17 " style={{fontSize:'22px'}}></i>
</span>
<span className="mt-0 sm:mr-5 w-20 sm:w-32 overflow-hidden"> Software </span>
  </span>}>
<Menu.Item disabled>
<span className="font-bold text-uppercase menu-text">Software</span>
</Menu.Item>
{Object.values(getcategory('software')).map((value,index)=>(

    

<Menu.Item key={index}>
<Link key={index} href={`/search?search_data=${value}&searchfilter=type`}>
{value}

</Link>
</Menu.Item>

))}

  </Menu.SubMenu>


</Menu>
</div>



<div className="menudiv col-sm-6 col-md-4 col-lg-3">
<Menu   >
  
  <Menu.SubMenu title={<span className="flex">
<span className="mr-1 mr-2 mt-0">
<i className="icon-copy dw dw-watch font-weight " style={{fontSize:'22px',color:'rgb(150, 37, 152)'}}></i>
</span>
<span className="mt-0 sm:mr-5 w-20 sm:w-32 overflow-hidden"> Fashion </span>
  </span>}>
<Menu.Item disabled>
<span className="font-bold text-uppercase menu-text">Fashion</span>
</Menu.Item>
{Object.values(getcategory('fashion')).map((value,index)=>(

    

<Menu.Item key={index}>
<Link key={index} href={`/search?search_data=${value}&searchfilter=type`}>
{value}

</Link>
</Menu.Item>

))}

  </Menu.SubMenu>


</Menu>
</div>



<div className="menudiv col-sm-6 col-md-4 col-lg-3">
<Menu    >
  
  <Menu.SubMenu title={<span className="flex">
<span className="mr-1 mr-2 mt-0">
<i className="icon-copy dw dw-first-aid-kit font-weight " style={{fontSize:'22px',color:'rgb(224, 49, 21)'}}></i>
</span>
<span className="mt-0 sm:mr-5 w-20 sm:w-32 overflow-hidden"> Health & Beauty </span>
  </span>}>
<Menu.Item disabled>
<span className="font-bold text-uppercase menu-text">Health & Beauty</span>
</Menu.Item>
{Object.values(getcategory('healthBeauty')).map((value,index)=>(

    

<Menu.Item key={index}>
<Link key={index} href={`/search?search_data=${value}&searchfilter=type`}>
{value}

</Link>
</Menu.Item>

))}

  </Menu.SubMenu>


</Menu>

</div>



<div className="menudiv col-sm-6 col-md-4 col-lg-3">
<Menu >
  
  <Menu.SubMenu title={<span className="flex">
<span className="mr-1 mr-2 mt-0">
<i className="icon-copy dw dw-analytics-111 font-weight " style={{fontSize:'22px',color:'rgb(21, 158, 224)'}}></i>
</span>
<span className="mt-0 sm:mr-5 w-20 sm:w-32 overflow-hidden"> Business & Industry </span>
  </span>}>
<Menu.Item disabled>
<span className="font-bold text-uppercase menu-text">Business & Industry</span>
</Menu.Item>
{Object.values(getcategory('bussIndustry')).map((value,index)=>(

    

<Menu.Item key={index}>
<Link key={index} href={`/search?search_data=${value}&searchfilter=type`}>
{value}

</Link>
</Menu.Item>

))}

  </Menu.SubMenu>


</Menu>
</div>


<div className="menudiv col-sm-6 col-md-4 col-lg-3">
<Menu >
  
  <Menu.SubMenu title={<span className="flex">
<span className="mr-1 mr-2 mt-0">
<i className="icon-copy dw dw-gamepad font-weight-bold " style={{fontSize:'22px'}}></i>
</span>
<span className="mt-0 sm:mr-5 w-20 sm:w-32 overflow-hidden"> Games & Toys </span>
  </span>}>
<Menu.Item disabled>
<span className="font-bold text-uppercase menu-text">Games & Toys</span>
</Menu.Item>
{Object.values(getcategory('toyHobbies')).map((value,index)=>(

    

<Menu.Item key={index}>
<Link key={index} href={`/search?search_data=${value}&searchfilter=type`}>
{value}

</Link>
</Menu.Item>

))}

  </Menu.SubMenu>


</Menu>
</div>



<div className="menudiv col-sm-6 col-md-4 col-lg-3">
<Menu >
  
  <Menu.SubMenu title={<span className="flex">
<span className="mr-1 mr-2 mt-0">
<i className="icon-copy dw dw-books font-weight " style={{fontSize:'22px',color:'color: rgb(20, 32, 179)'}}></i>
</span>
<span className="mt-0 sm:mr-5 w-20 sm:w-32 overflow-hidden"> Books & Movies </span>
  </span>}>
<Menu.Item disabled>
<span className="font-bold text-uppercase menu-text">Books & Movies</span>
</Menu.Item>
{Object.values(getcategory('booksmovmus')).map((value,index)=>(

    

<Menu.Item key={index}>
<Link key={index} href={`/search?search_data=${value}&searchfilter=type`}>
{value}

</Link>
</Menu.Item>

))}

  </Menu.SubMenu>


</Menu>
</div>




<div className="menudiv col-sm-6 col-md-4 col-lg-3">
<Menu >
  
  <Menu.SubMenu title={<span className="flex">
<span className="mr-1 mr-2 mt-0">
<i className="icon-copy dw dw-flower-1 font-weight " style={{fontSize:'22px',color:'rgb(21, 148, 66)'}}></i>
</span>
<span className="mt-0 sm:mr-5 w-20 sm:w-32 overflow-hidden"> Home & Garden </span>
  </span>}>
<Menu.Item disabled>
<span className="font-bold text-uppercase menu-text">Home & Garden </span>
</Menu.Item>
{Object.values(getcategory('homegarden')).map((value,index)=>(

    

<Menu.Item key={index}>
<Link key={index} href={`/search?search_data=${value}&searchfilter=type`}>
{value}

</Link>
</Menu.Item>

))}

  </Menu.SubMenu>


</Menu>
</div>


<div className="menudiv col-sm-6 col-md-4 col-lg-3">
<Menu >
  
  <Menu.SubMenu title={<span className="flex">
<span className="mr-1 mr-2 mt-0">
<i className="icon-copy dw dw-football font-weight " style={{fontSize:'22px'}}></i>
</span>
<span className="mt-0 sm:mr-5 w-20 sm:w-32 overflow-hidden"> Sporting Goods  </span>
  </span>}>
<Menu.Item disabled>
<span className="font-bold text-uppercase menu-text"> Sporting Goods </span>
</Menu.Item>
{Object.values(getcategory('sportgoods')).map((value,index)=>(

    

<Menu.Item key={index}>
<Link key={index} href={`/search?search_data=${value}&searchfilter=type`}>
{value}

</Link>
</Menu.Item>

))}

  </Menu.SubMenu>


</Menu>
</div>



<div className="menudiv col-sm-6 col-md-4 col-lg-3">
<Menu >
  
  <Menu.SubMenu title={<span className="flex">
<span className="mr-1 mr-2 mt-0">
<i className="icon-copy dw dw-image font-weight " style={{fontSize:'22px',color:'#4e1cc5'}}></i>
</span>
<span className="mt-0 sm:mr-5 w-20 sm:w-32 overflow-hidden"> Collectibles & Arts  </span>
  </span>}>
<Menu.Item disabled>
<span className="font-bold text-uppercase menu-text"> Collectibles & Arts </span>
</Menu.Item>
{Object.values(getcategory('collectart')).map((value,index)=>(

    

<Menu.Item key={index}>
<Link key={index} href={`/search?search_data=${value}&searchfilter=type`}>
{value}

</Link>
</Menu.Item>

))}

  </Menu.SubMenu>


</Menu>
</div>


<div className="menudiv col-sm-6 col-md-4 col-lg-3">
<Menu >
  
  <Menu.SubMenu title={<span className="flex">
<span className="mr-1 mr-2 mt-0">
<i className="icon-copy dw dw-more font-weight " style={{fontSize:'22px',color:'coral'}}></i>
</span>
<span className="mt-0 sm:mr-5 w-20 sm:w-32 overflow-hidden">Other categories  </span>
  </span>}>
<Menu.Item disabled>
<span className="font-bold text-uppercase menu-text"> Other categories </span>
</Menu.Item>
{Object.values(getcategory('otherItem')).map((value,index)=>(

    

<Menu.Item key={index}>
<Link key={index} href={`/search?search_data=${value}&searchfilter=type`}>
{value}

</Link>
</Menu.Item>

))}

  </Menu.SubMenu>


</Menu>
</div>



    </div>
)

}

export default Category
