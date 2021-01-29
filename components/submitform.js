import React, {useState,useCallback} from 'react'
import Layout from '../components/contrib/layout'
import Upload from '../components/contrib/upload'
import gistfile1 from '../components/contrib/gistfile1'
import Link from 'next/link';
import sha1 from 'crypto-js/sha1'
import deliveries from '../components/contrib/deliveries'
import Dropzone from 'react-dropzone-uploader'
import {Cascader} from "antd";
import Options from "../components/contrib/category-options"



export const CloudinaryUpload = ({title="demo",setImageId=f=>f,removeImageId=f=>f,maxLength=10,multiple=true, finishUpload})=>{


const [public_id,setPublicId] = useState("")


const SignKey = (eager,public_id,timestamp)=>{

const api_secret = "fDWINmYw_Q4v3xN86uOFKIq2Phw"

const eag = `eager=${eager}`
const pub_id = "public_id="+public_id
const timestm = "timestamp="+timestamp

const params = `${eag}&${pub_id}&${timestm}`

const hash = sha1(params+api_secret).toString()

console.log(hash)

	return hash
}


const getUploadParams= ()=>{

// const url = "http://localhost:3000/api/submitp" 
const api_key="634365759713568",timestamp=Math.floor(new Date().getTime()/1000),eager="q_auto:good"
const signature=SignKey(eager,public_id,timestamp)

const url = "https://api.cloudinary.com/v1_1/bebo-vercel/image/upload"

	return {fields:{public_id,api_key,timestamp,eager,signature},
		url
	}
}

const handleChangeStatus = ({meta,file},status)=>{


const metaName = meta.name.replace(".jpg","").replace(".png","").replace(" ","_")
const titleName= title.replace(' ',"_")

// console.log('title999 ',titleName)

if (status === 'headers_received'){

if (finishUpload) finishUpload(titleName+"_"+metaName)

console.log("picture uploaded")
}

if (status === 'preparing'){

setPublicId(titleName+"_"+metaName)

}

if (status === "getting_upload_params"){

setImageId(titleName+"_"+metaName)

// if (finishUpload) finishUpload(titleName+"_"+metaName)

}

if (status === "removed"){

removeImageId(titleName+"_"+metaName)

}
	// console.log(meta)
	
	console.log(status)
}

// const handleSubmit = ({files,allFiles})=>{

// console.log(files.map(f=>f.meta))
// allFiles.forEach(f=> f.remove())

// }

	return (

	<div>

<Dropzone 
getUploadParams={getUploadParams}
onSubmit={null}
onChangeStatus={handleChangeStatus}
multiple={multiple} 
maxFiles={maxLength}
accept={"image/*"}
styles={{dropzone:{
	overflow:'hidden',minHeight:'200px',
	border:'0px solid'
},
 dropzoneReject: { borderColor: 'red', backgroundColor: '#DAA' },
 inputLabel:(files,extra)=>(extra.reject ? {color:'red'}:{})

 }} 
inputContent= {(files,extra)=>{

	return extra.reject ? <p className="w-100 text-center">
	<i className="icon-copy dw dw-warning text-center  " style={{
		fontWeight:'bold',fontSize:'45px'
	}}></i><p className="my-2">Upload Image files only</p>
	</p>
	:<p className="w-100 text-center">
	<i className="icon-copy dw dw-upload text-center dropzone-detail " style={{
		fontWeight:'bold',fontSize:'45px'
	}}></i><p className="my-2 dropzone-detail">Drag Files or Click to Browse</p>
	</p>
}}

inputWithFilesContent={files=> <p className="pt-2 text-uppercase"> <i className="icon-copy dw dw-add mx-2 font-weight-bold"></i> Add Picture </p>}

 />

	</div>)
}





 const Data = ({onSubmit=f=>f, load, onChange, data={},errorMsg,setImageId=f=>f,removeImageId=f=>f}) => {




// console.log('stat ', data.status);

const size = ["small","medium","large","extra large","extra extra large"]

const paymentType = ["Bank Transfer","Cash","Online Transfer","Crypto Currency","Paypal","Negotiable"]



const option = (value)=>{

	return <option value={value} key={value}>{value}</option>
}


const checkbox = (value,label)=>{

	return <span className="custom-control custom-checkbox m-2">
	<input type="checkbox" onChange={onChange} className="custom-control-input" id={value} value={label ? label:value} name="features" />
	<label className="custom-control-label px-4" for={value}>{label ? label:value}</label>
</span>
}

    return (  
    
        <Layout title="Submit Listing ">
        
<section className="submit-section " style={{marginTop:'40px'}}  >

					<div className="row my-2 mx-2 div1" >
						<div className=" col-sm-12">
						
							<nav aria-label="breadcrumb" role="navigation">
								<ol className="breadcrumb px-2">
									<li className="breadcrumb-item"><Link href="/">
									<a href="/"> <i className="icon-copy dw dw-house1 mx-2 text-uppercase"></i>  Home</a>
									</Link></li>
									<li className="breadcrumb-item text-muted" aria-current="page">Upload product</li>
								</ol>
							</nav>
						</div>
					
					</div>
			

               

                <div className="page-header  card-box submit-padding" 
                style={{borderRadius:'15px'}}  >

	<p className="title m-0 text-left text-uppercase mx-2">
								<h4 className="text-dark font-weight-bold">
								 <i style={{fontSize:'26px'}} className="icon-copy fa fa-cloud-upload mx-2 text-primary" aria-hidden="true"></i>
								Submit Listing </h4>
							</p>
							<hr />
<div className="px-2 submit-form " >

<div>


</div>

<div className="form-group row mt-0 form-cat">
							<h4 className="col-sm-12 col-md-12 col-form-label text-black my-4 ">TITLE</h4>
							<div className="col-sm-12 col-md-12 mb-2">
								<input className="form-control title " onChange={onChange} name="title" style={{height:'45px'}} type="text" placeholder="3 Bedroom Flats in Agege etc." />
							</div>

							{errorMsg && errorMsg.title && <div className="alert w-100 alert-danger" role="alert"> {errorMsg.title} </div> }
						</div>

<div className="form-group row ">
<div className="col-sm-12 col-md-12 mb-2 form-cat">
							<h4 className="col-sm-12 col-md-12 col-form-label text-black mb-3 ">FEATURE CATEGORY</h4>
							
<Cascader  className=" w-full form-control" bordered={false}
displayRender={(e,f)=>e } expandTrigger="hover" 
 options={Options} onChange={e=>onChange(e,'type')} 
placeholder={ data['type'] ?data['type']:"Select Product Category"}
 />
 

 </div>
 {errorMsg && errorMsg.type && <div className="alert alert-danger" role="alert"> {errorMsg.type} </div> }
 </div>


<div className="" style={{marginTop:'2px',marginBottom:'40px'}}>
<p className="text-black h4 my-4">CONDITION</p>
<div className="row mx-4">


                <span className="custom-control custom-radio ">
					<input type="radio" value={"New"} checked={data.condition=="New"} name="condition" className="custom-control-input" id="conditionno" onChange={onChange}/>
					<label className="custom-control-label px-4" for="conditionno">New</label>
				</span>

				  <span className="custom-control custom-radio ">
					<input type="radio" value={"Used"} checked={data.condition=="Used"} name="condition" className="custom-control-input" id="conditionyes" onChange={onChange}/>
					<label className="custom-control-label px-4" for="conditionyes">Used</label>
				</span>


</div>
</div>





                        <div className="form-group mb-4">
							<span className="text-black h4 my-4">DESCRIPTION</span>
							<textarea onChange={onChange} name="description" className="form-control my-4 p-4" rows={8} placeholder="Write a few words on your product ..." ></textarea>
						</div>
                        

						<div className="" style={{marginTop:'50px',marginBottom:'40px'}}>
<p className="text-black h4 my-4">FEATURED STATUS</p>
<div className="row mx-4">


                <span className="custom-control custom-radio ">
					<input type="radio" value="For Sale" checked={data.status=="For Sale"} name="status" className="custom-control-input" id="customCheck1-3" onChange={onChange}/>
					<label className="custom-control-label px-4" for="customCheck1-3">For Sale</label>
				</span>

<span className="custom-control custom-radio">
					<input type="radio" checked={data.status=="For Rent"} value="For Rent" name="status" className="custom-control-input" id="customCheck1-1" onChange={onChange}/>
					<label className="custom-control-label px-4" for="customCheck1-1">For Rent</label>
				</span>


                <span className="custom-control custom-radio ">
					<input type="radio" value="For Exchange" checked={data.status=="For Exchange"} name="status" className="custom-control-input" id="customCheck1-2" onChange={onChange}/>
					<label className="custom-control-label px-4" for="customCheck1-2">For Exchange</label>
				</span>

</div>
</div>


                        <div className="" >


                        <p className="text-black h4 my-4" >LOCATION</p>

<div className="row">




<div className="col-md-4">

<div className="input-group custom">
<input type="text" className="form-control form-control-lg" name="street" onChange={onChange} placeholder="Enter Street" />
<div className="input-group-append custom">
<span className="input-group-text"><i className="icon-copy fe fe-map-pin"></i></span>
</div>
</div>
</div>




<div className="col-md-4">

<div className="form-group">

<select className="custom-select2 form-control text-lg" name="state" onChange={onChange}
style={{width:'100%',height: '48px'}}>
<option>Choose State</option>
{gistfile1 && Object.values(gistfile1).map((e,index)=>(
<option key={index} value={e.state.name}>{e.state.name}</option>


))}
  </select>
</div>
</div>


<div className="col-md-4">

<div className="form-group">

<select className="custom-select2 form-control text-lg" name="city" onChange={onChange}
style={{width:'100%',height: '48px'}}>
<option>Choose City  {data.state && " - "+ data.state } </option>


     { !data.state ? gistfile1 && Object.values(gistfile1).map((e,index)=>(
  <>
    
<optgroup key={e.state.name} label={e.state.name} >


{Object.values(e.state.locals).map((city,index)=>(

    
<option key={index} value={city.name}>{city.name}</option>

))}


      

</optgroup>

</>



)): gistfile1 && Object.values(gistfile1).map((e,index)=>(
e.state.name == data.state &&  Object.values(e.state.locals).map((city,index)=>(

    
<option key={index} value={city.name}>{city.name}</option>

))





))



}
  </select>
</div>
</div>

</div>


</div>


<div className="" >


<p className="text-black h4 my-4" >FEATURED PRICE</p>

<div className="row">


<div className="col-md-6">

<div className="input-group custom">
<input type="number" className="form-control form-control-lg" name="price" onChange={onChange} placeholder="Price" />
<div className="input-group-append custom">
<span className="input-group-text">NGN</span>
</div>
</div>
</div>




{data.status == "For Rent" && 
<div className="col-md-6">

<div className="form-group">

<select className="custom-select2 form-control text-lg" name="duration" onChange={onChange}
style={{width:'100%',height: '48px'}}>
<option value="" >After price label</option>

<option value="daily">Daily</option>
<option value="monthly">Monthly</option>
<option value="yearly">Yearly</option>
<option value="" >None of the above</option>

</select>
</div>
</div>

	}








</div>


</div>


<div className="" style={{marginTop:'2px',marginBottom:'40px'}}>
<p className="text-black h4 my-4">NEGOTIABLE</p>
<div className="row mx-4">


                <span className="custom-control custom-radio ">
					<input type="radio" value={"Yes"} checked={data.negotiable=="Yes"} name="negotiable" className="custom-control-input" id="customCheckno" onChange={onChange}/>
					<label className="custom-control-label px-4" for="customCheckno">Yes</label>
				</span>

				  <span className="custom-control custom-radio ">
					<input type="radio" value={"No"} checked={data.negotiable=="No"} name="negotiable" className="custom-control-input" id="customCheckyes" onChange={onChange}/>
					<label className="custom-control-label px-4" for="customCheckyes">No</label>
				</span>


</div>
</div>



<div className="">
<p className="text-black h4 my-4">FEATURED IMAGES</p>
<div className="row ">
<div className="col-md-12">
                  <div className="card image-card  mb-4">
                    <div className="card-header">
                      <p className="">Upload your product image(s)  ...</p>
                    </div>
                    <div className="card-body center">


<div className="img-data">


<CloudinaryUpload title={data.title} setImageId={setImageId} removeImageId={removeImageId} />


</div>

					
                  
                    </div> 
                  </div> 
                </div>
        
</div>
</div>


<div className="">


<p className="text-black h4 my-4">PRODUCT DETAILS</p>


<div className="row">




<div className="col-md-4">

<div className="input-group custom">
<input type="text" className="form-control form-control-lg" onChange={onChange} name="weight" placeholder="Enter Weight"  />
<div className="input-group-append custom">
<span className="input-group-text"><i className="icon-copy dw dw-panel5"></i></span>
</div>
</div>
</div>




<div className="col-md-4">

<div className="form-group">

<select className="custom-select2 form-control text-lg" name="size" onChange={onChange}
style={{width:'100%',height: '48px'}}>
<option>Choose Size</option>
{size.map(val => option(val))}

  </select>
</div>
</div>


<div className="col-md-4">

<div className="input-group custom">
<input type="text" className="form-control form-control-lg" onChange={onChange} name="color" placeholder="Enter Color"  />
<div className="input-group-append custom">
<span className="input-group-text"><i className="icon-copy dw dw-size"></i></span>
</div>
</div>
</div>

</div>


</div>




  <div className="form-group my-4">
							<span className="text-black h4 my-4">NOTES <span className="text-muted">( If available ) </span> </span>
							<textarea onChange={onChange} name="note" className="form-control my-4 p-4" rows={8} placeholder="Enter notes on product  ..." ></textarea>
						</div>


 <div className="form-group my-4">
							<span className="text-black h4 my-4">FEATURES <span className="text-muted">( If available ) </span> </span>
							<textarea onChange={onChange} name="features" className="form-control my-4 p-4" rows={8} placeholder="e.g  Platform: MTK6592 8 core,
							 Standby: Dual SIM Dual Standby Supports tf card expansion,
							  Screen: 6 inches HD+ 18:9 LCD resolution 1280x720,
							   Vibration:Support
, Colors: black gold blue ..." ></textarea>
						</div>


<p className="divider"> </p>




<div className="row">
<div className="col-md-6">
<div className="" style={{marginTop:'2px',marginBottom:'1px'}}>
<p className="text-black h4 mb-4 text-uppercase"> Delivery options </p>
<div className="row mx-4">


                <span className="custom-control custom-radio ">
					<input type="radio" value={"Yes"}  name="with_delivery" checked={data.with_delivery=="Yes"} className="custom-control-input" id="with_deliveryyes" onChange={onChange}/>
					<label className="custom-control-label px-4" for="with_deliveryyes">Yes</label>
				</span>

				  <span className="custom-control custom-radio ">
					<input type="radio" value={"No"}  name="with_delivery"  checked={data.with_delivery=="No"} className="custom-control-input" id="with_deliveryno" onChange={onChange}/>
					<label className="custom-control-label px-4" for="with_deliveryno">No</label>
				</span>


</div>
</div>
</div>

<div className="col-md-6">
{data.with_delivery == "Yes" && <div>
<p className="text-black h4 mb-4 text-uppercase"> Delivery Channel</p>
<div className="form-group">

<select className="custom-select2 form-control text-lg" name="delivery_company" onChange={onChange}
style={{width:'100%',height: '48px'}}>

{Object.values(deliveries).map((e,index) => option(e))}
<option value="Others">Others</option>

  </select>
</div>

</div>

}


</div>


</div>





<div className="row">
<div className="col-md-6">
<div className="" style={{marginTop:'28px',marginBottom:'1px'}}>
<p className="text-black h4 mb-4 text-uppercase"> Payment Options </p>
<div className="row mx-4">


                <span className="custom-control custom-radio ">
					<input type="radio" value={"Yes"}  name="with_payment" checked={data.with_payment=="Yes"} className="custom-control-input" id="payment_typeyes" onChange={onChange}/>
					<label className="custom-control-label px-4" for="payment_typeyes">Yes</label>
				</span>

				  <span className="custom-control custom-radio ">
					<input type="radio" value={"No"}  name="with_payment"  checked={data.with_payment=="No"} className="custom-control-input" id="payment_typeno" onChange={onChange}/>
					<label className="custom-control-label px-4" for="payment_typeno">No</label>
				</span>


</div>
</div>
</div>

<div className="col-md-6">
{data.with_payment == "Yes" && <div style={{marginTop:'38px',marginBottom:'1px'}}>
<p className="text-black h4 mb-4 text-uppercase"> Approved Payment Channel</p>


<div className="form-group">

<select className="custom-select2 form-control text-lg" value={data.payment_type?data.payment_type:"Cash"} name="payment_type" onChange={onChange}
style={{width:'100%'}}>


{paymentType.map(val => option(val))}

  </select>

</div>

</div>

}


</div>


</div>









<div className="col-md-12 d-flex justify-content-center mt-6" style={{marginTop:'50px',marginBottom:'40px'}}>




<div className="input-group mb-0 w-50 submit-btn  ">
									
										<a className="btn btn-primary btn-lg  text-white"
										 onClick={onSubmit}> <i className="fe fe-24 mx-2 fe-upload"></i> SUBMIT PRODUCT
										 	{load &&	
											 <span className="spinner-border spinner-border-sm mx-4" role="status" >
												 </span>}</a>
								

									</div>

									</div>

</div>
                    </div>
                </section>
                </Layout>

);
}

export default Data;


