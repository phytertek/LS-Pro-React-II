import React from 'react'

const styling = {
  title: {
    textAlign: 'center'
  }
}

export const NavBar = () => {
  return(
    <div>
      <h1 style={styling.title}>A Clock</h1>
    </div>
  )
}

export default NavBar