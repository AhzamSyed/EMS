import React from 'react'

const CreateTask = () => {
  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
        <form className="flex flex-wrap justify-between w-full gap-6">

          <div className="w-full md:w-[58%] space-y-4">
            <div>
              <h3 className="text-lg text-gray-300 mb-1">Task Title</h3>
              <input
                className="text-sm py-2 px-3 w-full rounded outline-none bg-transparent border border-gray-400"
                type="text"
                placeholder="Make a UI design"
              />
            </div>

            <div>
              <h3 className="text-lg text-gray-300 mb-1">Date</h3>
              <input
                className="text-sm py-2 px-3 w-full rounded outline-none bg-transparent border border-gray-400"
                type="date"
              />
            </div>

            <div>
              <h3 className="text-lg text-gray-300 mb-1">Assign to</h3>
              <input
                className="text-sm py-2 px-3 w-full rounded outline-none bg-transparent border border-gray-400"
                type="text"
                placeholder="Employee name"
              />
            </div>

            <div>
              <h3 className="text-lg text-gray-300 mb-1">Category</h3>
              <input
                className="text-sm py-2 px-3 w-full rounded outline-none bg-transparent border border-gray-400"
                type="text"
                placeholder="design, dev, etc"
              />
            </div>
          </div>

          <div className="w-full md:w-[38%] flex flex-col justify-between">
            <div className="mb-4">
              <h3 className="text-lg text-gray-300 mb-1">Description</h3>
              <textarea
                className="text-sm py-2 px-3 w-full rounded outline-none bg-transparent border border-gray-400 resize-none"
                rows="9"
                placeholder="Write a description..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-emerald-500 py-3 px-5 w-full rounded text-white hover:bg-emerald-700 transition duration-200"
            >
              Create Task
            </button>
          </div>
        </form>
      </div>
  )
}

export default CreateTask