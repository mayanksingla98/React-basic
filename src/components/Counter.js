import React from 'react'

class Counter extends React.Component{

    constructor(){
        super()
        this.state = {
            count: 0
        }
    }

    increment()
    {
        this.setState(
            {
                count: this.state.count + 1
            }, 
            ()=>{console.log('within state',this.state.count)
            }

        )
        console.log(`out of state ${this.state.count}`)
    }

    prevIncrement()
    {
        this.setState(
            prevState => ({
                count: prevState.count + 1
            })
        )
    }

    incrementFive()
    {
        // this.increment()
        // this.increment()
        // setTimeout(() => {
        //     this.increment()
        // }, 1000);
        // this.increment()
        // this.increment()
        this.prevIncrement()
        this.prevIncrement()
        this.prevIncrement()
        this.prevIncrement()
    }


    render()
    {
        return(
            <div>
                <h2>Count-- {this.state.count}</h2>
                <button onClick = {() => this.increment()}>INC..</button>
                <h2>Count using previous state-- {this.state.count}</h2>
                <button onClick = {() => this.incrementFive()}>INC..</button>
            </div>
        )
    }
}

export default Counter