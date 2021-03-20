import React from "react";
import "../Search/search.css";

const Search = () => {
    return(
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Search" name="search"/>
            <div className="input-group-btn">
              <button className="btn btn-default" type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
            </div>
          </div>
      )
}

export default Search;