import {Component} from 'react';
import { FetchApi } from './components/FetchApi';
import { AxioMount } from './components/AxioMount';
import {TodoList} from './components/TodoList'

class App extends Component{
  render(){
    return<>
    <FetchApi/>
    <AxioMount/>
    <TodoList />
    </>
  }
}
export default App