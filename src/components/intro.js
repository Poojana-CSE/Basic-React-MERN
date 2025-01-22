import React from 'react'

const intro = () => {
  // let custom = "error"
  let custom = "code";

  return (
    <div>
      <p>This Is My Intro Page</p>
      <div>
        <h2 className={custom}>Answer</h2>
      </div>
    </div>
  )
}

export default intro
