// 🧩 Task 3 — Loading Message While Fetching Data

// Concepts: Conditional Rendering, componentDidMount, Fetch API

// 📝 Instructions

// Create a class component TodoList.jsx

// Initialize state:

// { todos: [], loading: true }


// In componentDidMount(), fetch todos from:
// 👉 https://jsonplaceholder.typicode.com/todos

// While data is loading → show "Loading..."

// After fetch → display todo titles

// 💡 Output Example:

// Loading...


// (After few seconds)

// Todo List:
// - delectus aut autem
// - quis ut nam facilis et officia
// ...


import {Component} from 'react';
import axios from 'axios';

export class TodoList extends Component{
    constructor(){
        super();
        this.state={ todos: [], loading: true }
    }

    fetchTodo(){
        axios.get("https://jsonplaceholder.typicode.com/todos")
        .then (response => this.setState({todos:response.data.slice(0,5)}))
        .catch(err => console.error(err));

    }
    
    componentDidMount(){
        this.fetchTodo()
      }
    


    render(){
        return<div>
        
        <h2>Todo's:</h2>
        {this.state.todos === undefined ? this.state.loading 
        : (
          this.state.todos.map((user) => (
            <div key={user.id}>
                <ul>
                    <li>{user.title}</li>
                </ul>
            </div>
          ))
        )}
      </div>
    }

}
















