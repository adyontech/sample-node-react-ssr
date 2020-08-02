import React from "react";

function index(props) {
  return (
    <React.Fragment>
      <div className="navbar">
        <img
          alt="Nayka logo"
          className="naykaLogo"
          src="/r-pool/images/nykaa_logo.svg"
        />
      </div>

      <div className="searchBar">
        <input
          placeholder="search"
          className="mainSearchBar"
          val={props.inputVal}
          onChange={props.onInputChange}
        />
      </div>
    </React.Fragment>
  );
}

export default index;
