import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }



    render() {


        //******** TYPES OF CONDITIONAL OPERATORS ********** */

        //****************S SHORT CIRCUIT OPERATOR *************************** */
        // return this.state.isLoggedIn && <div>Welcome Guru</div>


        //******** TERNERARY OPERATOR *********** */
        // return this.state.isLoggedIn ? (
        //     <div>Welcome Guru</div>
        // ): (
        //     <div>Welcome Guest</div>
        // )
        //****************** ELEMENT VAROABLES *********************************** */
        // let message
        // if(this.state.isLoggedIn)
        // {
        //     message = <div>Welcome Guru</div>
        // }
        // else
        // {
        //     message = <div>Welcome Guest</div>
        // }

        // return <div> { message } </div>

        //******************** IF/ELSE *************************** */
        // if(this.state.isLoggedIn)
        // {
        //    return <div>Welcome Guru</div>
        // }
        // else
        // {
        //    return <div>Welcome Guest</div> 
        // }


    }
}

export default UserGreeting
