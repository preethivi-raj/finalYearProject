import React from 'react'

const List = () => {
    const data =["name" , "kuamr" , "sanjai" , "Preethiviraj"]
    const list = data.map((item) => {
        return <li class="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">{item}</li>
    })
  return (
    <>{list}</>
  )
}

export default List