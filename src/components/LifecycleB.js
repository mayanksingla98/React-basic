import React, { Component } from 'react'

class LifecycleB extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
        }
        console.log('LifeCycle B constructor')
    }
    
    static getDerivedStateFromProps(props,state)
    {
        console.log('Lifecycle B getDerivedStateFromProps')
        return null
    }

    componentDidMount()
    {
        console.log('LifeCycle B componentDidMount');
    }
    
    componentDidUpdate()
    {
        console.log('LifeCycle B componentDidUpdate');
    }

    shouldComponentUpdate()
    {
        console.log('LifeCycle B shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps , prevState)
    {
        console.log('LifeCycle B getSnapshotBeforeUpdate');
        return null;
    }

    render() {
        console.log('Lifecycle B render')
        return (
            <div> LifeCycle B </div>
        )
    }
}

export default LifecycleB
