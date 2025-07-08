import React from 'react'

const TaskList = () => {
  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5 mt-10'>
      <div className='flex-shrink-0 h-full w-[300px] bg-red-400 rounded-xl p-5'>
        <div className='flex justify-between items-center'>
          <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>High</h3>
          <h3 className='text-sm'>7-July-2025</h3>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make A Project</h2>
        <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias quasi minus voluptatem exercitationem nulla amet.</p>
      </div>
    </div>
  )
}

export default TaskList