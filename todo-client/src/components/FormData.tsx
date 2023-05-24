import axios from 'axios'
import React, { ChangeEvent, FormEvent, useState } from 'react'
function FormData(): React.JSX.Element {

  const [data, setData] = useState('')
  
  const handleDataChange = (event: ChangeEvent<HTMLInputElement>) => {
    setData(event.target.value)
  }

  const handleDataSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await axios.post('/api/v1/todos', {
      data
    })
    setData('')  
  }

  return (
    <div>
   
    <form onSubmit={handleDataSubmit}>
      <input type="text" name="todo" value={data} onChange={handleDataChange} />
      <button type='submit'>Add todo</button>
    </form> 
    </div>    
  )
}

export default FormData