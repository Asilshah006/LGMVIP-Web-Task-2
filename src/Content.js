import React from 'react'
import ItemList from './ItemList'

const Content = ({users}) => {
  return (
    <main>
        {users.length ? (
            <ItemList
             users = {users}/>
          ):(
            <p> No User To display</p>
          )
        }
    </main>
  )
}

export default Content