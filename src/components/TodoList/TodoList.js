import styles from './TodoList.module.css';
import TodoItem from "./../TodoItem/TodoItem";

function TodoList({ todos }) {
   return (
      <div>
         <h2 className={styles.tasks}>Tasks</h2>
         {
            todos.map((todo) => {
               return (
                  <TodoItem key={todo.id} todo={todo} />
               )
            })
         }
      </div>
   )
}

export default TodoList;
