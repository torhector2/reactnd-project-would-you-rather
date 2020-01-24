import React, { Component } from 'react'

class ResultCard extends Component {
    render() {
        const { optionText, votes, totalVotes, voted } = this.props
        console.log(votes)
        const percentage = totalVotes !== 0 ? votes/totalVotes * 100 : 0
        return (
            <div>
                <p>{optionText}</p>
                <p>{votes}</p>
                <p>{totalVotes}</p>
                <p>{percentage.toFixed(1)}</p>
                <p>Voted: {voted ? "Voted" : "Not voted"}</p>
            </div>
        )
    }
}

export default ResultCard