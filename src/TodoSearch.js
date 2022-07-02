import styles from './../src/TodoSearch.module.css';

function TodoSearch() {
   return (

      <div>
         <h2 className={styles.search_title}>Search</h2>
         <input placeholder='Type to search' className={styles.search_input} type="text" />
         <button className={styles.default}>Important</button>
         <button className={styles.default}>Done</button>
      </div>
   )
}

export default TodoSearch;