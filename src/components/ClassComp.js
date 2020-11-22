import React from 'react'

class ClassComp extends React.Component{
    constructor(){
        super()
        this.state = {
            message: 'This is a class Component with State 1'
        }
    }

    changeMessage() {

        // let newmessage= 'State 2'
        // if(newmessage.localeCompare(this.message))
        // {
        //     newmessage= 'This is a class Component with State 1'
        // }
        this.setState({
            message: 'State 2'
        })       
    }
    
    render()
    {
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick= {() => this.changeMessage()} >Act</button>
                {this.props.children}
            </div>
        );
    }
}

export default ClassComp;