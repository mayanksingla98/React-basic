import React, { Component } from 'react'
import axios from 'axios'

class GetApi extends Component {

    constructor(props) {
        super(props)

        this.state = {
            employess: [],
            errorMsg: ''
        }
    }

    componentDidMount() {
        axios.get('http://dummy.restapiexample.com/api/v1/employees')
            .then(response => {
                console.log(response)
                this.setState(
                    {
                        employess: response.data.data
                    },
                    () => console.log(this.state.employess))
            })
            .catch(error => {
                console.log(error)
                this.setState(
                    {
                        errorMsg: error
                    })
            })

    }

    render() {
        const { employess, errorMsg } = this.state
        return (
            <>
                {/* <div>
                    EMPLOYEE DATA:
                {
                        employess.length &&
                        employess.map(employee => <h5 key={employee.id} > Name: {employee.employee_name} Salary: {employee.employee_salary}</h5>)
                    }
                    {
                        errorMsg.length &&
                        <h4>{errorMsg}</h4>
                    }
                </div> */}
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Salary</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employess.length ? employess.map(emp =>
                                <tr key={emp.id}>
                                    <td>{emp.employee_name}</td>
                                    <td>{emp.employee_salary}</td>
                                    <td>{emp.employee_age}</td>
                                </tr>) : null
                        }
                    </tbody>
                </table>
                <div>
                    {
                        errorMsg.length ? <h4>{errorMsg}</h4> : null
                    }
                </div>
            </>
        )
    }
}

export default GetApi
