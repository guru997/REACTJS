import React, { Component } from 'react'

 class EventBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message:'Hello'
        }
    }
    
    clickGudbye()
{
   this.setState({
     message: 'Goodbye!'  
   })
console.log(this)
}



    render() {
        return (
            <div>
                <div>{ this.state.message }</div>
                <button onClick = { this.clickGudbye.bind(this) }>Click</button>
            </div>
        )
    }
}

export default EventBind
 
