import React from 'react';
import styles from './TodoSearch.module.css';

class TodoSearch extends React.Component {

   clickHandler = () => {
      console.log('Click!')
   }

   render() {
      return (
         <div>
            <h2 className={styles.search_title}>Search</h2>
            <input placeholder='Type to search' className={styles.search_input} type="text" />
            <button
               onClick={this.clickHandler}
               className={styles.default}
            >
               All
            </button>
            <button className={styles.default}>Important</button>
            <button className={styles.default}>Done</button>
         </div >
      )
   }
}

// function TodoSearch() {
//    return (

//       <div>
//          <h2 className={styles.search_title}>Search</h2>
//          <input placeholder='Type to search' className={styles.search_input} type="text" />
//          <button className={styles.default}>All</button>
//          <button className={styles.default}>Important</button>
//          <button className={styles.default}>Done</button>
//       </div>
//    )
// }

export default TodoSearch;