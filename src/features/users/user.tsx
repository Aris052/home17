import { useAppDispatch } from '../../app/hooks'
import { IUser } from './types'
import { deleteUser } from './user.slice'
interface UserProps {
	user: IUser
}
export const User: React.FC<UserProps> = ({ user }) => {
	const dispatch = useAppDispatch()

	const handleDelete = () => {
		dispatch(deleteUser(user.id))
	}

	return (
		<div>
			<p>{user.name} {user.surname}</p>
			<button onClick={handleDelete}>Delete</button>
		</div>
	)
}
