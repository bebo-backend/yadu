
import withSession from '../../../lib/session'
import Property,{User} from "../../../models/model"
import dbConnect from "../../../utils/connectDb"
import {sortBy, reverse} from 'lodash'
import { enGB } from 'date-fns/locale'


export default withSession(async (req, res) => {


  dbConnect()


 






  try {
    // we check that the user exists and store some data in session
  let property

    const limit = 24

  const {sort,state,city,type,street,search_data,searchfilter,agent,page,status} =  req.query


// console.log('search_filter', search_data)

const getField = (field="all")=>{

  switch (String(field).toLowerCase()){

case "status":{

  return ['status']
  break;
}

case "price":{

  return ['price']
  break;
}

case "city":{

  return ['location.city']
  break;
}


case "type":{

  return ['type']
  break;
}

case "condition":{

  return ['condition']
  break;
}

case "state":{

  return ['location.state']
  break;
}

case "seller":{

  return ["agentuser.fullname","agentuser.email"]
  break;
}

case "title":{

 return ['title','type','status','duration','location.street']
  break;
}


case "address":{

  return ['location.street']
  break;
}

default :{

return ['title','type','status','duration']

break;

}



  }
}


const getSort = (sort)=>{


switch(String(sort)){

 case "dn2o":{

   return {date:-1}
   break;
 }

 case "do2n":{

   return {date:1}

   break;
 }

 case "name":{

    return {"agentuser.fullname":-1}
   

   break;
 }

 case "lv":{

    return {views:-1,likes:-1}
      break;
 }

 default :{

  return {date:-1}
   break;
 }
}


   

}

const setFilterToArray = (searchfilter,searchvalue)=>{

const splitFilter = searchfilter.split("__")
const splitSearchData = searchvalue.split("__")

const [firstArray, ...restOfArray] = splitFilter

let returnData = []

restOfArray.forEach(filter=>{


  let filData = splitSearchData.filter(e=>e.indexOf(`${filter}-`) >= 0)

filData =  filData.map(e=>e.replace(`${filter}-`,""))



if (filter === "price" ){


switch(String(filData)){

 case "Any price":{

  returnData.push({
    price:{$gt:0}
})

   break;
 }

 case "Under NGN 30,000":{

     returnData.push({
    price:{$lt:30000}
})

   break;
 }

 case "NGN 30,000 to NGN 100,000":{
  
   returnData.push({
    price:{$lt:100000,$gt:30000}
})
   

   break;
 }

 case "Over NGN 100,000":{

      returnData.push({
    price:{$gt:100000}
})

      break;
 }

 default :{


  returnData.push({
    price:{$gt:0}
})

   break;
 }
}



} else if (filter === "customprice"){

const splitCustomData = String(filData).split("to")

  console.log('splitCustomData ',splitCustomData)

  returnData = returnData.filter(e=>!e.price).concat({
    price:{$gt:Number(splitCustomData[0]),$lt:Number(splitCustomData[1])}
})




} else {



const objData = {$in:filData}

console.log("objData -- ",objData)


returnData.push(
{
  [filter]:objData

})

}


})

console.log("returnFilter -- ",returnData)

return returnData


}






  const allOptions = {
    page:page ? page:1,
    limit:limit,
    sort:getSort(sort),
    lean:true,
    select:"title status type location price duration images agentuser likes views condition",
    populate:"agentuser"
  }


  const options = {
    page:page ? page:1,
    limit:limit,
    sort:getSort(sort),
    lean:true,
    search:{
      value:search_data,
      fields: getField(searchfilter)
    },
    select:"title status type location price duration images agentuser likes views condition",
    populate:"agentuser"
  }





    if (search_data == "All" || search_data =="all") {

    property =  await Property.paginate({},allOptions)


    } else if (searchfilter && searchfilter != "Agents") {

      
if(searchfilter == "state" || searchfilter == "city" || searchfilter.indexOf("__") < 0){
      
      property =  await Property.paginate({},options)

} else {


const transformData = setFilterToArray(searchfilter,search_data)


property =  await Property.paginate({$and:transformData
},allOptions)


} 

    } else if (searchfilter && searchfilter == "Agents") {

     const user  = await User.findOne({email:search_data})

      property =  await Property.paginate({agentuser:user},allOptions)

    }    else {

property =  await Property.paginate({},options)


   

    }


res.status(200).json({success:true,property:property})

   


    } catch (error) {
 
    res.status(200).json({success:false,error:error.message})
  }
})
