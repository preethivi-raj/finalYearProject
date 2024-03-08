import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import Filter from './Filter';

const Transaction = () => {
    const { currentUser } = useSelector((state) => state.user);
    const [showCom , setCom] = useState(false)
    const handleCom = () => {
    setCom(true)
    }
    console.log(currentUser.username);
  return (
    <div>
    {currentUser ? 
    <div class="mt-3">
      <div class="p-7">
        <div class="flex justify-center"><img class="h-24 w-24 self-center cursor-pointer rounded-full object-cover mt-2" src={currentUser.profilePicture} alt="Profile Picture" /></div>
        <h1 class="text-center mt-2 text-sm uppercase font-bold">{currentUser.username}</h1>
        <p class="mt-2 text-center text-xs mb-4 text-gray-500">
          {currentUser.username === 'Ram' ? "236181403602518" : (currentUser.username === 'Akhil' ? "532547708117061" : "536780108159385")}
        </p>
        <div>
          <div class="flex justify-center"><button className=' bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded' onClick={handleCom}>Button</button></div>
          {showCom ? <Filter/> : <p class="flex justify-center text-red-600">Click Here To Show The Transaction</p>}
        </div>
      </div>
    </div>
    : 
    <p class="text-center bg-red-400 px-4 py-12 max-w-2xl mx-auto  border-8">You Are Not Logged In <br /> Please Login First</p>
    }
    </div>
  )
}

export default Transaction