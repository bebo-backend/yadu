import React, {useState} from 'react'
import Link from 'next/link'
import useUser from '../../lib/useUser'
import { useRouter} from 'next/router'
import useSWR from 'swr'
import fetchJson from '../../lib/fetchJson'
import axios from 'axios'
import {More} from '../../components/pagination'

import {Message } from '../../components/DetailComponents'
import MenuData from '../../components/menu-data'
import {CLOUDINARY_URL} from "../../components/contrib/config"
import Search from "../../components/headersearch"

const header = () => {




  const { user, mutateUser } = useUser()

   const {data:account,mutate:mutateAccount} = useSWR(()=>'/api/dashboard/account/'+user.email,axios)


  const [fetchedMessages,setFetchedMessages] = useState()
  const [menu,setMenu] = useState(false)


const cancelMenu = ()=>setMenu(!menu)

const fetchMessage = async (e)=>{

e.preventDefault()


const BASE_URL = '/api/getMessages/'+user?.email+'/?page='+1




// const {data:messages,mutate:mutateMessages} = useSWR(()=>BASE_URL,axios)

const data = axios.get(BASE_URL).then(response=>{


  if(response){

// console.log(response)
setFetchedMessages(response.data.message)


  }


})
}



  const router = useRouter()
  const {query} = router;
  const propertyType = ["Apartment","Office","House","Hotel","Restaurant","Rooms","Warehouse"]


  return (
    <div className="horizontal light w-100   " >

    {menu && <div className="menu-data card-box" style={{height:''+window.outerHeight}} >

<p className="pt-4 px-4 btn-link" onClick={e=>setMenu(!menu)}>
<i class="icon-copy dw dw-undo2 mr-3"></i>Menu
</p>
< hr />

<MenuData cancelMenu={cancelMenu} />
    </div>

  }
    <div className="wrapper2 w-100 ">
 
 <nav id="header" className="pr-4 navbar navbar-expand-lg navbar-light text-black   flex-row  " 
 style={{
paddingTop:'16px',height:'75px'
 }}>
        <div className="container-fluid">
  
  <i class="icon-copy dw dw-menu-1 show-mobile mx-2 font-24 text-dark my-menu" onClick={e=>setMenu(!menu)} ></i>

<Link href="/">
          <a className="navbar-brand  mr-0 my-0" href="/">
          <p className="mt-3 ml-2 text-primary"> 
          <i className="icon-copy dw dw-hurricane ml-4 mr-2 font-weight-bold "  aria-hidden="true"  style={{fontSize:'37px'}}></i>
       <span className="font-weight-bold " >yadu </span>
          </p>
          </a>
          </Link>
     

       
       <div className=" mx-2  show-laptop  " style={{
              width:'42%'
            }} >
              
<Search />
   
              </div>    

               



          <ul className="navbar-nav d-flex flex-row pt-3">


 <div className="dropdown   show-laptop mx-2 "  >
              
<Link href="/submitproperty">
<button type="button" className="btn text-success font-14  btn-link " >
<i className="icon-copy fa fa-plus-circle mr-1" aria-hidden="true">
</i> SELL NOW</button>
</Link>
              </div>  


      <ViewMessage messages={fetchedMessages} notification={true} user={user} fetchMessage={fetchMessage}   />






            <div className="dropdown mx-0  my-0 py-0 text-muted" >
										

                    	<a className="btn font-24 mt-0  p-0 line-height-1  dropdown-toggle pd-social " href="#" role="button" data-toggle="dropdown" style={{
                        marginTop:'0px'}}>
                    
                  {user?.isLoggedIn && account&& account.data && account.data.user && account.data.user.image ?
                      <img src={CLOUDINARY_URL+"w_38,h_38,g_face,r_max,c_thumb/"+account.data.user.image.image_id}  className="avatar-img " style={{width:'35px',height:'35px',
                   marginTop:'-16px'}} />

                   : <img src="/vendors/images/form-user.png" alt="...Image" className="avatar-img rounded-circle " style={{width:'35px',height:'35px',
                   marginTop:'-16px'}} />
                  }
                 
             <span className="font-16 ont-weight-bold ml-1 text-white username show-laptop " 
             style={{width:'23px',overflow:'hidden'}} >    {user?.username ? user?.username:"Anonymous"} </span>
              
											</a>

											<div className="dropdown-menu dropdown-menu-right dropdown-menu-icon-list py-2">
												
                
                         
                        {user?.isLoggedIn ?  
              
              <a className=" dropdown-item py-1 my-2" href="/logout" onClick={async (e) => {
                e.preventDefault()
                await mutateUser(fetchJson('/api/auth/logout'))
                router.push('/login')
              }} > <i className="dw dw-logout-1 mr-1"></i> Log out</a>
             
              :   

              <a className=" dropdown-item py-1 my-2" href="login"> <i className="dw dw-login"></i> 
               <Link href="/login">
              Log in </Link> </a> 
              
            }
            
												<a className="dropdown-item  py-1 "  onClick={e=> {
                e.preventDefault()
               
                router.push('/dashboard/profile')
              }} > <i className="dw dw-edit2 ml-0 mr-2"></i> Profile</a>



                      
            
               

            
 <a className="dropdown-item py-1 my-2"  onClick={e=> {
                e.preventDefault()
               
                router.push('/submitproperty')
              }} > <i className="icon-copy font-weight-bold fa fa-plus-circle ml-0 mr-2"
               aria-hidden="true"></i>  Upload item</a>



                      
            




                        
                       
                        

                        <a className="dropdown-item py-1 my-2"  onClick={e=> {
                e.preventDefault()
               
                router.push('/help')
              }} > <i className="dw dw-help ml-0 mr-2"></i> Help </a> 


                 
                        <a className="dropdown-item py-1 my-2"  onClick={e=> {
                e.preventDefault()
               
                router.push('/')
              }} > <i className="dw dw-home ml-0 mr-2"></i> Home  </a>


											</div>
										</div>


  
          </ul>
        </div>
      </nav>
  

    </div>

     <div className="nav-item search-width  mx-2 mt-4 show-mobile bg-white " style={{
              width:'94%'
            }} >
              
<Search />


   
              </div>
    </div>


    );
}


export default header












export const ViewMessage = ({messages=[],notification=false,user={},loadNext,loadPrev,fetchMessage})=>{


  const router = useRouter()

const [modalUser,setModalUser] = useState({})

const setMessageModal = (e,data)=>{

e.preventDefault()
setModalUser(data);

}



  return (   notification ?  <div className="user-notification pt-1 show-laptop ">

        <div className="dropdown" >

        

          <a className="dropdown-toggle no-arrow" style={{marginRight:'5px'}}  role="button" data-toggle="dropdown" onClick={fetchMessage}>
            <i className="icon-copy dw dw-chat-4 font-weight-bold  text-dark " style={{fontSize:'25px'}}></i>
       
          </a>


        

          <div className="dropdown-menu dropdown-menu-right notification-drop" >
            <div className="notification-list px-2 " style={{overflowY:'scroll'}}>
              <ul>
                              <li className="w-100 p-2 py-1 mb-2  font-weight-bold" 
                             onClick={e=>{

                                router.push("dashboard/profile")
                              }}>


 Latest Messages - <i className="text-primary"> View all </i>


 <hr /> 
                </li>
              {

               user.isLoggedIn && messages.length >0 ? Object.values(messages && messages.docs).map((value,key)=>(
    <Link href={"/seller/"+value.sender.email}> 
                    <a className="" href={"/seller/"+value.sender.email}>

<li className="row mx-1 mb-1">

     
                  <span className="col-4">
                    {value.sender.image ?
                     <img src={CLOUDINARY_URL+"w_38,h_38,g_face,r_max,c_thumb/"+value.sender.image.image_id}  className="avatar-img " />
                   : <img src="/vendors/images/form-user.png"alt="...Image" className="avatar-img rounded " />

                  }
                  </span>

                  <span className="col-8">
                    <h6 className="mb-1 fullname " style={{color:'#1890ff'}}>{value.sender.fullname}</h6>
                    <p className="text-muted">{value.text} ...</p>

                    </span>

                </li>
                   </a>
                </Link>

                ))
                : <p className="text-muted"> No messages </p>
              }
               
              
              </ul>
            </div>
          </div>
        </div>
      </div> :
            <div className="notification-list" >
              <ul>
                              <li className="w-100 p-2 py-1  mb-2 font-weight-bold" >
Latest Messages
              <hr />  </li>
             
              {

               messages.length > 0 ? Object.values(messages && messages.data && messages.data.message && messages.data.message.docs).map((value,key)=>(
     <Link href={"/seller/"+value.sender.email}> 
                    <a className="" href={"/seller/"+value.sender.email}>

                    <li className="row mx-1 my-2">

               
                  <p className=" col-2 my-1">
                    {!value.sender.image ?
                   
                    <img src={CLOUDINARY_URL+"w_80,h_80,g_face,r_max,c_thumb/"+value.sender.image.image_id}  className="avatar-img " />

              
                   : <img src="/vendors/images/no-user-image.jpg"alt="...Image" className="avatar-img rounded " style={{width:'80px',height:'70px'}} />

                  }
                  </p>

                  <p className=" col-9">
                     <h6 className="mb-1 fullname " style={{color:'#1890ff'}}>{value.sender.fullname}</h6>
                    <p className="text-muted">{value.text} ...</p>

                    </p>
                     <div className="col-1">
                          <span className="file-action btn-link text-secondary  " onClick={e=>setMessageModal(e,value.sender)} >
                       <i style={{fontSize:'19px'}} 
                          className="icon-copy dw dw-message  font-weight-bold"  data-toggle="modal" data-target="#modal-message">
                          </i>
                          </span>
                        </div>

                
                </li>
                </a>
                </Link>

                ))
                : <p className="text-muted"> No new messages </p>
              }
               
               <More 
               hasNext={messages.length > 0 && messages.data.message.hasNextPage} 
                hasPrev={messages.length > 0 && messages.data.message.hasPrevPage} next={loadNext} prev={loadPrev} />
              
              </ul>
           

        



    <div className="modal fade" id="modal-message" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header pd-5">
<h6 className="p-4 text-uppercase">
                          SEND MESSAGE
                        </h6>
                    </div>

                      <div className="modal-body pd-5">
                       <Message user={modalUser} cardBox={false} />
                      </div>
                      <div className="modal-footer">
                        
                        <button type="button" className="btn btn-primary" data-dismiss="modal"><i className="icon-copy dw dw-exit mx-2"></i>Close</button>
                      </div>
                    </div>
                  </div>

</div>


         
            </div>

      )
}