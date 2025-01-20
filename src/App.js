import React from 'react'
import Intro from './components/intro.js'
import Table from './components/table.js'
const App = () => {
  return (
    <div>
      <div className='paratag' style={{fontSize:"45px"}}>
        <p>Hello</p>
      </div>
      <div><Intro/></div>
      <div><Table/></div>
    </div>
  )
}
export default App

// export default App = () => {
//   return (
//     <div>
//       <p>Hello</p>
//     </div>
//   )
// }


