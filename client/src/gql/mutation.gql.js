import {
    gql
  } from "@apollo/client";

const ADD_TODO_TASK = gql`
  mutation CreateTask($createNewTaskData: CreateTaskInput!) {
    createTask(createNewTaskData: $createNewTaskData) {
      id
      title
      description
      isCompleted
    }
  }
`;

const MARK_TODO_AS_COMPLETED = gql`
  mutation MarkTaskAsCompleteMutation($markTaskAsCompleteData: MarkTaskAsCompleteInput!) {
    markTaskAsComplete(markTaskAsCompleteData: $markTaskAsCompleteData) {
      id
      title
      isCompleted
      description
    }
  }
`;
const REMOVE_TODO_TASK = gql`
  mutation RemoveTaskMutation($removeTaskData: RemoveTaskInput!) {
    removeTask(removeTaskData: $removeTaskData) {
      id
      title
      description
      isCompleted
    }
  }
`;

export {
  ADD_TODO_TASK,
  MARK_TODO_AS_COMPLETED,
  REMOVE_TODO_TASK
}