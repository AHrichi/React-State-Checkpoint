import React, { Component } from 'react'

export class Time extends Component {
    constructor(props) {
        super(props);
        this.state = { seconds: 0 };
      }
    
      tick() {
        this.setState(state => ({
          seconds: state.seconds + 1
        }));
      }
    
      componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
      }
    
      componentWillUnmount() {
        clearInterval(this.interval);
      }
    render() {
        return (
            <div style={{margin:'25px'}}>
                Time since Mounting : {this.state.seconds}
            </div>
        )
    }
}

export default Time
