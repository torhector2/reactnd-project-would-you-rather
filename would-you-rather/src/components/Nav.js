import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'

class Nav extends Component {
    render() {
        const { user, logout } = this.props
        return (
            <nav className="my-4 mx-4 border-b">
                <ul className="flex text-blue-600">
                    <li>
                        <NavLink to='/' exact className='mx-4' activeClassName='border-l border-t border-r py-4 px-4 rounded bg-blue-100'>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/add' exact className='mx-4' activeClassName='border-l border-t border-r py-4 px-4 rounded bg-blue-100'>
                            New Question
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/leaderboard' exact className='mx-4' activeClassName='border-l border-t border-r py-4 px-4 rounded bg-blue-100'>
                            Leader Board
                        </NavLink>
                    </li>
                    <li className='ml-64 mr-4 text-gray-800'>
                        Hello, <span className='font-bold'>{user.name}</span>
                    </li>
                    <li className='ml-4 -mt-2'>
                        <img alt='avatar' className='h-10 w-10' src={user.avatarURL}/>
                    </li>
                    <li>
                        <button className='mx-4 mb-4 border px-4 rounded bg-blue-700 text-white' onClick={() => logout(this.props.history)}>Logout</button>
                    </li>
                </ul>
            </nav>
        )
    }
}
export default withRouter(Nav)