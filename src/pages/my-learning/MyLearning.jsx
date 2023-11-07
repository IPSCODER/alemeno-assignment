import React, { useContext } from 'react'
import "./my-learning.css"
import { Link } from 'react-router-dom'
import { SearchContext } from '../../App'
import { useSelector ,useDispatch } from 'react-redux'
import { loadMarkComplete } from '../../redux/actions/actions';

const MyLearning = () => {
  const [s_result] = useContext(SearchContext);
  const data = useSelector(state => state.users.users)
  const dispatch = useDispatch()


  const myLearning = data.filter((item)=>{
    if (item.status ==="purchased" && s_result == ""   ) {
      return item
    }else if (s_result.length > 0 && (item.name.toLowerCase().includes(s_result.toLowerCase()) || item.instructor.toLowerCase().includes(s_result.toLowerCase())) && item.status ==="purchased" ) {
        return item

    }
  })

  return (
    <section className='courses' >
      <ul>
          {myLearning.map((item)=>(
        <li key={item.id} >
          <span className='mark-complete' onClick={()=>{dispatch(loadMarkComplete( item,item.id))}} ><input type='checkbox' checked={item.course_complete === 100 ? true : false} /> <span>{item.course_complete === 100 ? "completed" :"Mark for complete"}</span> </span>
            <Link to={"/course-details/"+ item.name} >
            <div className="img">
            <img src={item.thumbnail} alt="" />
            <span className="progress-bar"> <span style={{width:`${item.course_complete}%`}} ></span>{item.course_complete}%</span>
            </div>
            <h3 className='course-name' >{item.name}</h3>
            <p className='course-author' >{item.instructor}</p>
            <h5 className='course-price' >{item.duration}</h5>
          </Link>
        </li>
          ))}

      </ul>
    </section>
  )
}

export default MyLearning