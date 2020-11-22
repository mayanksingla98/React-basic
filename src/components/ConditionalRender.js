import React, { Component } from 'react'

class ConditionalRender extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLogged: false
        }
    }

    render() {
        // if (this.state.isLogged) {
        //     return <h4>Conditional-- Welcome Mayank</h4>
        // }
        // else return <h4>Conditional-- Welcom Guest</h4>

        return(
            this.state.isLogged ? 
            <h4>Conditional-- Welcome Mayank</h4> : 
            <h4>Conditional-- Welcom Guest</h4>
        )

        // return (
        //     <div>
        //         <h4>Welcome Mayank</h4>
        //         <h4>Welcom Guest</h4>
        //     </div>
        // )
    }
}

export default ConditionalRender
