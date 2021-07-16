import {
  useQuery,
  useMutation,
  gql
} from "@apollo/client";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { MARK_TODO_AS_COMPLETED, REMOVE_TODO_TASK } from "../gql/mutation.gql";
import { TASKS_LIST } from "../gql/queries.gql";
import AddTaskForm from "./AddTaskForm";


const socket = io("http://localhost:4000", {
  transports: ['websocket', 'polling','flashsocket']
});



const TaskListComponent = () => {
  const { loading, error, data, refetch } = useQuery(TASKS_LIST);
  const [markTaskAsCompleted, { data: markTaskCompleteData }] = useMutation(MARK_TODO_AS_COMPLETED);
  const [removeTask, { data: remoteTaskData }] = useMutation(REMOVE_TODO_TASK,  
    // {
    //     update(cache, { data: { removeTask } }) {
    //         cache.modify({
    //         fields: {
    //             tasks(existingTodoTask = []) {
    //             const newTodoRef = cache.writeFragment({
    //                 data: removeTask,
    //                 fragment: gql`
    //                 fragment NewTodo on Todo {
    //                     id
    //                     title
    //                     description
    //                     isCompleted
    //                 }
    //                 `
    //             });
    //             //   return [...existingTodoTask, newTodoRef];
    //             }
    //         }
    //         });
    //     }
    // }
    );
  const handleMarkTaskAsCompleted = (taskId) => {
    markTaskAsCompleted({
        variables: {
            markTaskAsCompleteData: {
                taskId
            }
        }
    })
  }
  const handleRemoveTask = (taskId) => {
    removeTask({
        variables: {
            removeTaskData: {
                taskId
            }
        }
    })
  }

  const [todoTaskList, setTodoTaskList] = useState([])
  useEffect(() => {
    
    socket.on("connection", data => {
      console.log("data",data)
    });
    handleWssNewTaskAdded()
    handleWssTaskRemoved()
    handleWssMarkTaskAsCompleted()
    return () => socket.disconnect();
  }, []);
  const handleWssNewTaskAdded = () => {
    socket.on("newTodoTaskAdded", data => {
        refetch()
    });
  }
  const handleWssTaskRemoved = () => {
    socket.on("todoTaskRemoved", data => {
        refetch()
    });
  }
  const handleWssMarkTaskAsCompleted = () => {
    socket.on("todoTaskMarkAsCompleted", data => {
        refetch()
    });
  }
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return <>
    <AddTaskForm/>
    <table>
        <tbody>
            {data.tasks.map(({ id, title, description, isCompleted }) => (
                <tr
                    key={id}
                >
                    <td>{title}<br/>{description}</td>
                    <td>{isCompleted ? 'Completed':'Pending'}</td>
                    <td>
                        <button
                            onClick={()=>handleMarkTaskAsCompleted(id)}
                        >
                            Mark As Complete
                        </button>
                        <button
                            onClick={()=>handleRemoveTask(id)}
                        >
                            Remove
                        </button>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
  </>
}



export default TaskListComponent;
