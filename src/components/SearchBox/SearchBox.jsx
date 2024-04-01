import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();

  return (
    <label className={css.searchLabel}>
      Find contacts by name
      <input
        className={css.searchInput}
        type="text"
        name="name"
        onChange={(evt) =>
          dispatch(changeFilter(evt.target.value.toLowerCase()))
        }
      />
    </label>
  );
};

export default SearchBox;
