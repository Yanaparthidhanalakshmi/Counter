import React,{Component} from "react";
import "../App.css"
export default class Counter extends Component{
    constructor(Props){
        super(Props)
        this.state={
               count:0
        }
    }
    inc=()=>{
        this.setState({count:this.state.count+1})
    }
    dec=()=>{
        this.setState({count:this.state.count-1})
    }
    reset=()=>{
        this.setState({count:0})
    }
    render(){
        return(
            <>
              <div id="counter">
                <h1 id="head">COUNTER APPLICATION</h1>
              <button onClick={this.inc} className="btn increment">+</button>
            <span id="val">{this.state.count}</span>
            <button onClick={this.dec} className="btn decrement">-</button><br />
            <button onClick={this.reset} id="b2">Reset</button>
              </div>
            </>
        )
    }
}