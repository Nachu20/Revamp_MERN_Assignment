import React, { useState } from 'react'

const Login = () => {
    const [login,islogin]=useState(false);
  return (
    <div>
       {login ? (
        <p>Welcome back!</p>
      ) : (
        <p>Please log in.</p>
      )}
      <button className='rounded-lg bg-gray-500 w-[120px]' onClick={() => islogin(!login)}>
        {login? 'Log out' : 'Log in'}
      </button>
    </div>
  )
}

export default Login
