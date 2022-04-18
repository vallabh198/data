import React, { useContext } from 'react'
import { BlockContext } from './Context';

const Data = () => {
    const  content =[]
    const [data] = useContext(BlockContext);
   console.log(data);
 
   data.forEach((event) => {
 
     content.push({
       id: event.id,
       name: event.name,
       username: event.username,
       email: event.email,
       address: event.address.city,
       phone:event.phone,
       website:event.website
     });
 
   });
 
   const hollywoodPage = content.map((event) =>
   <div className="container flex card mb-3" style={{ maxWidth: "300px" }} key={event.id}>
     <div className="row no-gutters">
       <div className="col-md-4">
       {/* <img src={event.imageSet} className="card-img" alt="..." /> */}
       </div>
       <div className="col-md-8">
         <div className="card-body">
           <h5 className="card-title">{event.username}</h5>
           <div className="card-text">{event.name}</div>
           <div className="card-text">{event.email}</div>
           <div className="card-text">{event.phone}</div>
           <div className="card-text">{event.website}</div>
           <p className="card-text"><small className="text-muted">Realese Date:<br /> <br /></small></p>
         </div>
       </div>
     </div>
   </div>
 )
 
  return (
    <div>{hollywoodPage}</div>
  )
}

export default Data