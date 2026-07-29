import React from 'react'
import {
  FaTasks,
  FaCheckCircle,
  FaClock,
  FaUsers
} from "react-icons/fa";

function Card() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="bg-white rounded-xl shadow p-6 flex justify-between">

              <div>

                <p className="text-gray-500">Total Tasks</p>

                <h2 className="text-3xl font-bold mt-2">120</h2>

              </div>

              <FaTasks className="text-blue-600 text-4xl" />

            </div>

            <div className="bg-white rounded-xl shadow p-6 flex justify-between">

              <div>

                <p className="text-gray-500">Completed</p>

                <h2 className="text-3xl font-bold mt-2 text-green-600">
                  90
                </h2>

              </div>

              <FaCheckCircle className="text-green-600 text-4xl" />

            </div>

            <div className="bg-white rounded-xl shadow p-6 flex justify-between">

              <div>

                <p className="text-gray-500">Pending</p>

                <h2 className="text-3xl font-bold mt-2 text-yellow-500">
                  20
                </h2>

              </div>

              <FaClock className="text-yellow-500 text-4xl" />

            </div>

            <div className="bg-white rounded-xl shadow p-6 flex justify-between">

              <div>

                <p className="text-gray-500">Employees</p>

                <h2 className="text-3xl font-bold mt-2 text-purple-600">
                  25
                </h2>

              </div>

              <FaUsers className="text-purple-600 text-4xl" />

            </div>

          </div>
  )
}

export default Card