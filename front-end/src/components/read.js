import React, {useState, useEffect} from 'react'
import axios from "axios";
import Model from "./model.js"

const Read = () => {
    var array = []
    const [task, setTask] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/api/todolist')
          .then(res => {
            console.log(res.data.result)
            for (let i = 0; i < res.data.result.length; i++) {
              array[i]= <Model 
              id={res.data.result[i]._id} 
              user={res.data.result[i].user} 
              task={res.data.result[i].task}
              time={res.data.result[i].createdAt}
              />
            }
            setTask(array)
          }).catch(err => {
            console.log(err)
          })
      }, [])
      return task
}

export default Read