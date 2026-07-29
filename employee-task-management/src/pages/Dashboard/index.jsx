
import Card from "../../components/Card";
import Table from "../../components/Table"
import {useSelector } from 'react-redux'

function Dashboard() {
  let userdata = useSelector(
    (state) => state.auth)
    console.log(userdata)
  const tasksList = [
    {
      id: 1,
      title: "Create Login API",
      employee: "John",
      priority: "High",
      status: "Pending",
    },
    {
      id: 2,
      title: "Fix Dashboard UI",
      employee: "David",
      priority: "Medium",
      status: "Completed",
    },
    {
      id: 3,
      title: "Deploy Project",
      employee: "Emma",
      priority: "High",
      status: "In Progress",
    },
    {
      id: 4,
      title: "Write Documentation",
      employee: "Sophia",
      priority: "Low",
      status: "Pending",
    },
  ];

  return (
    <>
      
          <Card />
          <Table tasks = {tasksList} />
    </>
    
  );
}

export default Dashboard;