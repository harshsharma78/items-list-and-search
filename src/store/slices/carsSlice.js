import { createSlice, nanoid } from '@reduxjs/toolkit';

const carsSlice = createSlice({
	name: 'cars',
	initialState: {
		searchTerm: '',
		data: [],
	},
	reducers: {
		changeSearchTerm(state, action) {
			state.searchTerm = action.payload;
		},

		// Assumption:
		// action.payload === {name:'ab, cost: 14000}
		addCar(state, action) {
			state.data.push({
				name: action.payload.name,
				cost: action.payload.cost,
				id: nanoid(),
			});
		},
		removeCar(state, action) {
			// Assumptions
			// action.payload === id of the car to be removed
			const updated = state.data.filter(data => {
				return data.id !== action.payload;
			});
			state.data = updated;
		},
	},
});


export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
