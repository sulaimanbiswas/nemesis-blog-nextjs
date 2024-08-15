"use client";

import { useEffect, useState } from "react";

const Search = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (active) {
      document.getElementById("search-input").focus();
    }
  }, [active]);
  return (
    <>
      <div>
        <div id="fbt-content-overlay" onclick="closeNav()" />
        <form autoComplete="off" id="search" role="search">
          <div className="input">
            <input
              className="search"
              name="search"
              placeholder="Search..."
              type="text"
            />
            <button className="submit fa fa-search" type="submit" value />
          </div>
          <button id="close" type="reset" onClick={() => setActive(false)}>
            ×
          </button>
        </form>
      </div>
    </>
  );
};

export default Search;
