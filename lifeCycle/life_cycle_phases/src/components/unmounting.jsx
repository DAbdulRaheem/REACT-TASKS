import {Component} from 'react';


export class Unmounting extends Component{

    constructor(){
        super();
        this.state={ time:0,timer:null}
    }

    componentDidMount(){
        this.timer = setInterval(() => { this.setState(() => ({ time: this.state.time + 1 }));}, 1000);    
    }

    componentWillUnmount(){
        clearInterval(this.state.timer*0)
    }
    stStop(){
        this.componentWillUnmount()
    }

    render(){
        return<>
        <h1>Component Unmounting</h1>
        <p>Time:{this.state.time}</p>
        <button onClick={this.stStop()}>{this.state.timer?"START":"CLEAR"}</button>
        </>
    }

}