import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "redux/filter/filterSlice";
import { getFilter } from "redux/filter/filterSelectors";

export const Filter = () => {
	const filter = useSelector(getFilter);
	const dispatch = useDispatch();

	const changeFilter = (e) => {
		dispatch(setFilter(e.target.value));
	};

	return (
		<label>
			Find contacts by name <input value={filter} onChange={changeFilter} />
		</label>
	);
};
