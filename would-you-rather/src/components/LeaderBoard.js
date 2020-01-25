import React, { Component } from 'react'
import { connect } from 'react-redux'
import LeaderCard from './LeaderCard'

class LeaderBoard extends Component {
    render() {
        const { leaders } = this.props || []
        return (
            <div>
                <ul>
                    { leaders.map(user => <LeaderCard key={user.id} user={user} />) }
                </ul>
            </div>
        )
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