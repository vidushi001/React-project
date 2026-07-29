import React from 'react'

function index() {
  return (
    <div className="max-w-6xl mx-auto p-8">

    <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
            My Profile
        </h1>

        <p className="text-gray-500 mt-2">
            Manage your personal information.
        </p>
    </div>

    <div className="grid lg:grid-cols-3 gap-8">

        <div className="bg-white rounded-xl shadow-lg p-8 text-center">

            <img
                src="https://i.pravatar.cc/180"
                className="w-40 h-40 rounded-full mx-auto border-4 border-blue-500"
            />

            <h2 className="text-2xl font-bold mt-6">
                John Smith
            </h2>

            <p className="text-gray-500">
                Senior Software Engineer
            </p>

            <div className="mt-6">

                <button
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                    Upload Photo
                </button>

            </div>

            <hr className="my-8" />

            <div className="space-y-4 text-left">

                <div>
                    <p className="text-gray-500 text-sm">Employee ID</p>
                    <p className="font-semibold">EMP1025</p>
                </div>

                <div>
                    <p className="text-gray-500 text-sm">Department</p>
                    <p className="font-semibold">Development</p>
                </div>

                <div>
                    <p className="text-gray-500 text-sm">Role</p>
                    <p className="font-semibold">Admin</p>
                </div>

                <div>
                    <p className="text-gray-500 text-sm">Joining Date</p>
                    <p className="font-semibold">12 Jan 2022</p>
                </div>

            </div>

        </div>

        <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-8">

            <h2 className="text-2xl font-bold mb-8">
                Personal Information
            </h2>

            <form>

                <div className="grid md:grid-cols-2 gap-6">

                    <div>

                        <label className="block mb-2 font-medium">
                            First Name
                        </label>

                        <input
                            type="text"
                            value="John"
                            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none" />

                    </div>

                    <div>

                        <label className="block mb-2 font-medium">
                            Last Name
                        </label>

                        <input
                            type="text"
                            value="Smith"
                            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none" />

                    </div>

                    <div>

                        <label className="block mb-2 font-medium">
                            Email
                        </label>

                        <input
                            type="email"
                            value="john@gmail.com"
                            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none" />

                    </div>

                    <div>

                        <label className="block mb-2 font-medium">
                            Phone
                        </label>

                        <input
                            type="text"
                            value="+91 9876543210"
                            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none" />

                    </div>

                    <div>

                        <label className="block mb-2 font-medium">
                            City
                        </label>

                        <input
                            type="text"
                            value="Noida"
                            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none" />

                    </div>

                    <div>

                        <label className="block mb-2 font-medium">
                            Country
                        </label>

                        <input
                            type="text"
                            value="India"
                            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none" />

                    </div>

                </div>

                <div className="mt-6">

                    <label className="block mb-2 font-medium">
                        Address
                    </label>

                    <textarea
                        rows="4"
                        className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none resize-none">Sector 62, Noida, Uttar Pradesh</textarea>

                </div>

                <div className="flex justify-end gap-4 mt-8">

                    <button
                        type="reset"
                        className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100">
                        Cancel
                    </button>

                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                        Update Profile
                    </button>

                </div>

            </form>

        </div>

    </div>

</div>

  )
}

export default index