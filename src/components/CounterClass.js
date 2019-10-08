import React from 'react';

export default class CounterClass extends React.Component {
constructor(){
    super()
    this.state = {
        count: 0,
        favFruit: ''
    }
    this.setCount = this.setCount.bind(this);
    this.setfavFruit = this.setfavFruit.bind(this);
}

    componentDidMount() {
    document.title = `You clicked ${this.state.count} times`;
  }

    componentDidUpdate() {
    document.title = `You clicked ${this.state.count} times`;
  }
    setCount(){
        this.setState({
            count: this.state.count + 1
        })
    }

    setfavFruit(newFav){
        this.setState({
            favFruit: newFav
        })
    }
    render(){
        return(
            <div>
                <p>You clicked {this.state.count} times</p>
            <button onClick={this.setCount}>
            Click Me
            </button>
            <p>My favorite fruit is {this.state.favFruit}</p>
            <input type="text" placeholder="Please type in your favorite fruit" onChange={(e) => this.setfavFruit(e.target.value)}></input>
            </div>
        )
    }
}