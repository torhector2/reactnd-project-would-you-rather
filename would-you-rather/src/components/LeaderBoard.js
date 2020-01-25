import React, { Component } from 'react'
import { connect } from 'react-redux'

class LeaderBoard extends Component {
    render() {
        console.log(this.props.leaders)
        return <div>Leader Board</div>
    }
}

function mapStateToProps({ users }) {
    let leaders = Object.values(users) || []
    leaders = leaders
        .filter(user => Object.keys(user.answers).length + user.questions.length > 0)
        .map(user => ({
            ...user,
            score: Object.keys(user.answers).length + user.questions.length,
            answeredCount: Object.keys(user.answers).length,
            createdCount: user.questions.length
        }))
        .sort((a, b) => b.score - a.score)

    return {
        leaders
    }
}

export default connect(mapStateToProps)(LeaderBoard)