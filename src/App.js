import React, { Component } from 'react';
import './App.css';
import Counter1 from './Components/Counter1';
// import Counter2 from './Components/Counter2';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mount: true,
      ignoreProp: false,
      seed: 0,
      showErrorComponent: false
    }

    this.mountCounter1 = () => this.setState({ mount: true })
    this.unmountCounter1 = () => this.setState({ mount: false })

    this.justIgnore = () => this.setState({ ignoreProp: !this.state.ignoreProp })
    this.seedGenerator = () => this.setState({ seed: Number.parseInt(Math.random() * 100) })
    this.errorGenerator = () => this.setState({ showErrorComponent: !this.state.showErrorComponent})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <button onClick={this.mountCounter1} disabled={this.state.mount}>Mount Class based Counter</button>
            <button onClick={this.unmountCounter1} disabled={!this.state.mount}>Unmount Class based Counter</button>
          </div>

          {this.state.mount ? <div>
            <button class='methodbtn' onClick={this.justIgnore}>Ignore Action</button>
            <button class='methodbtn' onClick={this.seedGenerator}>Set Counter</button>
            <button class='methodbtn' onClick={this.errorGenerator}>Toggle Error Component</button>
          </div> : null}

          {this.state.mount ?
            <Counter1
              ignoreprop={this.state.ignoreProp}
              seed={this.state.seed}
              showErrorComponent={this.state.showErrorComponent} />
            : null
          }
        </header>
      </div>
    )
  }
}