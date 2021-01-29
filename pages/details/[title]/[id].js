import { useState } from 'react'

import Layout from '../../../components/contrib/layout'

import { useRouter } from 'next/router'

import ViewDetail from '../../../components/viewproduct'
import {Message } from '../../../components/DetailComponents'
import {NextSeo} from 'next-seo'



const Detail = ({user}) => {

    const router = useRouter()
// console.log(user)

const {title,id} = router.query

 return (
    <Layout title={title}>

    <NextSeo title={title} titleTemplate='%s | yadu'
description={"View product - "+title} />



<ViewDetail title={title} id={id} />

    <div className="modal fade" id="modal-message" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header pd-5">
<h6 className="p-4 text-uppercase">
                          SEND MESSAGE
                        </h6>
                    </div>

                      <div className="modal-body pd-5">
                       <Message user={user} cardBox={false} />
                      </div>
                      <div className="modal-footer">
                        
                        <button type="button" className="btn btn-primary" data-dismiss="modal"><i className="icon-copy dw dw-exit mx-2"></i>Close</button>
                      </div>
                    </div>
                  </div>

</div>





    </Layout>
  )
                    
}


export const getServerSideProps = async ({query}) => {
 
const {id,title} = query

  const res = await fetch('http://localhost:3000/api/actions/setview/'+String(id))
  const json = await res.json()
  return { props:{user:json.user}}
}



export default Detail