// 🧩 Task 2 — Fetch Data Using Axios in componentDidMount

// Concepts: Mounting Phase, Axios, State Management

// 📝 Instructions

// Create a class component PostList.jsx

// Use Axios to fetch data from:
// 👉 https://jsonplaceholder.typicode.com/posts

// Store the first 5 post titles in state.

// Display them in a list on the screen.

// 💡 Output Example:

// Post Titles:
// 1. sunt aut facere repellat provident occaecati
// 2. qui est esse
// 3. ea molestias quasi exercitationem
// 4. eum et est occaecati
// 5. nesciunt quas odio





import {Component} from 'react';
import axios from "axios";

export class AxioMount extends Component{
    constructor(){
        super()
            this.state={postTitles:[]}
        }
  fetchData(){
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(response => { this.setState({postTitles:response.data.slice(0,5)})})
    .catch(err => console.error(err));
  }

  componentDidMount(){
    this.fetchData()
  }

    render(){
        return <div>
        <h2>Post Titles:</h2>
        {this.state.postTitles === undefined ? (
          <h3>Loading ...</h3>
        ) : (
          this.state.postTitles.map((user) => (
            <div key={user.id} style={{border: "1px solid green",margin: "5px",padding: "5px",width: "200px", }}>
              {user.title}
            </div>
          ))
        )}
        </div>
    }
}
