import React from "react"

export class Welcome extends React.Component{
    render(){
        return(
            <div>
                Welcome {this.props.name}
            </div>
        )
    }
}