import {useState} from 'react'
import { FaUserAlt, FaLock } from "react-icons/fa";
import {useDispatch} from 'react-redux'
import {login} from '../../feature/auth/authThunk'
import {useNavigate } from 'react-router-dom'

function Index() {
  const [form,setForm] = useState({
    username:"",
    password:""
  });
  const navigate = useNavigate();
const dispacher = useDispatch()
  function handleEmail(e){
    setForm({...form,username:e.target.value})
  }
  function handlePassword(e){
    setForm({...form,password:e.target.value})
    
  }
  async function userLogin(e){
    e.preventDefault();
    let response = await dispacher(login(form))
    if(login.fulfilled.match(response)){
       navigate("/dashboard");
    }else{
      console.log("login again")
    }
    
    console.log(form,response)

  }
  return (
    <div className="min-h-screen flex">

      {/* Left Section */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-700 to-indigo-900 text-white flex-col justify-center items-center p-12">

        <div className="max-w-md">
          <h1 className="text-5xl font-bold mb-6">
            Employee Task Portal
          </h1>

          <p className="text-lg leading-8 text-blue-100">
            Manage your daily tasks, monitor employee progress,
            assign work, and improve team productivity with our
            modern task management system.
          </p>

          <div className="mt-12 space-y-4">

            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-white"></div>
              <span>Task Management</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-white"></div>
              <span>Employee Dashboard</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-white"></div>
              <span>Secure Authentication</span>
            </div>

          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 flex justify-center items-center bg-gray-100">

        <div className="bg-white shadow-2xl rounded-2xl p-10 w-[90%] max-w-md">

          <div className="text-center mb-8">

            <h2 className="text-3xl font-bold text-gray-800">
              Welcome Back
            </h2>

            <p className="text-gray-500 mt-2">
              Login to continue
            </p>

          </div>

          <form className="space-y-6" onSubmit={userLogin}>

            {/* Email */}

            <div>

              <label className="block mb-2 text-sm font-medium text-gray-700">
                Email
              </label>

              <div className="flex items-center border rounded-lg px-3">

                <FaUserAlt className="text-gray-400" />

                <input
                  type="email" value={form.username} onChange={handleEmail}
                  placeholder="Enter email"
                  className="w-full p-3 outline-none"
                />

              </div>

            </div>

            {/* Password */}

            <div>

              <label className="block mb-2 text-sm font-medium text-gray-700">
                Password
              </label>

              <div className="flex items-center border rounded-lg px-3">

                <FaLock className="text-gray-400" />

                <input
                  type="password" value={form.password} onChange={handlePassword}
                  placeholder="Enter password"
                  className="w-full p-3 outline-none"
                />

              </div>

            </div>

            {/* Remember */}

            <div className="flex justify-between items-center text-sm">

              <label className="flex items-center gap-2">

                <input type="checkbox" />

                Remember Me

              </label>

              <button
                type="button"
                className="text-blue-600 hover:underline"
              >
                Forgot Password?
              </button>

            </div>

            {/* Button */}

            <button type ="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
            >
              Login
            </button>

          </form>

          <div className="mt-8 text-center text-gray-500 text-sm">
            © 2026 Employee Task Portal
          </div>

        </div>

      </div>

    </div>
  )
}

export default Index