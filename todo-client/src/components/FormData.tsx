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
      <div className="form-group">
        <label>Todo</label>
        <input className='form-control' type="text" name="todo" value={data} onChange={handleDataChange} />
      </div>
      <button className='btn btn-primary' type='submit'>Submit</button>
    </form> 
    </div>    
  )
}

export default FormData