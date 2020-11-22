import { connect } from 'react-redux'
import { BuyCake } from '../Redux/Cake/cakeActions'

import React, { Component } from 'react'

class CakeContainer extends Component {

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

    buyCakes = (number) => {        
        this.props.dispatch(BuyCake(number))
    }

    render() {
        return (
            <div>
                <h3>No. of cakes: {this.props.noOfCakes}</h3>
                <input type='number' value={this.state.number} onChange={this.setNumber} />
            <button onClick={()=>this.buyCakes(this.state.number)}>Buy {this.state.number} Cake</button>
            </div >
        )
    }
};

const mapStateToProps = (state) => {
    return {
        noOfCakes: state.cake.noOfCakes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // buyCakes: (number) => dispatch(BuyCake(number))
        dispatch
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)

