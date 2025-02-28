import React from 'react'

const Card = ({task ,id, doneTask}) => {
  return (
    <div  className='border-2 p-5 flex-col rounded-sm'>
        <div>
            <h1 className='text-2xl text-center mb-5 flex-col'>{task}</h1>
            <button className='border-2 p-5 hover:bg-black hover:text-white rounded-sm' onClick={()=>doneTask(id)}>Done Task</button>
        </div>
    </div>
  )
}

export default Card