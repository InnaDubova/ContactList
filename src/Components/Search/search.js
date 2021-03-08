import React from "react";
import "../Search/search.css";

const Search = () => {
    return(
        <div class="container">
        <form action="/action_page.php">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Search" name="search"/>
            <div class="input-group-btn">
              <button class="btn btn-default" type="submit"><i class="fa fa-search" aria-hidden="true"></i></button>
            </div>
          </div>
        </form>
      </div>
      )
}

export default Search;