import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit"
import { useHttp } from "../../hooks/http.hook";

const filtersAdapter = createEntityAdapter();

const initialState = filtersAdapter.getInitialState({
	activeFilter: 'all',
    filterLoadingStatus: 'idle'
})


export const fetchFilters = createAsyncThunk(
	'filters/fetchFilters',
	() => {
		const {request} = useHttp();
		return request('http://localhost:3001/filters');
	}
)

const filters = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		fitlerSetActive: (state, action) => {
					state.activeFilter = action.payload
				}
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchFilters.pending, state => {state.filterLoadingStatus = 'loading'})
			.addCase(fetchFilters.fulfilled, (state, action) => {
						state.filterLoadingStatus = 'idle';
						filtersAdapter.setAll(state, action.payload);
					})
			.addCase(fetchFilters.rejected, state => {state.filterLoadingStatus = 'error'})
			.addDefaultCase(() => {})
	}
});


const {actions, reducer} = filters;

export const {selectAll} = filtersAdapter.getSelectors(state => state.filters);

export default reducer;
export const {
	filtersFetching,
	filtersFetched,
	filtersFetchingError,
	fitlerSetActive
} = actions