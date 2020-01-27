import React, { Component } from 'react'
import serializeForm from 'form-serialize'
import { handleNewQuestion } from '../actions/questions'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class NewQuestion extends Component {
    state = {
        questionOne: '',
        questionTwo: '',
        toHome: false
    }

    handleSubmit = e => {
        e.preventDefault()
        const formValues = serializeForm(e.target, { hash: true })
        const uncompleteForm = Object.values(formValues).length < 2
        if (uncompleteForm) {
            alert('You have to write two options')
            return
        }
        const {questionOne, questionTwo} = formValues
        const author = this.props.author
        console.log(questionOne, questionTwo, author)
        this.props.dispatch(handleNewQuestion(questionOne, questionTwo, author))
        this.setState({toHome: true})
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    trimValue = e => {
        console.log(e.target.value)
    }

    render() {
        if (this.state.toHome) return <Redirect to='/' />
        return(
            <div className="border w-1/2 mx-auto rounded mt-4 px-4">
                <p className="bg-blue-100 text-gray-800 text-4xl text-center">Create New Question</p>
                <p className="text-gray-800 mt-4">Complete the question:</p>
                <p className="text-gray-800 mt-4 text-2xl">Would you rather...</p>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" className="focus:shadow-outline bg-gray-100 border border-gray-300 rounded w-full h-10 mt-4 px-4 leading-tight" name="questionOne" placeholder="Enter Option One Text Here" value={this.state.questionOne} onChange={this.handleChange} onBlur={this.trimValue}/>
                    <p className="text-gray-800 mt-4 text-2xl text-center">OR</p>
                    <input type="text" className="focus:shadow-outline bg-gray-100 border border-gray-300 rounded w-full h-10 mt-4 px-4 leading-tight" name="questionTwo" placeholder="Enter Option Two Text Here" value={this.state.questionTwo} onChange={this.handleChange} onBlur={this.trimValue}/>
                    <button className="w-full mt-8 h-12 mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = ({authedUser}) => (
    {
        author: authedUser
    }
)

export default connect(mapStateToProps)(NewQuestion)