import { Component } from 'react';
import TodoItem from '../TodoItem';
import './index.css';

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]


class SimpleTodos extends Component {
  state = {
    nameInput: '',
    todoList: initialTodosList,
  };

  onChangeNameInput = (event) => {
    this.setState({
      nameInput: event.target.value,
    });
  };

  deleteTodo = (id) => {
    const { todoList } = this.state;
    const updatedTodosList = todoList.filter((eachTodo) => eachTodo.id !== id);

    this.setState({
      todoList: updatedTodosList,
    });
  };

  onClickButton = () => {
    const { todoList, nameInput } = this.state;
    const len = todoList.length + 1;

    if (nameInput.trim() === '') return;

    // Improved regex to match numbers at the end of the input
    const isNumber = /\d+$/.test(nameInput);

    if (isNumber) {
      const numberOfItems = parseInt(nameInput.match(/\d+$/)[0], 10);

      if (!isNaN(numberOfItems) && numberOfItems > 0) {
        const baseTitle = nameInput.replace(/\d+$/, '').trim();

        for (let i = 1; i <= numberOfItems; i++) {
          const newTodo = {
            id: len + i - 1,
            title: baseTitle,
          };

          this.setState((prevState) => ({
            todoList: [...prevState.todoList, newTodo],
            nameInput: '',
          }));
        }
      }
    } else {
      const newTodo = {
        id: len,
        title: nameInput,
      };

      this.setState((prevState) => ({
        todoList: [...prevState.todoList, newTodo],
        nameInput: '',
      }));
    }
  };

  render() {
    const { todoList, nameInput } = this.state;

    return (
      <div className='simple-todos-app-container'>
        <div className='simple-todos-container'>
          <h1 className='heading'>Simple Todos</h1>
          <input
            type='text'
            className='name-input'
            placeholder='Your Name'
            value={nameInput}
            onChange={this.onChangeNameInput}
          />
          <button type='button' onClick={this.onClickButton}>
            {' '}
            Add{' '}
          </button>
          <ul className='todos-list'>
            {todoList.map((eachTodo) => (
              <TodoItem
                key={eachTodo.id}
                todoDetails={eachTodo}
                deleteTodo={this.deleteTodo}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default SimpleTodos;

