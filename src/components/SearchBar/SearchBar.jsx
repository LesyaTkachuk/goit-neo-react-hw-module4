import { FaSearch } from "react-icons/fa";
import Button from "src/components/Button/Button";
import css from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(e.target.elements.search.value);
  };

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          autoComplete="off"
          name="search"
          autoFocus
          placeholder="Search images and photos"
        />
        <Button title="Search" type="submit" icon={<FaSearch />} />
      </form>
    </header>
  );
};

export default SearchBar;
