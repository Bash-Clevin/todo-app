import axios from 'axios'
import React, { useEffect, useState } from 'react'

function PostList() {
  const [todosData, setTodoData] = useState([])

  const fetchTodos = async () => {
    const res = await axios.get('/api/v1/todos')
    setTodoData(res.data)
  }

  useEffect(() => {
    fetchTodos()
  }, [])

  console.log(todosData)
  const renderedTodos = todosData.map((todo,index) => {
    return <div className='card' style= {{width:'30%', marginBottom: '20px'}} key={index}>
      <div className='card-body'>
        <h3>{todo}</h3>
      </div>           
    </div>
  })


  return (
    <div className='d-flex flex-row flex-wrap justify-content-between'>{renderedTodos}</div>
  )
}

export default PostList
