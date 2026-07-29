import {useState,useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {createNewTask} from '../../feature/task/taskThunk'
import {useNavigate} from 'react-router-dom'
import {getUserName} from '../../feature/auth/authAPI'

function Addtask() {
    let [userNames,setUserNames] = useState([])
    let navigate = useNavigate()
    let dispatch = useDispatch()
    let [form ,setform] = useState({
        title:'',
        employee:'John',
        priority:'High',
        status:'Pending',
        duedate:new Date(),
        estimate:0,
        description:''
    })

    useEffect(()=>{
        async function fetchData() {
            // You can await here
            let userNames = await getUserName();
            setUserNames([...userNames])
            // ...
        }
    fetchData();  
    },[])

    function handleTitle(e) {
        console.log(e.target.value)
        setform({...form,title:e.target.value})
    }
    function handleEmployee(e) {
        setform({...form,employee:e.target.value})
    }
    function handlePriority(e) {
        setform({...form,priority:e.target.value})
    }
    function handleStatus(e) {
        setform({...form,status:e.target.value})
    }
    function handleDuedate(e) {
        setform({...form,duedate:e.target.value})
    }
    function handleEstimate(e) {
        setform({...form,estimate:e.target.value})
    }
    function handleDescription(e) {
        setform({...form,description:e.target.value})
    }

    async function addnewtask(e) {
        e.preventDefault();
        console.log(form)
       let response = await dispatch(createNewTask(form))
        if(createNewTask.fulfilled.match(response)){
              navigate("/tasks");
           }else{
             console.log("error",createNewTask.rejected)
           }
    }
  return (
      <div className="max-w-5xl mx-auto p-8">

        <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Add New Task</h1>
        <p className="text-gray-500 mt-2">
            Create and assign a new task to an employee.
        </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">

        <form onSubmit={addnewtask}>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            
            <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                Task Title
                </label>

                <input
                type="text" value={form.title} onChange={handleTitle}
                placeholder="Enter task title"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                />
            </div>

            <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                Assign Employee
                </label>

                <select value={form.employee} onChange={handleEmployee}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none">

                <option>Select Employee</option>
                {userNames.map((user) => (
                    <option key={user._id} value={user.name}>
                        {user.name}
                    </option>
                    ))}
                
                {/* <option value='Emma'>Emma</option>
                <option value='David'>David</option>
                <option value='Sophia'>Sophia</option> */}

                </select>
            </div>

            <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                Priority
                </label>

                <select value={form.priority} onChange={handlePriority}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none">

                <option value='High'>High</option>
                <option value='Medium'>Medium</option>
                <option value='Low'>Low</option>

                </select>
            </div>

            <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                Status
                </label>

                <select value={form.status} onChange={handleStatus}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none">

                <option value='Pending'>Pending</option>
                <option value='In-Progress'>In Progress</option>
                <option value='Completed'>Completed</option>

                </select>
            </div>

            <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                Due Date
                </label>

                <input
                type="date" value={form.duedate} onChange={handleDuedate}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>

            <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                Estimated Hours
                </label>

                <input value={form.estimate} onChange={handleEstimate}
                type="number"
                placeholder="8"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>

            </div>


            <div className="mt-6">

            <label className="block text-sm font-semibold text-gray-700 mb-2">
                Description
            </label>

            <textarea  value={form.description} onChange={handleDescription}
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

export default Addtask