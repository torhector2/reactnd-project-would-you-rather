import React, { Component } from 'react'

class LeaderCard extends Component {
    render() {
        const { user } = this.props
        return (
            <li>
                <div className={'mt-4 ml-4 mr-4 w-1/3 border border-gray-600 p-4 rounded'}>
                    <div className="inline-block">
                        <div className="ml-4 h-24 w-24 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l overflow-hidden mx-auto" style={{backgroundImage: `url(${user.avatarURL})`}}></div>
                        <div className="mx-4 w-24 mt-2 px-2 bg-teal-400 text-teal-800 font-bold text-center text-lg rounded ">Score {user.score}</div>
                    </div>
                    
                    <div className="inline-block">
                        <div className="ml-8 text-teal-900 font-bold text-4xl">{user.name}</div>
                        <div className="ml-8 text-gray-800 font-bold">Answered questions {user.answeredCount}</div>
                        <div className="ml-8 text-gray-800 font-bold">Created questions {user.createdCount}</div>
                    </div>
                </div>
            </li>
        )
    }
}

export default LeaderCard