
import withSession from '../../../lib/session'
import Property,{User,Images} from "../../../models/model"
import dbConnect from "../../../utils/connectDb"



const setImages = (images_id=[])=>{

    

      if (images_id.length >0){
          

          let image_data = []

          images_id.forEach(async image=>{

  if(image){

image_data.push({image_id:String(image)})

console.log('images data=> ', image_data)


  }
          })

          return image_data;

      }


}



export const config = {

  api:{  bodyParser:true}
}


export default withSession(async (req, res) => {


  dbConnect()
  
const {title,status,description,duration,images_id,username,type,
size,color,price,street,state,city,weight,features,note,exchange_item,negotiable,
condition,with_delivery,delivery_company,with_payment,payment_type
} = req.body

// console.log('body',features);


  try {
    // we check that the user exists and store some data in session
   
    const getUser =  await User.findOne({email:username})

    const proper =  await Property.find()

    console.log('property ',proper);
    
    let createProperty

    if(getUser){



      
createProperty = await Property.create({
        title:title,
        status: status,
        type,
        description,
        price,
        duration,
        negotiable,
        exchange_item,
        agentuser:getUser._id,
        images:setImages(images_id)
        
    }, (err,data)=>{

if (data){
 

if(with_delivery) {

  data.with_delivery = with_delivery
  data.delivery_company = delivery_company
}


if(with_payment) {

  data.with_payment = with_payment
  data.payment_type = payment_type
}

if(condition) data.condition = condition


if(note)  data.note = note
           
        
if (street || state || city) data.location = {street,state,city}
      
if (size || color || weight) data.details = {color,size,weight}
      
      
      
if (features) data.features= features

      
      
data.save(err=>{
      
        if (err){
          throw new Error(err)
      
        } else {
      
          console.log("saved");
        }
      })
      
      
      
      // console.log('saved data',data);
      
      
      }
      
      
      }
)





res.status(200).json({success:true,message:createProperty})

   


    }

    


 
  

  } catch (error) {
 
    res.status(200).json({success:false,error:error.message})
  }
})
