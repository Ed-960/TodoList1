import styles from './TodoForm.module.css';

function TodoForm() {
   return (
      <form>
         <h2 className={styles.myTasks}>My Tasks</h2>
         <input className={styles.todoForm_input} placeholder="What do you have planned?" type="text" />
         <button className={styles.AddTask_btn}>ADD TASK</button>
      </form>
   )
}


export default TodoForm;