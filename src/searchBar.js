import React, { useState } from "react";
import { MdOutlineSearch } from "react-icons/md";

export default function Searchbar(props) {
  const [term, setTerm] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    props.onSubmitBtn(term);
  };

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <div className="searchBar">
          <input
            placeholder="Search Ships"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
          <button type="submit">
            <MdOutlineSearch className="icon" />
          </button>
        </div>
      </form>
    </div>
  );
}
