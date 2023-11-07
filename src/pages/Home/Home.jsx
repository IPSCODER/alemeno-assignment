import React, { useContext, useEffect } from 'react'
import "./home.css"
import { Link } from 'react-router-dom'
// import { data } from '../../data/data'
import { SearchContext } from '../../App'
import { useDispatch, useSelector } from 'react-redux'
import { loadUsers } from '../../redux/actions/actions'

const Home = () => {
  const [s_result] = useContext(SearchContext);
  const data = useSelector(state => state.users.users)
  
  const filteredData = data.filter((item)=>{
      if (s_result == "" && item.status === "buy") {
        return item;
      }else if(item.name.toLowerCase().includes(s_result.toLowerCase()) || item.instructor.toLowerCase().includes(s_result.toLowerCase()) ){
        return item;
      }
    }
  )
  
  return (
    <section className='courses' >
      <ul>
          {filteredData.map((item)=>(
        <li key={item.id} >
            <Link to={"/course-details/"+ item.name} >
            <img src={item.thumbnail} alt="" />
            <h3 className='course-name' >{item.name}</h3>
            <p className='course-author' >{item.instructor}</p>
            <h5 className='course-price' >$ 499</h5>
          </Link>
        </li>
          ))}

      </ul>
    </section>
  )
}

export default Home