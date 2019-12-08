import React, { Component } from 'react'

interface Props {
    className?: string,
    onClick?: any
}
interface State {
    
}

export default class Button extends Component<Props, State> {
    
    state = {}

    render() {
        return (
            <>
                <button className={this.props.className} onClick={this.props.onClick}>
                    {this.props.children}
                </button> 
            </>
        )
    }
}
