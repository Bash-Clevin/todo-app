import React, { ChangeEvent, FormEvent, useState } from 'react'

function FormData(): React.JSX.Element {
  const [data, setData] = useState({value: ''})
  
  const handleDataChange = (event: ChangeEvent<HTMLInputElement>) => {
    setData({value: event.target.value})
  }

  const handleDataSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    fetch('http://localhost:4000/api/v1/todos',{ 
      method: 'POST', 
      headers: {
        "Content-Type": "application/json"
      }, 
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
    })
    .catch(error => {
      console.error(error)
    })
  }

  return (
    <form onSubmit={handleDataSubmit}>
      <input type="text" name="todo" value={data.value} onChange={handleDataChange} />
      <button type='submit'>Add todo</button>
    </form>
  )
}

export default FormData