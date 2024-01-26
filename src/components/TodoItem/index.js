// Write your code here
import './index.css'
import {useState} from 'react'

const TodoItem = props => {
  const {todoDetails, deleteTodo} = props
  const {id, title} = todoDetails
  const [isReadMore, setIsReadMore] = useState(false)
  const buttonText = isReadMore ? 'Save' : 'Edit'
  const onClickButton = () => setIsReadMore(prevStatus => !prevStatus)
  const onDeleteTodo = () => {
    deleteTodo(id)
  }

  return (
    <li className="todo-item">
      <p className="title">{title}</p>
      <button type="button" className="delete-btn" onClick={onDeleteTodo}>
        Delete
      </button>

      <button type="button" onClick={onClickButton}>
        {buttonText}
      </button>
    </li>
  )
}

export default TodoItem
