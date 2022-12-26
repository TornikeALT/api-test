import { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSubmit }) => {
  const [enteredText, setEnteredText] = useState('');

  const handleFormSubmit = e => {
    e.preventDefault();
    onSubmit(enteredText);
  };

  const handleInputChange = e => {
    setEnteredText(e.target.value);
  };

  return (
    <div className="search_btn">
      <form onSubmit={handleFormSubmit}>
        <input type="text" value={enteredText} onChange={handleInputChange} />
      </form>
    </div>
  );
};

export default SearchBar;
