import React, { Component } from 'react'
import serialize from 'form-serialize'

class NewQuestion extends Component {
    render() {
        return(
            <div className="border w-1/2 mx-auto rounded mt-4 px-4">
                <p className="bg-blue-100 text-gray-800 text-4xl text-center">Create New Question</p>
                <p className="text-gray-800 mt-4">Complete the question:</p>
                <p className="text-gray-800 mt-4 text-2xl">Would you rather...</p>
                <form>
                    <input type="text" className="focus:shadow-outline bg-gray-100 border border-gray-300 rounded w-full h-10 mt-4 px-4 leading-tight" name="questionOne" placeholder="Enter Option One Text Here"/>
                    <p className="text-gray-800 mt-4 text-2xl text-center">OR</p>
                    <input type="text" className="focus:shadow-outline bg-gray-100 border border-gray-300 rounded w-full h-10 mt-4 px-4 leading-tight" name="questionTwo" placeholder="Enter Option Two Text Here"/>
                    <button className="w-full mt-8 h-12 mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Sign In</button>
                </form>
            </div>
        )
    }
}

export default NewQuestion