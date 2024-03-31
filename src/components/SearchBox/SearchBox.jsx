import css from './SearchBox.module.css';

const SearchBox = ({ searchName, onChange }) => {
  return (
    <label className={css.searchLabel}>
      Find contacts by name
      <input
        className={css.searchInput}
        type="text"
        name="name"
        value={searchName}
        onChange={onChange}
      />
    </label>
  );
};

export default SearchBox;
