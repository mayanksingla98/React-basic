import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Mayank'
        }
        console.log('LifeCycle A constructor')
    }

    changeState = () =>{
        this.setState({
            name: 'Singla'
        })
    }
    
    static getDerivedStateFromProps(props,state)
    {
        console.log('Lifecycle A getDerivedStateFromProps')
        return null
    }

    componentDidMount()
    {
        console.log('LifeCycle A componentDidMount');
    }

    componentDidUpdate()
    {
        console.log('LifeCycle A componentDidUpdate');
    }

    shouldComponentUpdate()
    {
        console.log('LifeCycle A shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps , prevState)
    {
        console.log('LifeCycle A getSnapshotBeforeUpdate');
        return null;
    }


    render() {
        console.log('Lifecycle A render')
        return (
            <>
            <div> LifeCycle A </div>
            <button onClick = {this.changeState}>Change State</button>
            <LifecycleB/>
            </>
        )
    }
}

export default LifecycleA
