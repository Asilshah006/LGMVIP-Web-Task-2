import React from 'react'

const Nav = ({title , fetchItems}) => {
  return (
    <header>
        <h2>{title}</h2>
        <nav>
            <div>
                <button type='Submit' onClick={fetchItems}>Get Users</button>
            </div>
            
        </nav>
    </header>
  )
}

export default Nav