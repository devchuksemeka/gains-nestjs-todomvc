import { useMutation, gql } from "@apollo/client"
import { useReducer } from "react"
import { ADD_TODO_TASK } from "../gql/mutation.gql"

const initialState = {
    title: '',
    description: ''
}
const reducer = (state,action) => {
    const {payload,type} = action

    switch(type){
        case "setValue":
            return {...state,...payload}
        case "reset":
            return initialState
        default:
            return state
    }
}
const AddTaskForm = () => {

    const [state, dispatch] = useReducer(reducer, initialState);
    // console.log({
    //     state
    // })
    const [addTodo, { data }] = useMutation(ADD_TODO_TASK, 
        // {
        //     update(cache, { data: { createTask } }) {
        //         cache.modify({
        //         fields: {
        //             tasks(existingTodoTask = []) {
        //             const newTodoRef = cache.writeFragment({
        //                 data: createTask,
        //                 fragment: gql`
        //                 fragment NewTodo on Todo {
        //                     id
        //                     title
        //                     description
        //                     isCompleted
        //                 }
        //                 `
        //             });
        //             return [...existingTodoTask, newTodoRef];
        //             }
        //         }
        //         });
        //     }
        // }
    );
    const handleSubmit = (e) => {
        e.preventDefault()

        addTodo({ 
            variables: { 
                createNewTaskData: {
                    title: state.title,
                    description: state.description,
                }
            } 
        });
        
        dispatch({
            type: 'reset',
        })
    }
    return <>
        <h5>Add New Task</h5>
        <form
            onSubmit={handleSubmit}
        >
            <div>
                <label>Title</label>
                <input 
                    type='text' 
                    placeholder="Enter title"
                    required
                    value={state.title}
                    onChange={(event)=>{
                        const {value} = event.target
                        dispatch({
                            type: 'setValue',
                            payload: {
                                title: value
                            }
                        })
                    }}
                />
            </div>
            <div>
                <label>Description</label>
                <input 
                    type='text' 
                    placeholder="Enter Description"
                    required
                    value={state.description}
                    onChange={(event)=>{
                        const {value} = event.target
                        dispatch({
                            type: 'setValue',
                            payload: {
                                description: value
                            }
                        })
                    }}
                />
            </div>
            <div>
                <button>
                    Add Task
                </button>
            </div>
        </form>
    </>
}

export default AddTaskForm