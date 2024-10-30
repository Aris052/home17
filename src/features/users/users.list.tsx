import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { User } from './user'
import { getAllUsers, users } from './user.slice'

export const UsersList = () => {
	const dispatch = useAppDispatch()
	const usersList = useAppSelector(users)
	useEffect(() => {
		dispatch(getAllUsers())
	}, [])
	return <>
		<h1>Users List</h1>
		<div className='users'>
			{
				usersList.map(user => <User key={user.id} user={user} />)
			}
		</div>
	</>
}