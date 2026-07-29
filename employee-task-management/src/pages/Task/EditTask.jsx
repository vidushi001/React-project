import React from 'react'

function EditTask() {
  return (
    <div className="max-w-5xl mx-auto p-8">

        <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Edit Task</h1>
        <p className="text-gray-500 mt-2">
            Edit Existing task to an employee.
        </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">

        <form>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            
            <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                Task Title
                </label>

                <input
                type="text"
                placeholder="Enter task title"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                />
            </div>

            <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                Assign Employee
                </label>

                <select
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none">

                <option>Select Employee</option>
                <option>John</option>
                <option>Emma</option>
                <option>David</option>
                <option>Sophia</option>

                </select>
            </div>

            <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                Priority
                </label>

                <select
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none">

                <option>High</option>
                <option selected>Medium</option>
                <option>Low</option>

                </select>
            </div>

            <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                Status
                </label>

                <select
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none">

                <option>Pending</option>
                <option>In Progress</option>
                <option>Completed</option>

                </select>
            </div>

            <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                Due Date
                </label>

                <input
                type="date"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>

            <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                Estimated Hours
                </label>

                <input
                type="number"
                placeholder="8"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>

            </div>


            <div className="mt-6">

            <label className="block text-sm font-semibold text-gray-700 mb-2">
                Description
            </label>

            <textarea
                rows="5"
                placeholder="Enter task description..."
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none resize-none"></textarea>

            </div>


            <div className="flex justify-end gap-4 mt-8">

            <button
                type="reset"
                className="px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-100">
                Cancel
            </button>

            <button
                type="submit"
                className="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700">
                Save Task
            </button>

            </div>

        </form>

        </div>

  </div>
  )
}

export default EditTask