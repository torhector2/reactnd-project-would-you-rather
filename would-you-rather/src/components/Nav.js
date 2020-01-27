import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav (props) {
    const { authedUser, name, logout } = props

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
                    {name}
                </li>
                <li>
                    <button className='mx-4 mb-4 border px-4 rounded bg-blue-700 text-white' onClick={() => props.logout()}>Logout</button>
                </li>
            </ul>
        </nav>
    )
}