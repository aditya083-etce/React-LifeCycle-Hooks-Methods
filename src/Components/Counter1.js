import React, { Component } from 'react'

class Count extends Component {
    // only re-render when value e either incremented or decremented i.e previous value !== new value
    componentDidUpdate(prevProps, prevState) {
        // console.log(prevProps.number, this.props.number);
        if (prevProps.number !== this.props.number) {
            console.log('Component Updated') 
        }
    }

    render() {
        return (
            <div><h1>Counter: {this.props.number}</h1></div>
        )
    }
}

export default class Counter1 extends Component {
    constructor(props) {
        console.log('Constructor');
        super(props)
        this.state = {
            count: 0,
            seed: 0
        }

        this.increaseCnt = () => { this.setState({ count: this.state.count + 1 }) }
        this.decreaseCnt = () => { this.setState({ count: this.state.count - 1 }) }
    }

    // assign anything from props to the state
    static getDerivedStateFromProps(props, state) {
        if (props.seed && state.seed !== props.seed) {
            return {
                seed: props.seed,
                count: props.seed
            }
        }
        return null
    }


    componentDidMount() {
        console.log('Component Mounted')
        console.log('----------------------')
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.ignoreprop && nextProps.ignoreprop !== this.props.ignoreprop) {
            console.log('Should Component Update - DO NOT RENDER');
            return false
        }
        console.log('Should Component Update - RENDER');
        return true
    }

    componentWillUnmount() {
        console.log('Component Unmounted')
        console.log('-------------------------');
    }

    render() {
        console.log('Render');
        return (
            <div>
                <h2>Class based Component LifeCycle</h2>
                <h1><Count number={this.state.count} /></h1>
                <button onClick={this.increaseCnt}>⬆️</button>
                <button onClick={this.decreaseCnt}>⬇️</button>
            </div>
        )
    }
}
