import { useDispatch, useSelector } from "react-redux";
import { filtersSliceReducer } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";

const SearchBox = ({ onChange }) => {
  const dispatch = useDispatch();

  return (
    <label className={css.searchLabel}>
      Find contacts by name
      <input
        className={css.searchInput}
        type="text"
        name="name"
        onChange={(evt) =>
          dispatch(filtersSliceReducer(evt.target.value.toLowerCase()))
        }
      />
    </label>
  );
};

export default SearchBox;
