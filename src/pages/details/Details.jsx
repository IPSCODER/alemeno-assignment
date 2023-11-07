import React, { memo, useEffect, useState } from 'react'
import "./details.css"
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

const Details = () => {
  const data = useSelector(state => state.users.users)
  const [accordion,setAccordion] = useState(false)
  const {id} = useParams();
  const dispatch = useDispatch()


    const p = data.filter((item)=>
    item.name === id
    )

    useEffect(()=>{
    },[])

  return (
    <section className='details-section' >
        {
          p.length > 0 && <>
          <img className='img' src={p[0].thumbnail} alt="" />
        <h2>{p[0].name}</h2>
        <h4>{p[0].instructor}</h4>
        <p>{p[0].description}</p>
        <h6>Enrollment status: <span>{p[0].enrollmentStatus}</span></h6>
        <h6>{p[0].duration} </h6>
          <p>-{p[0].schedule}</p>
          <h6>location: <span>{p[0].location}</span></h6>
          <p>- {p[0].prerequisites}</p>
          <h3 onClick={()=>{setAccordion(prev => !prev)}} >Syllabus <span style={{transform:accordion ? "rotate(180deg)" : "rotate(0deg)" }} ><svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" ><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17 15L12 10L7 15" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg></span> </h3>
          <ul style={{maxHeight: accordion ? "200px" : "0px"}} >
          {p[0].syllabus.map((item)=>(
            <li key={item.week}>
              <p>{item.week} week-{item.topic}-{item.content}</p>
            </li>
          ))}
        </ul>
          </>
        }
    </section>
  )
}

export default memo(Details)