import {connect} from 'react-redux'
import { buyIceCream } from '../Redux/IceCream/IceCreamActions'

import React, { Component } from 'react'

class IceCreamContainer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             number: 1
        }
    }

    setNumber = (e) => {
        this.setState(
            {
                number : e.target.value
            }
        )
    }
    
    render() {
        return (
            <div>
            <h3>No. of IceCream: {this.props.noOfIceCream}</h3>
            <input type='number' value={this.state.number} onChange = {this.setNumber}/>
            <button onClick={()=>this.props.buyIceCream(this.state.number)}>Buy {this.state.number} IceCream</button>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        noOfIceCream: state.iceCream.noOfIceCream
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyIceCream: (number) => dispatch(buyIceCream(number))
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (IceCreamContainer)

