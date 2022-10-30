import React, { Component } from 'react';
import './App.css';
import Counter1 from './Components/Counter1';
import Counter2 from './Components/Counter2';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mountclass: false,
      mountfunctional: false,
      ignoreProp: false,
      seed: 0,
      showErrorComponent: false
    }

    this.mountCounter1 = () => this.setState({ mountclass: true })
    this.unmountCounter1 = () => this.setState({ mountclass: false })
    this.mountCounter2 = () => this.setState({ mountfunctional: true })
    this.unmountCounter2 = () => this.setState({ mountfunctional: false })

    this.justIgnore = () => this.setState({ ignoreProp: !this.state.ignoreProp })
    this.seedGenerator = () => this.setState({ seed: Number.parseInt(Math.random() * 100) })
    this.errorGenerator = () => this.setState({ showErrorComponent: !this.state.showErrorComponent })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <div>
              <button onClick={this.mountCounter1} disabled={this.state.mountclass || this.state.mountfunctional}>Mount Class based Counter</button>
              <button onClick={this.unmountCounter1} disabled={!this.state.mountclass}>Unmount Class based Counter</button>
            </div>
            <div>
              <button onClick={this.mountCounter2} disabled={this.state.mountfunctional || this.state.mountclass}>Mount Functional based Counter</button>
              <button onClick={this.unmountCounter2} disabled={!this.state.mountfunctional}>Unmount Functional based Counter</button>
            </div>
          </div>

          {this.state.mountclass ? <div>
            <button class='methodbtn' onClick={this.justIgnore}>Ignore Action</button>
            <button class='methodbtn' onClick={this.seedGenerator}>Set Counter</button>
            <button class='methodbtn' onClick={this.errorGenerator}>Toggle Error Component</button>
          </div> : null}

          {this.state.mountclass ?
            <Counter1
              ignoreprop={this.state.ignoreProp}
              seed={this.state.seed}
              showErrorComponent={this.state.showErrorComponent} />
            : null
          }
          {this.state.mountfunctional ?
            <Counter2 />
            : null
          }
        </header>
      </div>
    )
  }
}