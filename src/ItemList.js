import React from 'react'
import LineItems from './LineItems'

const ItemList = ({users}) => {
  return (
    <>
        {users.map(user => (
             <LineItems 
               key = {user.id}
               user = {user}                  
              />
            ))
        }
    </>
  )
}

export default ItemList