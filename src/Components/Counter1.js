import React, { Component } from 'react'

class Count extends Component {
    // only re-render when value e either incremented or decremented i.e previous value !== new value
    
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('Get Snapshot Before Update');
        if (this.props.number < 0) {
            return 0
        }
        return null
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // console.log(prevProps.number, this.props.number);
        if (snapshot !== null) {
            this.props.number = snapshot
        }
        if (prevProps.number !== this.props.number) {
            console.log('Component Updated') 
            document.title = `Counter: ${this.props.number}`;
        }
    }

    render() {
        return (
            <div><h1>Counter: {this.props.number}</h1></div>
        )
    }
}

const ErrorComponent = () => <div>{this.props.errrrreeerr}</div>

export default class Counter1 extends Component {
    constructor(props) {
        console.log('Constructor');
        super(props)
        this.state = {
            count: 0,
            seed: 0,
            intializing: true
        }

        this.increaseCnt = () => { this.setState({ count: this.state.count + 1 }) }
        this.decreaseCnt = () => { this.setState({ count: this.state.count - 1 }) }
    }

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
        setTimeout(()=> {
            this.setState({intializing: false})
        }, 2000)
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

    render() {
        console.log('Render');
        if (this.state.intializing) {
            return <div>intializing...</div>
        }

        if (this.props.showErrorComponent && 
            this.state.error) {
                return <div>
                    Encounterd an error: {this.state.error.message}
                </div>
            }

        return (
            <div>
                <h2>Class based Component LifeCycle</h2>
                <Count number={this.state.count} />
                <button onClick={this.increaseCnt}>⬆️</button>
                <button onClick={this.decreaseCnt}>⬇️</button>
                {this.props.showErrorComponent ? <ErrorComponent /> : null }
            </div>
        )
    }

    componentWillUnmount() {
        console.log('Component Unmounted')
        console.log('-------------------------');
    }

    componentDidCatch(error, info) {
        console.log('Component Did Catch');
        this.setState({error, info})
    }
}
