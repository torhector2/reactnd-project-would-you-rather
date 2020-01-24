import React, { Component } from 'react'

class UnansweredQuestionPage extends Component {
    render() {
        const { question, author, handleSubmit } = this.props
        return(
            <div className="h-56 w-full max-w-full flex mt-8 mb-8 text-gray-900">
                <div className="ml-4 w-56 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{backgroundImage: `url(${author.avatarURL})`}}>
                </div>
                <form className="mb-8 ml-4" onSubmit={handleSubmit}>
                    <div className="font-bold text-xl mb-2">{`${author.name} asks "Would you rather"`}</div>
                    <div>
                        <input type="radio" id="optionOne" value="optionOne" name="answer" className="form-radio h-4 w-4" defaultChecked/>
                        <span className="ml-2">{`...${question.optionOne.text}...`}</span>
                    </div>
                    <div>
                        <input type="radio" id="optionTwo" value="optionTwo" name="answer" className="form-radio h-4 w-4"/>
                        <span className="ml-2">{`...${question.optionTwo.text}...`}</span>
                    </div>
                    <button className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
                </form>
            </div>
        )
    }
}

export default UnansweredQuestionPage