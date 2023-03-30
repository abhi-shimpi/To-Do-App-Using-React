import React from 'react'

const NavBar = ({ categoryHandler, uniqueCategory }) => {
  return (
      <nav className="navbar">
          <div className="btn-group">
              {
                  uniqueCategory.map((category)=>{
                      return <button key={category} className="btn-group__item" onClick={() => { categoryHandler(category) }}>{category}</button>
                  })
              }
          </div>
      </nav>

  )
}

export default NavBar