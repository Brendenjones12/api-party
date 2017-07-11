import React, {Component} from 'react'
import "./GitHub.css"
import {Route} from 'react-router-dom'

class GitHub extends Component {
state={
    username: ''
}

handleChange = (ev) => {
    this.setState({
        username: ev.target.value
    })
}
handleSubmit = (ev) => {
    ev.preventDefault()
    this.props.history.push(`/github/${this.state.username}`)
}

    render() {
        return (
            <div className='github'>
            <img className="github-logo" src="http://www.aha.io/assets/github.7433692cabbfa132f34adb034e7909fa.png" 
            alt="github logo"
            />
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input 
                    type="text"
                    value={this.state.username}
                    onChange={this.handleChange}
                     />
                </div>
                <div>
                    <button>Look Up GitHub UserName</button>
                </div>
            </form>

            <Route exact path="/GitHub" render={() => <h3> Plesase enter a username to search on github </h3>} />
            <Route path="/GitHub/:username" render={(props) => <h3> You Seasrched For {props.match.params.username}</h3> } />
            </div>

        )
    }
}

export default GitHub