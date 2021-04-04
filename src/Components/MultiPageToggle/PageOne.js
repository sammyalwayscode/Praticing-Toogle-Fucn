import React, { useState } from 'react'
import PageTwo from './PageTwo'

function PageOne() {
  const [mutToogle, setMutToogle] = useState(false)


  console.log(mutToogle)
const justClick = (e) => {
  setMutToogle(!mutToogle)
}

  return (
    <div>
      <h1 onClick={justClick}>Hello This Is Page One</h1>

      <PageTwo mutToogle={mutToogle} setMutToogle={setMutToogle} />
    </div>
  )
}

export default PageOne
