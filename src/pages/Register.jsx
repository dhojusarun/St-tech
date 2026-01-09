import React from 'react'

function Register() {
  return (
     <div className="bg-white border mt-25 gap-4  w-[450px] p-4 m-auto flex flex-col items-center">
      <form action="" className="space-y-3">
        <div>
          <label htmlFor="email">
            Email: 
            <br />
            <input
              className="border-2 mt-2 w-64 rounded-2xl outline-none p-2 text-center "
              type="text"
              placeholder="Enter your Email "
            />{" "}
          </label>
        </div>

        <br />
        <div>
          <label htmlFor="password">
            Password: <br />
            <input
              className="border-2 mt-2 w-64 rounded-2xl outline-none p-2 text-center "
              type="text"
              placeholder="Enter your Password"
            />{" "}
          </label>
        </div>

        <br />
        <button className="border p-3 w-64 bg-green-700 text-white">Login</button>
      </form>
      <p>or</p>
      <button className="border p-3 w-64 text-red-500">Login with Google</button>
    </div>
  )
}

export default Register
