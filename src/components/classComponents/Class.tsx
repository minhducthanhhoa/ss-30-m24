import React, { Component } from 'react'
interface State{
    name:string;
}
interface Props{

}

export default class Class extends Component<Props,State> {
    constructor(props:Props){
        super(props);
        this.state = {
            name: "minh thu",
        }
    }
    handleClick = () => {
        console.log("2222");
        this.setState({
            name:"minh ha",
        })
    }
  render() {
    return (
      <div>
        <p>Xin chào {this.state.name}</p>
        <button onClick={this.handleClick}>Click</button>
      </div>
    )
  }
}

