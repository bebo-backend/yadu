
import withSession from '../../../../lib/session'
import Property,{User} from "../../../../models/model"
import dbConnect from "../../../../utils/connectDb"


export default withSession(async (req, res) => {


  dbConnect()


 const {id,rating } = req.query


  try {
    // we check that the user exists and store some data in session
   
    let property, user


user = await User.findOne({_id:id})

const userRate = user.rate ? user.rate :0

const rateVal = Number( userRate < rating ? rating : userRate)

const rateCount = Number(user.rate_count ?user.rate_count:0)+1

user.rate = Number(rateVal)

user.rate_count = Number(rateCount)

  console.log(rateCount)



const update =  await User.findOneAndUpdate({_id:id}, {
    rate:rateVal, rate_count:rateCount}, data=>{


        
            })

if (update){
                console.log(update)

                res.status(200).json({success:true,rate:{rate:update.rate,
                    rate_count:update.rate_count} })

            } else {
                res.status(200).json({success:false})
            }


    
           
// const update =  await User.findOneAndUpdate({_id:id}, {
//     rate:rateVal,rate_count:rateCount}, data=>{

//  })
// .populate({
//     path: 'reviews',
//     // Get friends of friends - populate the 'friends' array for every friend
//     populate: { path: 'sender' }
//   })
                   
        
            // if (update){
            //     console.log(update)

            //     res.status(200).json({success:true,rate:{rate:update.rate,
            //         rate_count:update.rate_count} })

            // } else {
            //     res.status(200).json({success:false})
            // }



    } catch (error) {
 
    res.status(200).json({success:false,error:error.message})
  }
})
