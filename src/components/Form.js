import React, { Component } from 'react'
import axios from 'axios'
import './Home.css'

class Form extends Component {
    constructor(props) {
        super(props)

        this.inputRef = React.createRef()

        this.state = {
            userName: '',
            password: '',
            userType: 'normal',
            userId: '',
            title: '',
            body: '',
            errorMsg: '',
            apiData: []
        }
    }

    componentDidMount() {
        this.inputRef.current.focus()
    }

    changeUserName = (event) => {
        this.setState({
            userName: event.target.value
        })
    }
    changePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    changeUserType = (event) => {
        this.setState({
            userType: event.target.value
        })
    }
    handleSubmit = event => {
        alert(`${this.state.userName} ${this.state.password} ${this.state.userType}`)
        event.preventDefault()
    }
    resetForm = event => {
        this.setState({
            userName: '',
            password: '',
            userType: 'normal'
        })
    }
    changeForm = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    apiHandleSubmit = e => {
        e.preventDefault()
        axios.post('http://jsonplaceholder.typicode.com/posts', { userId: this.state.userId, title: this.state.title, body: this.state.body })
            .then(response => {
                console.log(response)
                this.setState({
                    apiData: response.data
                },
                    () => console.log(this.state.apiData))
            })
            .catch(error => {
                console.log(error)
                this.state({
                    errorMsg: error
                })
            })
    }
    apiResetForm = e => {
        this.setState({
            userId: '',
            title: '',
            body: ''
        })
    }

    render() {
        const { password, userName, userType, userId, title, body, apiData } = this.state
        return (
            <div className='dForm'>
                <form className='form' onSubmit={this.handleSubmit} onReset={this.resetForm}>
                    <h3>Create Alert with Refs</h3>
                    <div className='in'>
                        <label>UserName:  </label>
                        <input type='text' ref={this.inputRef} value={userName} onChange={this.changeUserName} />
                    </div>
                    <div className='in'>
                        <label>Passowrd: </label>
                        <input type='password' value={password} onChange={this.changePassword} />
                    </div>
                    <div className='in'>
                        <label>User Type: </label>
                        <select value={userType} onChange={this.changeUserType}>
                            <option value='company'>Company</option>
                            <option value='broker' >Broker</option>
                            <option value='normal'>Normal</option>
                        </select>
                    </div>
                    <button className='in' type='Submit'>Submit</button>
                    <button className='in' type='reset'>Reset</button>
                </form>
                <form className='form' onSubmit={this.apiHandleSubmit} onReset={this.apiResetForm}>
                    <h3>Post Data on APi</h3>
                    <div className='in'>
                        <label>UserId:  </label>
                        <input type='text' name='userId' value={userId} onChange={this.changeForm} />
                    </div>
                    <div className='in'>
                        <label>Title: </label>
                        <input type='text' name='title' value={title} onChange={this.changeForm} />
                    </div>
                    <div className='in'>
                        <label>Body: </label>
                        <input type='text' name='body' value={body} onChange={this.changeForm} />
                    </div>
                    <button className='in' type='Submit'>Submit</button>
                    <button className='in' type='reset'>Reset</button>
                </form>
                {/* <table>
                <thead>
                    <tr>
                        <th>UserID</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        apiData.length ? apiData.map(data =>
                            <tr key={data.id}>
                                <td>{data.userId}</td>
                                <td>{data.title}</td>
                                <td>{data.body}</td>
                            </tr>) : null
                    }
                </tbody>
            </table> 
            <div>
                    {
                        errorMsg.length ? <h4>{errorMsg}</h4> : null
                    }
            </div>*/}
            </div>
        )
    }
}

export default Form
