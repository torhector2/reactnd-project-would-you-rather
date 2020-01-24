import React, { Component } from 'react'

class ResultCard extends Component {
    render() {
        const { optionText, votes, totalVotes, voted } = this.props
        const percentage = (totalVotes !== 0 ? votes/totalVotes * 100 : 0).toFixed(1)
        return (
            <div className={`mt-4 ml-4 mr-4 w-11/12 border border-gray-600 p-4 rounded ${voted ? 'bg-teal-100' : ''}`}>
                { voted && 
                    (<div class="flex">
                        <div className="mr-2 bg-teal-600 text-white p-2 rounded leading-none flex items-center">
                            Your Vote
                        </div>
                    </div>)  
                }
                
                <div className="text-teal-900 font-bold text-lg">Would you rather {optionText}</div>
                <div className="shadow w-full bg-gray-300 mt-2">
                    <div className="bg-teal-400 text-xs leading-none py-1 text-center text-white font-bold" style={{width: `${percentage}%`}} >{percentage}%</div>
                </div>
                <div className="text-gray-800 font-bold text-center">{votes} out of {totalVotes} votes</div>
            </div>
        )
    }
}

export default ResultCard