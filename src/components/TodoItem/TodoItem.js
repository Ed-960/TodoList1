import React from 'react';
import styles from './TodoItem.module.css';

class TodoItem extends React.Component {

   state = {
      important: false,
      done: false,
      edit: true,
      value: ""
   }

   onImportantClick = (event) => {
      this.setState({
         important: !this.state.important
      })
   }

   onDoneClick = (event) => {
      this.setState({
         done: !this.state.done
      })
   }


   onEditClick = (event) => {
      this.setState({
         edit: !this.state.edit,
      })
   }

   onChange = (evt) => {
      this.setState({
         value: evt.target.value,
      });
   }

   render() {

      let todo = this.state.edit ? this.props.todo : this.state.edit;

      //const todo1 = this.state.edit ? this.state.value : "";
      const style = {
         color: this.state.important ? 'red' : this.state.done ? 'green' : '#fff'
      };
      const buttonActionValue = this.state.edit ? "Edit" : "Save";
      const inputplaceholder = this.state.edit ? "" : "Enter your task";


      return (
         <div className={styles.item}>
            <label
               style={style}
            >
               {todo.text}
               <input
                  readOnly={this.state.edit}
                  className={styles.todoInput}
                  type="text"
                  onChange={this.onChange}
                  placeholder={inputplaceholder}
               />

               <div>
                  <button onClick={this.onEditClick} className={styles.item_btn_def}><div className={styles.btn_div}>{buttonActionValue}</div></button>
                  <button onClick={this.onImportantClick} className={styles.item_btn_def}><div className={styles.btn_div}>Important</div></button>
                  <button onClick={this.onDoneClick} className={styles.item_btn_def}><div className={styles.btn_div}>Done</div></button>
                  <button className={styles.item_btn_def}><div className={styles.btn_div}>Delete</div></button>
               </div>
            </label>
         </div>
      )
   }
}



export default TodoItem;
