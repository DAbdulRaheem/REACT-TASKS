import {Component} from 'react';
import { FetchApi } from './components/FetchApi';
import { AxioMount } from './components/AxioMount';
import {TodoList} from './components/TodoList'
import {Unmounting} from './components/unmounting'

class App extends Component{
  render(){
    return<>
    {/* <FetchApi/>
    <AxioMount/> */}
    <TodoList />
    {/* <Unmounting /> */}
    </>
  }
}
export default App