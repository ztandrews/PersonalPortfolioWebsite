import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div className = "container">
            <h1 className = "page-header">Home</h1>
            
            <img src="https://media-exp1.licdn.com/dms/image/C4D03AQEp9Y3FX-3o1w/profile-displayphoto-shrink_800_800/0/1631640775932?e=1646870400&v=beta&t=ZN-LIe_2yz5abfGVfZzS-ARW9A8eMYQNbstVYBQwwjY" className="profile-picture"></img>

            <h2 className = "subtitle">Hello, I'm Zach Andrews!</h2>
            <h2 className = "subtitle">Skills</h2>
            <h3 className = "subtitle2">Languages</h3>
            <h3 className = "subtitle2">Frameworks</h3>
            <h3 className = "subtitle2">Operating Systems</h3>
            <h3 className = "subtitle2">Methodologies</h3>
            <h3 className = "subtitle2">Other</h3>
            <h2 className = "subtitle">Experience</h2>
            <h2 className = "subtitle">Education</h2>
        </div>
        )
    }
}
