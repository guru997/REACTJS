import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             username : '',
             comments : '',
             topic : 'react'
        }
    }
    
    handleUsernameChange = event =>
    {
        this.setState(
            {
                username: event.target.value
            }
        )
    }

    handleCommentsChange = event =>
    {
        this.setState(
            {
                comments: event.target.value
            }
        )
    }

    handleTopicChange = event =>
    {
        this.setState(
            {
                topic: event.target.value
            }
        )
    }

    handleSubmit = event =>
    {
        alert(`${ this.state.username } ${ this.state.comments } ${ this.state.topic } `)
        event.preventDefault()
    }


    render() {
        return (
            <form onSubmit = { this.handleSubmit } >
                <div>
                    <br></br>
                    <label> Username</label>
                    <input type = "text" value = { this.state.username } 
                    onChange = { this.handleUsernameChange }/>
                </div>
                <div>
                    <br></br>
                    <label>comments</label>
                    <textarea value = { this.state.comments }
                    onChange = { this.handleCommentsChange }></textarea>
                </div>

                <div>
                    <br></br>
                    <label>Topic</label>
                    <select value = { this.state.topic } onChange = { this.handleTopicChange } >
                        <option value = "react">React</option>
                        <option value = "anugluar">Angular</option>
                        <option value = "vue">Vue</option>
                    </select>
                </div>
                <br></br>
                <button type = "submit">Submit</button>
            </form>
        )
    }
}

export default Form
