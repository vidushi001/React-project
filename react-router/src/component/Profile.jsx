import React from 'react'

function Profile() {
  const user = {
    name: "John Doe",
    email: "john@example.com",
    phone: "+91 9876543210",
    location: "New Delhi, India",
    role: "Frontend Developer",
    image: "https://i.pravatar.cc/300?img=12",
    bio: "Passionate frontend developer with experience in React, Tailwind CSS, and JavaScript. Loves building beautiful and responsive web applications."
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">

        {/* Cover */}
        <div className="h-48 bg-gradient-to-r from-blue-600 to-purple-600"></div>

        {/* Profile */}
        <div className="px-8 pb-8">

          {/* Image */}
          <div className="-mt-16 flex justify-center">
            <img
              src={user.image}
              alt={user.name}
              className="w-32 h-32 rounded-full border-4 border-white object-cover shadow-lg"
            />
          </div>

          {/* Name */}
          <div className="text-center mt-4">
            <h1 className="text-3xl font-bold">{user.name}</h1>
            <p className="text-blue-600 font-medium">{user.role}</p>
          </div>

          {/* Bio */}
          <div className="mt-6 text-center max-w-2xl mx-auto">
            <p className="text-gray-600">{user.bio}</p>
          </div>

          {/* User Information */}
          <div className="grid md:grid-cols-2 gap-6 mt-10">

            <div className="bg-gray-50 p-5 rounded-xl shadow">
              <h3 className="text-lg font-semibold mb-3">
                Personal Information
              </h3>

              <p className="mb-2">
                <span className="font-semibold">Email:</span> {user.email}
              </p>

              <p className="mb-2">
                <span className="font-semibold">Phone:</span> {user.phone}
              </p>

              <p>
                <span className="font-semibold">Location:</span> {user.location}
              </p>
            </div>

            <div className="bg-gray-50 p-5 rounded-xl shadow">
              <h3 className="text-lg font-semibold mb-3">
                Statistics
              </h3>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Orders</span>
                  <span className="font-bold">24</span>
                </div>

                <div className="flex justify-between">
                  <span>Wishlist</span>
                  <span className="font-bold">12</span>
                </div>

                <div className="flex justify-between">
                  <span>Reviews</span>
                  <span className="font-bold">18</span>
                </div>

                <div className="flex justify-between">
                  <span>Member Since</span>
                  <span className="font-bold">2024</span>
                </div>
              </div>
            </div>

          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-4 mt-10">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Edit Profile
            </button>

            <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50">
              Change Password
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Profile;