import {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Table from '../../components/Table';
import {useDispatch,useSelector} from 'react-redux'
import {getTasklist} from '../../feature/task/taskThunk'

function Index() {
  const dispatch = useDispatch()
  const navigation = useNavigate()
  const { taskData, loading, error } = useSelector(
    (state) => state.task
  );

  //   const tasksList = [
  //   {
  //     id: 1,
  //     title: "Create Login API",
  //     employee: "John",
  //     priority: "High",
  //     status: "Pending",
  //   },
  //   {
  //     id: 2,
  //     title: "Fix Dashboard UI",
  //     employee: "David",
  //     priority: "Medium",
  //     status: "Completed",
  //   },
  //   {
  //     id: 3,
  //     title: "Deploy Project",
  //     employee: "Emma",
  //     priority: "High",
  //     status: "In Progress",
  //   },
  //   {
  //     id: 4,
  //     title: "Write Documentation",
  //     employee: "Sophia",
  //     priority: "Low",
  //     status: "Pending",
  //   },
  // ];

  useEffect(()=>{
    let username= localStorage.getItem('userName')
    dispatch(getTasklist(username))
  },[])

  function handleAddtask(){
    navigation('/addTask')
  }

    if (loading) return <h2>Loading...</h2>;

    if (error) return <h2>{error}</h2>;
  return (
  <Table tasks = {taskData} subject={'All Task'} onButtonClick= {handleAddtask} dashboard={false} /> 
  )
}

export default Index