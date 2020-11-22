import React, { Component } from 'react'
import ListChild from './ListChild'

class Listing extends Component {
    constructor(props) {
        super(props)

        this.state = {
            persons: [
                {name : 'Mayank' , class: '10'},
                {name: 'Rahul' , class: '19'},
                {name: 'Aakriti',class: '8'},
                {name: 'Neha', class: '10'},
            ]
        }
    }
    render() {
    let personList= this.state.persons.map( (person,index) => (<ListChild key = {index} person = {person}/>))

        return (
            <div>
                {/* {this.state.persons.map((person,index) => <h4 key={index}>Name: {person.name} Class: {person.class}</h4>)}
                 */}
                 {personList}
            </div>
        )
    }
}

export default Listing
