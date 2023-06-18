import React from 'react'

const LineItems = ({id , user}) => {
  return (
    <div key={id} className='employee'>
        {          
          <div className='Card'>
          <div className='image-container'>
            <img src= {user.avatar} alt="" />
          </div>
         
          <div className='name-container'>
            <span>{user.first_name}</span>   
            <span> {user.last_name}</span>   
          </div>

          <p>Email : {user.email}</p>
          </div>
          
        }

    </div>
  )
}

export default LineItems