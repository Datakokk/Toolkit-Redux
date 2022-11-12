import { useState } from "react";
import { useGetTodoQuery, useGetTodosQuery } from "./store/apis";

export const TodoApp = () => {

    const [element, setElement] = useState(1)
    //const { data: todos = [], isLoading } = useGetTodosQuery();
    const { data: todo, isLoading } = useGetTodoQuery(element);

    // const toNext = () => {
    //   setElement(element + 1);
    // }
    const toPrev = () => {
      if( element === 1 )return;
      setElement( element - 1)
    }
  return (
    <>
        <h1>Todos - RTK Query</h1>    
        <hr />
        <h4>isLoading: { isLoading ? 'True': 'False'}</h4>

        <pre>{ JSON.stringify(todo)}</pre>
        
        <button
          onClick={ () => setElement(element + 1 ) }
        >
            Next Todo
        </button>

        <button
          onClick={ toPrev }
        >
            Prev Todo
        </button>

        {/* <ul>
          { todos.map( todo => (
            <li key={todo.id}>
              <strong>{ todo.completed ? 'DONE' : 'Pending'}</strong>
              { todo.title}
            </li>
          ))}
        </ul> */}

    </>
  )
}
