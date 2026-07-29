import React from 'react'

function Table({tasks=[],dashboard=true,subject='',onButtonClick}) {
  return (
    <div className="bg-white rounded-xl shadow mt-8">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">
                {subject || 'Recent tasks'}
              </h2>
              <button onClick={onButtonClick} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                         { dashboard ? 'View All' : 'Add new Task'} 
              </button>
            </div>

            <div className="overflow-x-auto">

              <table className="w-full">

                <thead className="bg-gray-100">

                  <tr>

                    <th className="text-left p-4">Task</th>

                    <th className="text-left p-4">Employee</th>

                    <th className="text-left p-4">Priority</th>

                    <th className="text-left p-4">Status</th>

                  </tr>

                </thead>

                <tbody>

                  {tasks.map((task) => (

                    <tr
                      key={task.id}
                      className="border-b hover:bg-gray-50"
                    >

                      <td className="p-4">{task.title}</td>

                      <td className="p-4">{task.employee}</td>

                      <td className="p-4">

                        <span
                          className={`px-3 py-1 rounded-full text-sm text-white
                          ${
                            task.priority === "High"
                              ? "bg-red-500"
                              : task.priority === "Medium"
                              ? "bg-yellow-500"
                              : "bg-green-500"
                          }`}
                        >
                          {task.priority}
                        </span>

                      </td>

                      <td className="p-4">

                        <span
                          className={`px-3 py-1 rounded-full text-sm
                          ${
                            task.status === "Completed"
                              ? "bg-green-100 text-green-700"
                              : task.status === "Pending"
                              ? "bg-red-100 text-red-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {task.status}
                        </span>

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          </div>
  )
}

export default Table