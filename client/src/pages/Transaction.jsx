import React from 'react'
import { useSelector } from 'react-redux';
import List from '../components/List';
const Transaction = () => {
    const { currentUser } = useSelector((state) => state.user);
  return (
    <div>
    {currentUser ? 
    <div class="mt-3">
        <div class="p-7">
            <div class="flex justify-center"><img class="h-24 w-24 self-center cursor-pointer rounded-full object-cover mt-2" src={currentUser.profilePicture} alt="Profile Picture" /></div>
            <h1 class="text-center mt-2 text-sm uppercase font-bold">{currentUser.username}</h1>
            <p class="mt-2 text-center text-xs mb-4 text-gray-500">Rifi id</p>
            <ul class="border border-gray-200 rounded overflow-hidden shadow-md">
                <List/>
            </ul>
        </div>
    </div>
    : 
    <p class="text-center bg-red-400 px-4 py-12 max-w-2xl mx-auto  border-8">You Are Not Logged In <br /> Please Login First</p>
    }
    </div>
  )
}

export default Transaction