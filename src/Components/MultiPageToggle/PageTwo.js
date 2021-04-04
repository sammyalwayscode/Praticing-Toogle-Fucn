import React from 'react'

function PageTwo({mutToogle, setMutToogle}) {
  return (
    <div>
     {
       mutToogle ?  <h1>Hi This is page Two</h1> : null
     }
    </div>
  )
}

export default PageTwo
