import * as types from "./actionsType"
import axios from "axios"


const getUsers = (users) =>({
    type:types.GET_USERS,
    payload:users
})

// const getDetails = (details) =>({
//     type:types.GET_DETAILS,
//     payload:details
// })



export const loadUsers = () =>{
    return function(dispatch){
        axios.get(`http://localhost:5000/data`).then((response)=>{
            dispatch(getUsers(response.data))
            console.log(response.data);
        }).catch(err => console.log(err))
    }
}

// export const loadDetails = (id) =>{
//     return function(dispatch){
//         axios.get(`http://localhost:5000/data/${id}`).then((response)=>{
//             dispatch(getDetails(response.data))
//             console.log(response.data);
//         }).catch(err => console.log(err))
//     }
// }

export const loadMarkComplete = (item,id) =>{
    return function(dispatch){
        axios.put(`http://localhost:5000/data/${id}`,{
            id: item.id,
            status: item.status,
            course_complete: 100,
            name: item.name,
            instructor: item.instructor,
            description: item.description,
            enrollmentStatus: "open",
            thumbnail: item.thumbnail,
            duration: item.duration,
            schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
            location: item.location,
            prerequisites: item.prerequisites,
            syllabus: item.syllabus,
            students: item.students
          }).then((response)=>{
            console.log(response.data);
            dispatch(loadUsers())
        }).catch(err => console.log(err))
    }
}