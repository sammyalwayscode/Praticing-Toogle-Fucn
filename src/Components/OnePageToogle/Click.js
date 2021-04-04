import React,{useState} from 'react'

function Click() {

  const [toogle, setToggle]=useState(false)

console.log(toogle)

 const clickTog = (e) => {
    setToggle(!toogle)
  }

  return (
    <div>
      <button onClick={clickTog}>Click ME Now</button>

      {
        toogle?<h1>God Is Good</h1>: null
      }
    </div>
  )
}

export default Click
