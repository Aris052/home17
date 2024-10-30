import { PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { createAppSlice } from '../../app/createAppSlice'
import { IState, IUser } from './types'

const initialState: IState = {
	list: []
}
export const userSlice = createAppSlice({
	name: "users",
	initialState,
	reducers: create => ({
		getAllUsers: create.asyncThunk(
			async () => {
				const response = await axios.get("http://localhost:3004/users")
				return response.data
			},
			{
				fulfilled: (state, action: PayloadAction<IUser[]>) => {
					state.list = action.payload
				}
			}
		),
		deleteUser: create.asyncThunk(
			async (userId: string) => {
				await axios.delete(`http://localhost:3004/users/${userId}`)
				return userId
			},
			{
				fulfilled: (state, action: PayloadAction<string>) => {
					state.list = state.list.filter((user) => user.id !== action.payload)
				},
			}
		),
	}),
	selectors: {
		users: (state) => state.list,
	}
})
export const { getAllUsers, deleteUser } = userSlice.actions
export const { users } = userSlice.selectors