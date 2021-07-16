import {
    gql
  } from "@apollo/client";
const TASKS_LIST = gql`
  query getTasksQuery {
    tasks {
      id
      title
      description
      isCompleted
    }
  }
`

export {
    TASKS_LIST
}