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


// import {Component} from 'react';
// import axios from 'axios';

// export class TodoList extends Component{
//     constructor(){
//         super();
//         this.state={ todos: [], loading: true }
//     }

//     fetchTodo(){
//         axios.get("https://jsonplaceholder.typicode.com/todos")
//         .then (response => this.setState({todos:response.data.slice(0,5)}))
//         .catch(err => console.error(err));

//     }
    
//     componentDidMount(){
//         this.fetchTodo()
//       }
    


//     render(){
//         return<div>
        
//         <h2>Todo's:</h2>
//         {this.state.todos === undefined ? this.state.loading 
//         : (
//           this.state.todos.map((user) => (
//             <div key={user.id}li>
//                 <ul>
//                     <li>{user.title}</li>
//                 </ul>
//             </div>
//           ))
//         )}
//       </div>
//     }

// }
















import { Component } from 'react';
import './todolist.css';
import axios from 'axios';

export class TodoList extends Component {
    constructor() {
        super();
        this.state = { todos: [], loading: true };
    }

    fetchTodo() {
        axios.get("https://my-site-django-1.onrender.com/mobiles/")
            .then(response => {
                console.log(response.data);  // Check in browser console
                this.setState({ todos: response.data, loading: false });
            })
            .catch(err => {
                console.error(err);
                this.setState({ loading: false });
            });
    }

    componentDidMount() {
        this.fetchTodo();
    }

    render() {
        const { loading, todos } = this.state;

        if (loading) return <div>Loading...</div>;
        if (!Array.isArray(todos) || todos.length === 0) return <div>No todos found.</div>;

        // Make sure the keys below exist on your objects
        return (
          <div className="todo-list-container">
            <h2>Todos:</h2>
            {todos.map((user) => (
              <div key={user.id}>
                <table className="todo-item-table">
                  <thead>
                    <tr>
                      <th colSpan="2">{user.title}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Brand</strong></td>
                      <td>{user.brand}</td>
                    </tr>
                    <tr>
                      <td colSpan="2">
                        <img
                          src={user.image_url}
                          alt={user.title}
                          className="todo-img"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        );
        
    }
}
