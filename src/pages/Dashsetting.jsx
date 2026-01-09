import React from 'react'
import { MdNotificationsNone } from "react-icons/md";
import Riva from "../assets/Homeimage/Riva.png";
function Dashsetting() {
  return (
    <div>
          <div className="flex justify-between mb-4">
              <h1 className="text-2xl font-bold">Settings</h1>
              <div className="flex gap-2 items-center">
                <MdNotificationsNone size={25} />
                <h1 className="font-bold">Riva Shakya</h1>
                <img
                  src={Riva}
                  alt=""
                  className="w-8 h-8 rounded-full object-cover"
                />
              </div>
            </div>
            <div className='flex gap-4 justify-end border-b border-gray-500 p-2'>
              <button className=' border-gray-400 border text-gray-500 w-25 p-1 rounded-lg'>Cancel</button>
              <button className=' rounded-lg bg-[#003372] w-30 text-white p-1 '>Save Changes</button>
            </div> 

          <div className='flex mt-10 gap-50'>
            <div>
              <label htmlFor="first">First Name</label> <br />
              <input type="text" className=' border-gray-400 border-2 text-gray-500 w-50 p-1 rounded-lg'/>
            </div>
            <div>
               <label htmlFor="last">Last Name</label> <br />
              <input type="text" className=' border-gray-400 border-2 text-gray-500 w-50 p-1 rounded-lg'/>
            </div>
          </div>

          <div className='flex mt-10 gap-50'>
            <div>
              <label htmlFor="user">Username</label> <br />
              <input type="text" className=' border-gray-400 border-2 text-gray-500 w-50 p-1 rounded-lg'/>
            </div>
            <div>
               <label htmlFor="password">Password</label> <br />
              <input type="text" className=' border-gray-400 border-2 text-gray-500 w-50 p-1 rounded-lg'/>
            </div>
          </div>

          <div className='flex mt-10 gap-50'>
            <div>
              <label htmlFor="location">Location</label> <br />
              <input type="text" className=' border-gray-400 border-2 text-gray-500 w-50 p-1 rounded-lg'/>
            </div>
            <div>
               <label htmlFor="email">Email</label> <br />
              <input type="text" className=' border-gray-400 border-2 text-gray-500 w-50 p-1 rounded-lg'/>
            </div>
          </div>

          <div className='flex mt-10 gap-50'>
            <div>
              <label htmlFor="contact">Contact Number</label> <br />
              <input type="text" className=' border-gray-400 border-2 text-gray-500 w-50 p-1 rounded-lg'/>
            </div>
            <div>
               <label htmlFor="skill">Skill/Occupation</label> <br />
              <input type="text" className=' border-gray-400 border-2 text-gray-500 w-50 p-1 rounded-lg'/>
            </div>
          </div>

          <div className='mt-10'>
            <label htmlFor="biography">Biography</label> <br />
            <textarea className='border-gray-400 border-2 w-90 h-30 resize-none rounded-lg'></textarea>
          </div>

    </div>
  )
}

export default Dashsetting
