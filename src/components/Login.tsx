import React, { Component } from 'react'

interface Props {
    
}
interface State {
    
}

export default class Login extends Component<Props, State> {

    state = {}

    render() {
        console.log(this.props)
        return (
            <div>
                This is the login page
            </div>
        )
    }
}
